// Stockfish Engine Worker Manager with White-Perspective Normalization
class StockfishEngine {
    constructor() {
        this.worker = null;
        this.isReady = false;
        this.currentEval = { score: "0.0", isMate: false, mateIn: 0, bestMove: null, multipv: [], pvLine: [] };
        this.onEvalCallback = null;
        this.evalSideToMove = 'w';
        this.init();
    }

    init() {
        try {
            this.worker = new Worker('js/stockfish.js');
            this.worker.onmessage = (e) => this.handleMessage(e.data);
            this.send('uci');
            this.send('isready');
        } catch (err) {
            console.error('Failed to initialize Stockfish Web Worker:', err);
        }
    }

    send(cmd) {
        if (this.worker) {
            this.worker.postMessage(cmd);
        }
    }

    setSkillLevel(skillLevel = 20, targetElo = 2500) {
        this.send(`setoption name Skill Level value ${skillLevel}`);
        this.send(`setoption name UCI_LimitStrength value true`);
        this.send(`setoption name UCI_Elo value ${targetElo}`);
    }

    evaluatePosition(fen, depth = 12, callback = null, multiPVCount = 1) {
        this.currentEval = { score: "0.0", isMate: false, mateIn: 0, bestMove: null, multipv: [], pvLine: [] };
        if (callback) this.onEvalCallback = callback;
        const parts = fen.split(' ');
        this.evalSideToMove = parts[1] || 'w'; // 'w' or 'b'

        this.send('stop');
        if (multiPVCount > 1) {
            this.send(`setoption name MultiPV value ${multiPVCount}`);
        } else {
            this.send(`setoption name MultiPV value 1`);
        }
        this.send(`position fen ${fen}`);
        this.send(`go depth ${depth}`);
    }

    getBestMove(fen, depth = 12, callback = null) {
        this.currentEval = { score: "0.0", isMate: false, mateIn: 0, bestMove: null, multipv: [], pvLine: [] };
        this.onBestMoveCallback = callback;
        const parts = fen.split(' ');
        this.evalSideToMove = parts[1] || 'w';
        this.send('stop');
        this.send(`position fen ${fen}`);
        this.send(`go depth ${depth}`);
    }

    handleMessage(msg) {
        if (msg === 'readyok') {
            this.isReady = true;
        }

        // Parse evaluation info: e.g. "info depth 12 score cp 145 pv e2e4 e7e5..."
        if (msg.startsWith('info') && msg.includes('score')) {
            const cpMatch = msg.match(/score cp (-?\d+)/);
            const mateMatch = msg.match(/score mate (-?\d+)/);
            const pvMatch = msg.match(/pv\s+([a-h][1-8][a-h][1-8][qrbn]?)/);
            const fullPvMatch = msg.match(/pv\s+((?:[a-h][1-8][a-h][1-8][qrbn]?\s*)+)/);

            if (cpMatch) {
                let rawCp = parseInt(cpMatch[1], 10);
                
                // CRITICAL FIX: Stockfish UCI reports centipawns relative to side to move.
                // Normalize score to ALWAYS be White's perspective (+ = White advantage, - = Black advantage)
                if (this.evalSideToMove === 'b') {
                    rawCp = -rawCp;
                }

                const scoreVal = (rawCp / 100).toFixed(1);
                this.currentEval.score = (scoreVal > 0 ? `+${scoreVal}` : scoreVal);
                this.currentEval.isMate = false;
                this.currentEval.mateIn = 0;
            } else if (mateMatch) {
                let mate = parseInt(mateMatch[1], 10);
                if (this.evalSideToMove === 'b') {
                    mate = -mate;
                }
                this.currentEval.isMate = true;
                this.currentEval.mateIn = mate;
                this.currentEval.score = mate > 0 ? `#${mate}` : `#-${Math.abs(mate)}`;
            }

            if (fullPvMatch) {
                this.currentEval.pvLine = fullPvMatch[1].trim().split(/\s+/).filter(m => m.length >= 4);
            }

            if (pvMatch) {
                const move = pvMatch[1];
                if (!this.currentEval.multipv.includes(move)) {
                    this.currentEval.multipv.push(move);
                }
                this.currentEval.bestMove = move;
            }

            if (this.onEvalCallback) {
                this.onEvalCallback(this.currentEval);
            }
        }

        if (msg.startsWith('bestmove')) {
            const parts = msg.split(' ');
            const move = parts[1];
            const validMove = (move && move !== '(none)') ? move : this.currentEval.bestMove;
            if (this.onBestMoveCallback) {
                const cb = this.onBestMoveCallback;
                this.onBestMoveCallback = null;
                cb(validMove);
            }
        }
    }

    static parseScoreToNumeric(scoreStr) {
        if (!scoreStr) return 0;
        if (typeof scoreStr === 'number') return scoreStr;
        const str = String(scoreStr).trim();
        if (str.startsWith('#')) {
            const mateVal = parseInt(str.substring(1), 10) || 0;
            return mateVal >= 0 ? 10 : -10;
        }
        return parseFloat(str) || 0;
    }

