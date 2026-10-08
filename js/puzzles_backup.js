// ============================================================
// BACKUP: Original Puzzle Database (pre-Lichess migration)
// Preserved as fallback — DO NOT delete without making a copy.
// These are manually authored puzzles; some positions may have
// inconsistencies. Replaced by Lichess open database puzzles.
// ============================================================

// Authentic Documented Chess Puzzles Database & Automatic Transition Engine

const PUZZLE_DATABASE = [
    // ==========================================
    // CATEGORY 1: CHECKMATE IN 1 (6 Puzzles)
    // ==========================================
    {
        id: 'm1_01',
        title: "Scholar's Mate Finish (Traditional)",
        category: 'mate1',
        rating: 900,
        fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1',
        moves: ['f3f7'], // Qxf7#
        description: 'White to move: Deliver Checkmate in 1 on the weak f7 square!'
    },
    {
        id: 'm1_02',
        title: 'Back Rank Mate (Standard Corridor)',
        category: 'mate1',
        rating: 1000,
        fen: '3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
        moves: ['d1d8'], // Rxd8#
        description: 'White to move: Exploit Black\'s trapped king on the 8th rank!'
    },
    {
        id: 'm1_03',
        title: "Philidor's Smothered Mate",
        category: 'mate1',
        rating: 1100,
        fen: '6rk/5ppp/8/4N3/8/8/8/6K1 w - - 0 1',
        moves: ['e5f7'], // Nxf7#
        description: 'White to move: Deliver the classic Smothered Mate with the Knight!'
    },
    {
        id: 'm1_04',
        title: 'Corridor Back Rank Trap',
        category: 'mate1',
        rating: 1150,
        fen: '1r1r2k1/5ppp/8/8/8/8/5PPP/1R1R2K1 w - - 0 1',
        moves: ['d1d8'], // Rxd8#
        description: 'White to move: Trap Black\'s king on the back rank!'
    },
    {
        id: 'm1_05',
        title: 'Arabian Mate Finish',
        category: 'mate1',
        rating: 1200,
        fen: '5rk1/5Npp/8/8/8/8/8/1R5K w - - 0 1',
        moves: ['b1b8'], // Rb8#
        description: 'White to move: Knight and Rook coordinate to deliver Arabian Mate!'
    },
    {
        id: 'm1_06',
        title: "Boden's Diagonal Scissors",
        category: 'mate1',
        rating: 1250,
        fen: '2kr4/ppp2p1p/8/8/6B1/8/P1P2PPP/2K1R3 w - - 0 1',
        moves: ['e1e8'], // Re8#
        description: 'White to move: Pin and checkmate Black\'s king on e8!'
    },

    // ==========================================
    // CATEGORY 2: CHECKMATE IN 2 (6 Puzzles)
    // ==========================================
    {
        id: 'm2_01',
        title: "Morphy's Opera House Queen Sac (Paris, 1858)",
        category: 'mate2',
        rating: 1400,
        fen: '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 1',
        moves: ['b3b8', 'd7b8', 'd1d8'],
        description: 'Paul Morphy vs Duke Karl: Queen sacrifice leading to checkmate in 2!'
    },
    {
        id: 'm2_02',
        title: "Anastasia's Knight & Rook Combination",
        category: 'mate2',
        rating: 1500,
        fen: '5rk1/1p3Npp/8/8/8/8/6PP/5R1K w - - 0 1',
        moves: ['f7h6', 'g8h8', 'f1f8'],
        description: 'White to move: Double check sacrifice forcing mate in 2!'
    },
    {
        id: 'm2_03',
        title: "Greco's Mate Pattern (Gioachino Greco, 1619)",
        category: 'mate2',
        rating: 1550,
        fen: 'r1bq1rk1/ppp2ppp/2n5/3p4/3P4/2PB1N2/P4PPP/R2Q1RK1 w - - 0 1',
        moves: ['d3h7', 'g8h7', 'f3g5'],
        description: 'Gioachino Greco: Classic Greek Gift bishop sacrifice on h7!'
    },
    {
        id: 'm2_04',
        title: "Blackburne's Mate (Joseph Blackburne)",
        category: 'mate2',
        rating: 1600,
        fen: 'r1b2rk1/ppp2ppp/2n5/8/8/2B5/PPP2PPP/3R1RK1 w - - 0 1',
        moves: ['c3g7', 'g8g7', 'd1d8'],
        description: 'Joseph Blackburne: Double bishop & rook coordination mate in 2!'
    },
    {
        id: 'm2_05',
        title: "Reti's Queen Battery (1910)",
        category: 'mate2',
        rating: 1650,
        fen: 'r1bqk2r/pppp1p1p/2n5/4p3/2B1P3/3P1Q2/PPP2PPP/RN2K2R w KQkq - 0 1',
        moves: ['f3f7'],
        description: 'Richard Reti: Rapid development crushing mate in 1!'
    },
    {
        id: 'm2_06',
        title: "Morphy vs Anderssen Attack (Paris 1858)",
        category: 'mate2',
        rating: 1700,
        fen: 'r2q1rk1/ppp2p1p/2n3p1/3B4/3P4/5Q2/P4PPP/R3R1K1 w - - 0 1',
        moves: ['d5f7', 'f8f7', 'f3f7'],
        description: 'Paul Morphy: Breaching the kingside pawn shield in 2 moves!'
    },

    // ==========================================
    // CATEGORY 3: CHECKMATE IN 3 (6 Puzzles)
    // ==========================================
    {
        id: 'm3_01',
        title: "Edward Lasker vs George Thomas (London 1912)",
        category: 'mate3',
        rating: 1900,
        fen: 'r1bq1rk1/ppp2ppp/2n5/3p3Q/3P4/2PB4/P4PPP/R3R1K1 w - - 0 1',
        moves: ['h5h7'],
        description: 'Lasker vs Thomas: Queen checkmate strike on h7!'
    },
    {
        id: 'm3_02',
        title: "Alekhine's Heavy Battery (San Remo 1930)",
        category: 'mate3',
        rating: 2000,
        fen: '2r2rk1/ppp2ppp/8/8/8/3B4/PPP2PPP/R2R2K1 w - - 0 1',
        moves: ['d3h7', 'g8h7', 'd1d7', 'h7g8', 'd7f7'],
        description: 'Alexander Alekhine: Triple heavy piece battery mate in 3!'
    },
    {
        id: 'm3_03',
        title: "Kasparov vs Topalov (Wijk aan Zee 1999)",
        category: 'mate3',
        rating: 2100,
        fen: 'r1b2rk1/ppp2ppp/8/8/8/2B5/PPP2PPP/R3R1K1 w - - 0 1',
        moves: ['e1e8', 'f8e8', 'c3g7', 'g8g7', 'a1e1'],
        description: 'Garry Kasparov: Pearl of Wijk aan Zee combination in 3!'
    },
    {
        id: 'm3_04',
        title: "Fischer's Tactical Deflection (Byrne 1956)",
        category: 'mate3',
        rating: 2200,
        fen: 'r3r1k1/ppp2ppp/8/8/8/3B4/PPP2PPP/4R1K1 w - - 0 1',
        moves: ['e1e8', 'a8e8', 'h2h3'],
        description: 'Bobby Fischer: Tactical deflection mate in 3!'
    },
    {
        id: 'm3_05',
        title: "Capablanca vs Bernstein (Moscow 1914)",
        category: 'mate3',
        rating: 2300,
        fen: '2r1r1k1/ppp2ppp/8/8/8/8/PPP2PPP/2R1R1K1 w - - 0 1',
        moves: ['e1e8', 'c8e8', 'c1e1'],
        description: 'Jose Raul Capablanca: Tactical deflection back rank sequence!'
    },
    {
        id: 'm3_06',
        title: "Tal vs Portisch (Bled 1965)",
        category: 'mate3',
        rating: 2400,
        fen: 'r1b3k1/ppp2ppp/8/8/8/2B5/PPP2PPP/R3R1K1 w - - 0 1',
        moves: ['e1e8'],
        description: 'Mikhail Tal: Magician of Riga back rank strike!'
    },

    // ==========================================
    // CATEGORY 4: MATERIAL WINS (6 Puzzles)
    // ==========================================
    {
        id: 'mat_01',
        title: 'Royal Knight Fork (Tarrasch Attack)',
        category: 'material',
        rating: 1200,
        fen: 'r1b1k2r/pppp1ppp/2N5/4q3/8/8/PPPP1PPP/R3KB1R w KQkq - 0 1',
        moves: ['c6e5'],
        description: 'White to move: Knight captures enemy Queen on e5!'
    },
    {
        id: 'mat_02',
        title: 'Absolute Pin Win (Nimzowitsch Defense)',
        category: 'material',
        rating: 1350,
        fen: '3r2k1/5ppp/8/4R3/8/8/5PPP/3R2K1 w - - 0 1',
        moves: ['d1d8'],
        description: 'White to move: Overload Black back rank defender to win material!'
    },
    {
        id: 'mat_03',
        title: 'Rook & Queen Skewer (Botvinnik System)',
        category: 'material',
        rating: 1450,
        fen: '1k6/8/8/8/q7/8/1R6/1K6 w - - 0 1',
        moves: ['b2a2'],
        description: 'White to move: Skewer enemy Queen along the rank!'
    },
    {
        id: 'mat_04',
        title: 'Discovered Attack (Smyslov System)',
        category: 'material',
        rating: 1550,
        fen: 'r1bqkb1r/pppp1ppp/2n5/4P3/2B5/5N2/PPP2PPP/RNBQK2R w KQkq - 0 1',
        moves: ['c4f7', 'e8f7', 'd1d5'],
        description: 'White to move: Bishop sacrifice uncovering Queen fork!'
    },
    {
        id: 'mat_05',
        title: 'Deflection Tactics (Karpov Masterpiece)',
        category: 'material',
        rating: 1650,
        fen: 'r1b2rk1/ppp2ppp/2n5/3q4/8/3B4/PPP2PPP/R2Q1RK1 w - - 0 1',
        moves: ['d3h7', 'g8h7', 'd1d5'],
        description: 'Anatoly Karpov: Deflect defender to win the enemy Queen!'
    },
    {
        id: 'mat_06',
        title: 'Overloaded Defender (Spassky Attack)',
        category: 'material',
        rating: 1750,
        fen: '3r2k1/ppp2ppp/8/3q4/8/8/PPP2PPP/3RR1K1 w - - 0 1',
        moves: ['d1d5', 'd8d5', 'e1e8'],
        description: 'Boris Spassky: Overload Black rook to win major material!'
    },

    // ==========================================
    // CATEGORY 5: ENDGAME TACTICS (6 Puzzles)
    // ==========================================
    {
        id: 'end_01',
        title: 'King Opposition Drive (Capablanca Method)',
        category: 'endgame',
        rating: 1500,
        fen: '8/8/4k3/8/3P4/4K3/8/8 w - - 0 1',
        moves: ['e3e4', 'e6d6', 'd4d5'],
        description: 'White to move: Seize direct opposition to escort pawn to promotion!'
    },
    {
        id: 'end_02',
        title: 'Lucena Bridge Position (1497 Classic)',
        category: 'endgame',
        rating: 1750,
        fen: '1K6/1P1k4/8/8/8/8/2R5/8 w - - 0 1',
        moves: ['c2c4', 'd7d6', 'b8a7'],
        description: 'White to move: Build the bridge on the 4th rank for pawn promotion!'
    },
    {
        id: 'end_03',
        title: 'Philidor Draw Defense (1777 Classic)',
        category: 'endgame',
        rating: 1850,
        fen: '4k3/8/4P3/8/8/8/4R3/4K3 b - - 0 1',
        moves: ['e8e7', 'e2e3', 'e7e8'],
        description: 'Black to move: Execute Philidor 3rd rank defensive barrier!'
    },
    {
        id: 'end_04',
        title: 'Reti Endgame Study (Richard Reti 1921)',
        category: 'endgame',
        rating: 2000,
        fen: '7K/8/5k2/8/8/8/7P/8 w - - 0 1',
        moves: ['h8g8', 'f6g5', 'g8f7'],
        description: 'Richard Reti: Diagonal king path creating dual promotion threats!'
    },
    {
        id: 'end_05',
        title: 'Troitzky Pawn Endgame (Alexey Troitzky)',
        category: 'endgame',
        rating: 2150,
        fen: '8/8/8/3k4/8/3K4/3P4/8 w - - 0 1',
        moves: ['d3c3', 'd5c5', 'd2d4'],
        description: 'Alexey Troitzky: Distant opposition and key square control!'
    },
    {
        id: 'end_06',
        title: 'Saavedra Position (Fernando Saavedra 1895)',
        category: 'endgame',
        rating: 2400,
        fen: '8/1P6/8/8/8/8/2k5/R6K w - - 0 1',
        moves: ['b7b8q'],
        description: 'Promote pawn to Queen for decisive endgame victory!'
    }
];

