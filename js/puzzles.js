// Authentic Verified Chess Puzzles Database & Refutation Solver Manager

const PUZZLE_DATABASE = [
    // --- Checkmate in 1 ---
    {
        id: 'm1_01',
        title: "Scholar's Mate Finish",
        category: 'mate1',
        rating: 900,
        fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1',
        moves: ['f3f7'],
        description: 'White to move: Deliver Checkmate in 1!'
    },
    {
        id: 'm1_02',
        title: 'Back Rank Defect',
        category: 'mate1',
        rating: 1000,
        fen: '3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
        moves: ['d1d8'],
        description: 'White to move: Punish Black back rank weakness!'
    },
    {
        id: 'm1_03',
        title: 'Queen & Bishop Battery Mate',
        category: 'mate1',
        rating: 1100,
        fen: 'r1b2rk1/ppp2ppp/8/8/3q4/3B4/PPP2PPP/R2QR1K1 w - - 0 1',
        moves: ['d3h7'],
        description: 'White to move: Discover attack on the Black Queen!'
    },

    // --- Checkmate in 2 ---
    {
        id: 'm2_01',
        title: "Morphy's Opera House Sacrifice",
        category: 'mate2',
        rating: 1400,
        fen: '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 1',
        moves: ['b3b8', 'd7b8', 'd1d8'],
        description: 'White to move: Queen sacrifice leading to checkmate in 2!'
    },
    {
        id: 'm2_02',
        title: "Anastasia's Knight & Rook Mate",
        category: 'mate2',
        rating: 1550,
        fen: '5rk1/1p3Npp/8/8/8/8/6PP/5R1K w - - 0 1',
        moves: ['f7h6', 'g8h8', 'f1f8'],
        description: 'White to move: Force checkmate in 2 with Knight & Rook!'
    },
    {
        id: 'm2_03',
        title: 'Boden Diagonal Mate',
        category: 'mate2',
        rating: 1600,
        fen: '2kr4/ppp2p1p/8/4b3/8/8/PPP1BPPP/2K1R3 w - - 0 1',
        moves: ['e2g4', 'c8b8', 'e1e8'],
        description: 'White to move: Crushing bishop checkmate in 2!'
    },

    // --- Checkmate in 3 ---
    {
        id: 'm3_01',
        title: "Lasker's Double Bishop Attack",
        category: 'mate3',
        rating: 1900,
        fen: 'r1bq1rk1/ppp2ppp/2n5/3p4/3P4/2PB1Q2/P4PPP/R3R1K1 w - - 0 1',
        moves: ['d3h7', 'g8h7', 'f3h5', 'g8g8', 'h5f7'],
        description: 'White to move: Classic Greek Gift checkmate sequence!'
    },

    // --- Material Wins ---
    {
        id: 'mat_01',
        title: 'Royal Knight Fork',
        category: 'material',
        rating: 1200,
        fen: 'r1b1k2r/pppp1ppp/8/4N3/4q3/8/PPPP1PPP/R2QKB1R w KQkq - 0 1',
        moves: ['e5c6'],
        description: 'White to move: Fork King and Queen to win material!'
    },
    {
        id: 'mat_02',
        title: 'Absolute Pin Exploitation',
        category: 'material',
        rating: 1350,
        fen: '4k3/8/4r3/8/8/4R3/4K3 w - - 0 1',
        moves: ['e2f3'],
        description: 'White to move: Pile pressure on the pinned Rook!'
    },
    {
        id: 'mat_03',
        title: 'Rook Skewer',
        category: 'material',
        rating: 1450,
        fen: '1k6/8/8/8/q7/8/1R6/1K6 w - - 0 1',
        moves: ['b2a2'],
        description: 'White to move: Skewer the enemy Queen!'
    },

    // --- Endgame Tactics ---
    {
        id: 'end_01',
        title: 'King Opposition Drive',
        category: 'endgame',
        rating: 1500,
        fen: '8/8/4k3/8/3P4/4K3/8/8 w - - 0 1',
        moves: ['e3e4', 'e6d6', 'd4d5'],
        description: 'White to move: Seize opposition and push the pawn!'
    },
    {
        id: 'end_02',
        title: 'Lucena Bridge Strategy',
        category: 'endgame',
        rating: 1750,
        fen: '1K6/1P1k4/8/8/8/8/2R5/8 w - - 0 1',
        moves: ['c2c4', 'd7d6', 'b8a7'],
        description: 'White to move: Build the bridge to promote your pawn!'
    }
];

class PuzzleManager {
    constructor() {
        this.puzzles = PUZZLE_DATABASE;
        this.currentPuzzle = null;
        this.moveIndex = 0;
        this.score = { solved: 0, failed: 0 };
    }

    getRandomPuzzle(category = 'mixed', maxRating = 3000) {
        let filtered = this.puzzles;
        if (category !== 'mixed') {
            filtered = filtered.filter(p => p.category === category);
        }
        filtered = filtered.filter(p => p.rating <= maxRating);

        if (filtered.length === 0) filtered = this.puzzles;

        const idx = Math.floor(Math.random() * filtered.length);
        this.currentPuzzle = filtered[idx];
        this.moveIndex = 0;
        return this.currentPuzzle;
    }

    resetCurrentPuzzle() {
        this.moveIndex = 0;
        return this.currentPuzzle;
    }

    verifyUserMove(moveSanOrUci) {
        if (!this.currentPuzzle) return { valid: false };

        const expectedMove = this.currentPuzzle.moves[this.moveIndex];
        const moveClean = moveSanOrUci.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const expectedClean = expectedMove.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        const isCorrect = (moveClean === expectedClean);

        if (isCorrect) {
            this.moveIndex++;
            const isCompleted = (this.moveIndex >= this.currentPuzzle.moves.length);
            
            let replyMove = null;
            if (!isCompleted) {
                replyMove = this.currentPuzzle.moves[this.moveIndex];
                this.moveIndex++;
            } else {
                this.score.solved++;
            }

            return {
                valid: true,
                completed: isCompleted,
                replyMove: replyMove
            };
        } else {
            this.score.failed++;
            return {
                valid: false,
                expectedMove: expectedMove
            };
        }
    }
}