    static classifyMove(prevEvalScore, newEvalScore, isWhiteTurn, moveObj = null, movesHistory = []) {
        const prevNum = StockfishEngine.parseScoreToNumeric(prevEvalScore);
        const currNum = StockfishEngine.parseScoreToNumeric(newEvalScore);

        // Win Probability Model (White's perspective vs Black's perspective)
        const prevWinProbWhite = 1 / (1 + Math.pow(10, -prevNum / 4));
        const currWinProbWhite = 1 / (1 + Math.pow(10, -currNum / 4));

        let prevWinProb = isWhiteTurn ? prevWinProbWhite : (1 - prevWinProbWhite);
        let currWinProb = isWhiteTurn ? currWinProbWhite : (1 - currWinProbWhite);
        let drop = Math.max(0, prevWinProb - currWinProb);

        // 1. Opening Book / Theory Check
        if (movesHistory && movesHistory.length > 0 && typeof OpeningTheory !== 'undefined') {
            const theory = OpeningTheory.getTheoryAtStep(movesHistory);
            if (theory && drop <= 0.10) {
                return {
                    label: theory.fullLabel,
                    badgeClass: 'badge-theory',
                    icon: '📖',
                    isTheory: true,
                    openingName: theory.openingName
                };
            }
        }

        // 2. Brilliant Move (!!) Detection
        // Piece sacrifice for winning advantage or checkmate
        const isWinningForMover = isWhiteTurn ? (currNum >= 1.0) : (currNum <= -1.0);
        const isSacrifice = StockfishEngine.detectPieceSacrifice(moveObj);

        if (isSacrifice && isWinningForMover && drop <= 0.03) {
            return {
                label: 'Brilliant Move',
                badgeClass: 'badge-brilliant',
                icon: '💎',
                isBrilliant: true
            };
        }

        // 3. Great Move (!) Detection
        // Turning an equal/difficult position into a winning breakthrough or saving a lost position
        if (drop <= 0.02) {
            const prevAdvantage = isWhiteTurn ? prevNum : -prevNum;
            const currAdvantage = isWhiteTurn ? currNum : -currNum;
            if (prevAdvantage <= 0.5 && currAdvantage >= 2.5) {
                return { label: 'Great Move', badgeClass: 'badge-great', icon: '🎯' };
            }
            if (prevWinProb <= 0.30 && currWinProb >= 0.50) {
                return { label: 'Great Move', badgeClass: 'badge-great', icon: '🎯' };
            }
        }

        // 4. Missed Win Detection
        if (prevWinProb >= 0.85 && drop >= 0.30) {
            return { label: 'Missed Win', badgeClass: 'badge-miss', icon: '⚡' };
        }

        // 5. Standard Empirical Precision Categories (Balanced & Non-Pessimistic)
        if (drop <= 0.02) return { label: 'Best Move', badgeClass: 'badge-best', icon: '🌟' };
        if (drop <= 0.05) return { label: 'Excellent Move', badgeClass: 'badge-excellent', icon: '✨' };
        if (drop <= 0.10) return { label: 'Good Move', badgeClass: 'badge-good', icon: '👍' };
        if (drop <= 0.20) return { label: 'Inaccuracy', badgeClass: 'badge-inaccuracy', icon: '⚠️' };
        if (drop <= 0.35) return { label: 'Mistake', badgeClass: 'badge-mistake', icon: '❌' };
        return { label: 'Blunder', badgeClass: 'badge-blunder', icon: '💥' };
    }

    static detectPieceSacrifice(moveObj) {
        if (!moveObj) return false;
        const san = moveObj.san || '';
        const piece = moveObj.piece || (san.length > 0 && ['N','B','R','Q','K'].includes(san[0]) ? san[0].toLowerCase() : 'p');
        const captured = moveObj.captured || null;

        // Queen Sacrifice (Queen given up or captured lower value)
        if (piece === 'q') {
            if (captured === null || captured === 'p' || captured === 'n' || captured === 'b' || captured === 'r') {
                if (san.includes('+') || san.includes('#') || san.startsWith('Qx') || san.startsWith('Q')) {
                    // Check if Queen moved into attacked/tactical territory or checkmate sac like Qb8+
                    return true;
                }
            }
        }

        // Rook Sacrifice (Rook given for minor/pawn/nothing)
        if (piece === 'r') {
            if (captured === null || captured === 'p' || captured === 'n' || captured === 'b') {
                if (san.startsWith('R') && (san.includes('+') || san.includes('x') || san.includes('#'))) {
                    return true;
                }
            }
        }

        // Minor Piece Sacrifice (Knight or Bishop given for pawn or nothing)
        if (piece === 'n' || piece === 'b') {
            if (captured === null || captured === 'p') {
                if (san.startsWith('N') || san.startsWith('B')) {
                    return true;
                }
            }
        }

        return false;
    }
}

if (typeof window !== 'undefined') {
    window.StockfishEngine = StockfishEngine;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StockfishEngine };
}