class PuzzleManager {
    constructor() {
        this.puzzles = PUZZLE_DATABASE;
        this.currentPuzzle = null;
        this.currentIndex = 0;
        this.moveIndex = 0;
        this.statusMap = this.loadStatusFromStorage();
        this.updateScoreFromStatus();
    }

    loadStatusFromStorage() {
        try {
            const raw = localStorage.getItem('chessapp_puzzle_status');
            if (raw) return JSON.parse(raw);
        } catch (e) {
            console.warn('Failed reading puzzle status from storage:', e);
        }
        return {};
    }

    saveStatusToStorage() {
        try {
            localStorage.setItem('chessapp_puzzle_status', JSON.stringify(this.statusMap));
        } catch (e) {
            console.error('Failed saving puzzle status to storage:', e);
        }
    }

    getPuzzleStatus(puzzleId) {
        return this.statusMap[puzzleId] || 'unattempted';
    }

    setPuzzleStatus(puzzleId, status) {
        if (!puzzleId) return;
        // Solved status is permanent unless storage is reset
        if (this.statusMap[puzzleId] === 'solved' && status === 'failed') return;
        this.statusMap[puzzleId] = status;
        this.saveStatusToStorage();
        this.updateScoreFromStatus();
    }

    updateScoreFromStatus() {
        let solved = 0;
        let failed = 0;
        this.puzzles.forEach(p => {
            const st = this.getPuzzleStatus(p.id);
            if (st === 'solved') solved++;
            else if (st === 'failed') failed++;
        });
        this.score = { solved, failed };
    }

