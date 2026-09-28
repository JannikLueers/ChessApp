// Stockfish Engine Worker Manager with White-Perspective Normalization
class StockfishEngine {
    constructor() {
        this.worker = null;
        this.isReady = false;
        this.currentEval = { score: "0.0", isMate: false, mateIn: 0, bestMove: null, multipv: [] };
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
        this.currentEval = { score: "0.0", isMate: false, mateIn: 0, bestMove: null, multipv: [] };
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
        this.currentEval = { score: "0.0", isMate: false, mateIn: 0, bestMove: null, multipv: [] };
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

    static classifyMove(prevEvalScore, newEvalScore, isWhiteTurn) {
        const p1 = parseFloat(prevEvalScore) || 0;
        const p2 = parseFloat(newEvalScore) || 0;
        const delta = isWhiteTurn ? (p2 - p1) : (p1 - p2);

        if (delta >= -0.2) return { label: 'Best Move', badgeClass: 'badge-best', icon: '🌟' };
        if (delta >= -0.6) return { label: 'Good Move', badgeClass: 'badge-good', icon: '👍' };
        if (delta >= -1.5) return { label: 'Inaccuracy', badgeClass: 'badge-inaccuracy', icon: '⚠️' };
        if (delta >= -3.0) return { label: 'Mistake', badgeClass: 'badge-mistake', icon: '❌' };
        return { label: 'Blunder', badgeClass: 'badge-blunder', icon: '💥' };
    }
}
