// Stockfish Engine Worker Manager with UCI Skill Level & Elo Tuning
class StockfishEngine {
    constructor() {
        this.worker = null;
        this.isReady = false;
        this.currentEval = { score: 0, isMate: false, mateIn: 0, bestMove: null, multipv: [] };
        this.onEvalCallback = null;
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

    // Set UCI Engine Skill Level (0 = ~800 ELO, 20 = Max Grandmaster)
    setSkillLevel(skillLevel = 20, targetElo = 2500) {
        this.send(`setoption name Skill Level value ${skillLevel}`);
        this.send(`setoption name UCI_LimitStrength value true`);
        this.send(`setoption name UCI_Elo value ${targetElo}`);
    }

    evaluatePosition(fen, depth = 12, callback = null, multiPVCount = 1) {
        if (callback) this.onEvalCallback = callback;
        this.send('stop');
        if (multiPVCount > 1) {
            this.send(`setoption name MultiPV value ${multiPVCount}`);
        } else {
            this.send(`setoption name MultiPV value 1`);
        }
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
            const pvMatch = msg.match(/pv (\w{4})/);

            if (cpMatch) {
                const cp = parseInt(cpMatch[1], 10);
                this.currentEval.score = (cp / 100).toFixed(1);
                this.currentEval.isMate = false;
                this.currentEval.mateIn = 0;
            } else if (mateMatch) {
                const mate = parseInt(mateMatch[1], 10);
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
            if (move && move !== '(none)') {
                this.currentEval.bestMove = move;
                if (this.onEvalCallback) {
                    this.onEvalCallback(this.currentEval);
                }
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