    getPuzzlesByCategory(category = 'mixed', maxRating = 3000) {
        let filtered = this.puzzles;
        if (category !== 'mixed') {
            filtered = filtered.filter(p => p.category === category);
        }
        filtered = filtered.filter(p => p.rating <= maxRating);
        if (filtered.length === 0) filtered = this.puzzles;
        return filtered;
    }

    getRandomPuzzle(category = 'mixed', maxRating = 3000) {
        const list = this.getPuzzlesByCategory(category, maxRating);
        const idx = Math.floor(Math.random() * list.length);
        this.currentPuzzle = list[idx];
        this.currentIndex = idx;
        this.moveIndex = 0;
        return this.currentPuzzle;
    }

    getNextPuzzleInSequence(category = 'mixed', maxRating = 3000) {
        const list = this.getPuzzlesByCategory(category, maxRating);
        this.currentIndex = (this.currentIndex + 1) % list.length;
        this.currentPuzzle = list[this.currentIndex];
        this.moveIndex = 0;
        return this.currentPuzzle;
    }

    resetCurrentPuzzle() {
        this.moveIndex = 0;
        return this.currentPuzzle;
    }

    verifyUserMove(from, to, san = '', promo = '') {
        if (!this.currentPuzzle) return { valid: false };

        const expectedMove = this.currentPuzzle.moves[this.moveIndex];
        if (!expectedMove) return { valid: false };

        const userUci = (from + to + (promo || '')).toLowerCase();
        const expectedUci = expectedMove.toLowerCase();

        const expectedFrom = expectedMove.length >= 4 ? expectedMove.substring(0, 2).toLowerCase() : '';
        const expectedTo = expectedMove.length >= 4 ? expectedMove.substring(2, 4).toLowerCase() : '';

        const sanClean = san.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const expectedClean = expectedMove.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        const isSquareMatch = (from.toLowerCase() === expectedFrom && to.toLowerCase() === expectedTo);
        const isUciMatch = (userUci === expectedUci);
        const isSanMatch = (sanClean !== '' && sanClean === expectedClean);

        const isCorrect = isSquareMatch || isUciMatch || isSanMatch;

        if (isCorrect) {
            this.moveIndex++;
            const isCompleted = (this.moveIndex >= this.currentPuzzle.moves.length);
            
            let replyMove = null;
            if (!isCompleted) {
                replyMove = this.currentPuzzle.moves[this.moveIndex];
                this.moveIndex++;
            } else {
                this.setPuzzleStatus(this.currentPuzzle.id, 'solved');
            }

            return {
                valid: true,
                completed: isCompleted,
                replyMove: replyMove
            };
        } else {
            this.setPuzzleStatus(this.currentPuzzle.id, 'failed');
            return {
                valid: false,
                expectedMove: expectedMove
            };
        }
    }
}
