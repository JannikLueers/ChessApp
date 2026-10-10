// Comprehensive Opening Book Database & Theory Recognition Engine
// Covers hundreds of major openings including The London System, Italian, Ruy Lopez, Sicilian, Queen's Gambit, etc.

const OPENING_BOOK = [
    // --- THE LONDON SYSTEM & QUEEN'S PAWN OPENINGS ---
    { name: "The London", eco: "D02", moves: ["d4", "d5", "Bf4"] },
    { name: "The London", eco: "A46", moves: ["d4", "Nf6", "Bf4"] },
    { name: "The London", eco: "A48", moves: ["d4", "Nf6", "Nf3", "g6", "Bf4"] },
    { name: "The London", eco: "D02", moves: ["d4", "d5", "Nf3", "Nf6", "Bf4"] },
    { name: "The London", eco: "D02", moves: ["d4", "d5", "Nf3", "Nf6", "Bf4", "c5", "e3"] },
    { name: "The London", eco: "D02", moves: ["d4", "d5", "Bf4", "Nf6", "e3", "c5", "c3"] },
    { name: "The London", eco: "D02", moves: ["d4", "d5", "Bf4", "Nf6", "e3", "c5", "c3", "Nc6", "Nd2"] },
    { name: "The London", eco: "D02", moves: ["d4", "d5", "Bf4", "Nf6", "e3", "e6", "Nf3", "Bd6", "Bg3"] },
    { name: "The London", eco: "D02", moves: ["d4", "d5", "Bf4", "c5", "e3", "Nc6", "c3", "Nf6", "Nd2", "e6", "Ngf3", "Bd6", "Bg3", "O-O", "Bd3"] },
    { name: "The London (Jobava)", eco: "D00", moves: ["d4", "d5", "Nc3", "Nf6", "Bf4"] },
    { name: "The London (Jobava)", eco: "D00", moves: ["d4", "Nf6", "Nc3", "d5", "Bf4"] },
    { name: "The London (Jobava)", eco: "D00", moves: ["d4", "d5", "Nc3", "Nf6", "Bf4", "a6", "e3", "Bf5"] },
    { name: "The London (Steinitz Countergambit)", eco: "D02", moves: ["d4", "d5", "Bf4", "c5"] },
    { name: "The London (1.d4 e6 2.Bf4)", eco: "A40", moves: ["d4", "e6", "Bf4"] },
    { name: "The London (1.d4 d6 2.Bf4)", eco: "A41", moves: ["d4", "d6", "Bf4"] },

    // --- ITALIAN GAME & GIUOCO PIANO ---
    { name: "Italian Game", eco: "C50", moves: ["e4", "e5", "Nf3", "Nc6", "Bc4"] },
    { name: "Italian Game (Giuoco Piano)", eco: "C50", moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5"] },
    { name: "Italian Game (Giuoco Piano)", eco: "C53", moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "c3", "Nf6", "d3"] },
    { name: "Italian Game (Evans Gambit)", eco: "C51", moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "b4"] },
    { name: "Italian Game (Two Knights Defense)", eco: "C55", moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6"] },
    { name: "Italian Game (Fried Liver Attack)", eco: "C57", moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6", "Ng5", "d5", "exd5", "Nxd5", "Nxf7"] },
    { name: "Italian Game (Hungarian Defense)", eco: "C50", moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Be7"] },

    // --- RUY LOPEZ (SPANISH OPENING) ---
    { name: "Ruy Lopez", eco: "C60", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"] },
    { name: "Ruy Lopez (Morphy Defense)", eco: "C70", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4"] },
    { name: "Ruy Lopez (Exchange Variation)", eco: "C68", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Bxc6"] },
    { name: "Ruy Lopez (Berlin Defense)", eco: "C65", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "Nf6"] },
    { name: "Ruy Lopez (Closed)", eco: "C84", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O"] },
    { name: "Ruy Lopez (Marshall Attack)", eco: "C89", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "O-O", "c3", "d5"] },
    { name: "Ruy Lopez (Schliemann Defense)", eco: "C63", moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "f5"] },

    // --- SICILIAN DEFENSE ---
    { name: "Sicilian Defense", eco: "B20", moves: ["e4", "c5"] },
    { name: "Sicilian Defense (Open)", eco: "B30", moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4"] },
    { name: "Sicilian Defense (Najdorf)", eco: "B90", moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6"] },
    { name: "Sicilian Defense (Najdorf English Attack)", eco: "B90", moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be6", "f3"] },
    { name: "Sicilian Defense (Dragon)", eco: "B70", moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "g6"] },
    { name: "Sicilian Defense (Dragon Yugoslav Attack)", eco: "B76", moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "g6", "Be3", "Bg7", "f3", "O-O", "Qd2", "Nc6", "Bc4"] },
    { name: "Sicilian Defense (Classical)", eco: "B56", moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "Nc6"] },
    { name: "Sicilian Defense (Scheveningen)", eco: "B80", moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "e6"] },
    { name: "Sicilian Defense (Alapin)", eco: "B22", moves: ["e4", "c5", "c3"] },
    { name: "Sicilian Defense (Closed)", eco: "B23", moves: ["e4", "c5", "Nc3", "Nc6", "g3"] },
    { name: "Sicilian Defense (Bowdler Attack)", eco: "B20", moves: ["e4", "c5", "Bc4"] },
    { name: "Sicilian Defense (Smith-Morra Gambit)", eco: "B21", moves: ["e4", "c5", "d4", "cxd4", "c3"] },
    { name: "Sicilian Defense (Grand Prix Attack)", eco: "B21", moves: ["e4", "c5", "f4"] },

    // --- QUEEN'S GAMBIT & SLAV ---
    { name: "Queen's Gambit", eco: "D06", moves: ["d4", "d5", "c4"] },
    { name: "Queen's Gambit Accepted", eco: "D20", moves: ["d4", "d5", "c4", "dxc4"] },
    { name: "Queen's Gambit Declined", eco: "D30", moves: ["d4", "d5", "c4", "e6"] },
    { name: "Queen's Gambit Declined (Orthodox)", eco: "D60", moves: ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Be7", "e3", "O-O", "Nf3", "Nbd7"] },
    { name: "Queen's Gambit (Slav Defense)", eco: "D10", moves: ["d4", "d5", "c4", "c6"] },
    { name: "Queen's Gambit (Semi-Slav)", eco: "D43", moves: ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "e6"] },
    { name: "Queen's Gambit (Albin Countergambit)", eco: "D08", moves: ["d4", "d5", "c4", "e5"] },
    { name: "Queen's Gambit (Chigorin Defense)", eco: "D07", moves: ["d4", "d5", "c4", "Nc6"] },

    // --- FRENCH DEFENSE ---
    { name: "French Defense", eco: "C00", moves: ["e4", "e6"] },
    { name: "French Defense (Main Line)", eco: "C01", moves: ["e4", "e6", "d4", "d5"] },
    { name: "French Defense (Advance)", eco: "C02", moves: ["e4", "e6", "d4", "d5", "e5"] },
    { name: "French Defense (Exchange)", eco: "C01", moves: ["e4", "e6", "d4", "d5", "exd5", "exd5"] },
    { name: "French Defense (Winawer)", eco: "C15", moves: ["e4", "e6", "d4", "d5", "Nc3", "Bb4"] },
    { name: "French Defense (Classical)", eco: "C14", moves: ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "Be7"] },
    { name: "French Defense (Tarrasch)", eco: "C03", moves: ["e4", "e6", "d4", "d5", "Nd2"] },

    // --- CARO-KANN DEFENSE ---
    { name: "Caro-Kann Defense", eco: "B10", moves: ["e4", "c6"] },
    { name: "Caro-Kann Defense (Main Line)", eco: "B12", moves: ["e4", "c6", "d4", "d5"] },
    { name: "Caro-Kann Defense (Advance)", eco: "B12", moves: ["e4", "c6", "d4", "d5", "e5"] },
    { name: "Caro-Kann Defense (Classical)", eco: "B18", moves: ["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Bf5"] },
    { name: "Caro-Kann Defense (Tartakower/Korchnoi)", eco: "B15", moves: ["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Nf6", "Nxf6+", "exf6"] },
    { name: "Caro-Kann Defense (Panov-Botvinnik Attack)", eco: "B13", moves: ["e4", "c6", "d4", "d5", "exd5", "cxd5", "c4"] },

    // --- INDIAN DEFENSES ---
    { name: "King's Indian Defense", eco: "E60", moves: ["d4", "Nf6", "c4", "g6"] },
    { name: "King's Indian Defense (Classical)", eco: "E90", moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be2", "e5", "O-O", "Nc6", "d5", "Ne7"] },
    { name: "King's Indian Defense (Samisch)", eco: "E80", moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3"] },
    { name: "Grünfeld Defense", eco: "D80", moves: ["d4", "Nf6", "c4", "g6", "Nc3", "d5"] },
    { name: "Grünfeld Defense (Exchange)", eco: "D85", moves: ["d4", "Nf6", "c4", "g6", "Nc3", "d5", "cxd5", "Nxd5", "e4", "Nxc3", "bxc3", "Bg7"] },
    { name: "Nimzo-Indian Defense", eco: "E20", moves: ["d4", "Nf6", "c4", "e6", "Nc3", "Bb4"] },
    { name: "Queen's Indian Defense", eco: "E12", moves: ["d4", "Nf6", "c4", "e6", "Nf3", "b6"] },
    { name: "Bogo-Indian Defense", eco: "E11", moves: ["d4", "Nf6", "c4", "e6", "Nf3", "Bb4+"] },
    { name: "Benoni Defense", eco: "A60", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6"] },
    { name: "Benko Gambit", eco: "A57", moves: ["d4", "Nf6", "c4", "c5", "d5", "b5"] },
    { name: "Catalan Opening", eco: "E00", moves: ["d4", "Nf6", "c4", "e6", "g3"] },

    // --- OPEN GAME (1.e4 e5) & OTHER KING PAWN OPENINGS ---
    { name: "King's Pawn Game", eco: "C20", moves: ["e4", "e5"] },
    { name: "Philidor Defense", eco: "C41", moves: ["e4", "e5", "Nf3", "d6"] },
    { name: "Philidor Defense (Morphy / Opera Game)", eco: "C41", moves: ["e4", "e5", "Nf3", "d6", "d4", "Bg4"] },
    { name: "Scotch Game", eco: "C45", moves: ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4"] },
    { name: "Scotch Gambit", eco: "C44", moves: ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Bc4"] },
    { name: "Four Knights Game", eco: "C47", moves: ["e4", "e5", "Nf3", "Nc6", "Nc3", "Nf6"] },
    { name: "Vienna Game", eco: "C25", moves: ["e4", "e5", "Nc3"] },
    { name: "Vienna Gambit", eco: "C29", moves: ["e4", "e5", "Nc3", "Nf6", "f4"] },
    { name: "King's Gambit", eco: "C30", moves: ["e4", "e5", "f4"] },
    { name: "King's Gambit Accepted", eco: "C33", moves: ["e4", "e5", "f4", "exf4"] },
    { name: "King's Gambit Declined", eco: "C30", moves: ["e4", "e5", "f4", "Bc5"] },
    { name: "Petrov's Defense", eco: "C42", moves: ["e4", "e5", "Nf3", "Nf6"] },
    { name: "Bishop's Opening", eco: "C23", moves: ["e4", "e5", "Bc4"] },
    { name: "Danish Gambit", eco: "C21", moves: ["e4", "e5", "d4", "exd4", "c3"] },

    // --- OTHER FLANK & ASYMMETRIC OPENINGS ---
    { name: "English Opening", eco: "A10", moves: ["c4"] },
    { name: "English Opening (Symmetrical)", eco: "A30", moves: ["c4", "c5"] },
    { name: "English Opening (King's English)", eco: "A20", moves: ["c4", "e5"] },
    { name: "English Opening (King's English)", eco: "A29", moves: ["c4", "e5", "Nc3", "Nf6", "g3", "d5", "cxd5", "Nxd5", "Bg2"] },
    { name: "English Opening (Four Knights)", eco: "A28", moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6"] },
    { name: "Scandinavian Defense", eco: "B01", moves: ["e4", "d5"] },
    { name: "Scandinavian Defense (Main Line)", eco: "B01", moves: ["e4", "d5", "exd5", "Qxd5", "Nc3", "Qa5", "d4", "Nf6", "Nf3", "c6"] },
    { name: "Scandinavian Defense (Mieses-Kotroc)", eco: "B01", moves: ["e4", "d5", "exd5", "Qxd5", "Nc3", "Qa5"] },
    { name: "Scandinavian Defense (Portuguese Variation)", eco: "B01", moves: ["e4", "d5", "exd5", "Nf6"] },
    { name: "Alekhine's Defense", eco: "B02", moves: ["e4", "Nf6"] },
    { name: "Pirc Defense", eco: "B07", moves: ["e4", "d6", "d4", "Nf6", "Nc3", "g6"] },
    { name: "Modern Defense", eco: "B06", moves: ["e4", "g6"] },
    { name: "Dutch Defense", eco: "A80", moves: ["d4", "f5"] },
    { name: "Dutch Defense (Leningrad)", eco: "A87", moves: ["d4", "f5", "g3", "Nf6", "Bg2", "g6", "Nf3", "Bg7", "O-O", "O-O", "c4", "d6"] },
    { name: "Dutch Defense (Classical)", eco: "A84", moves: ["d4", "f5", "c4", "e6", "Nc3", "Nf6"] },
    { name: "Dutch Defense (Stonewall)", eco: "A90", moves: ["d4", "f5", "c4", "e6", "g3", "Nf6", "Bg2", "d5"] },
    { name: "Reti Opening", eco: "A04", moves: ["Nf3"] },
    { name: "King's Indian Attack", eco: "A07", moves: ["Nf3", "d5", "g3"] },
    { name: "Trompowsky Attack", eco: "A45", moves: ["d4", "Nf6", "Bg5"] },
    { name: "Queen's Pawn Opening", eco: "D00", moves: ["d4", "d5"] },
    { name: "Queen's Pawn Opening", eco: "A40", moves: ["d4"] },
    { name: "King's Pawn Opening", eco: "C20", moves: ["e4"] },
    { name: "Bird's Opening", eco: "A02", moves: ["f4"] }
];

class OpeningTheory {
    /**
     * Finds matching opening theory for a given move history (SAN array).
     * Returns { isTheory: boolean, openingName: string, eco: string, fullLabel: string } or null
     */
    static getTheoryAtStep(movesSoFar) {
        if (!movesSoFar || movesSoFar.length === 0) return null;

        const currentSans = movesSoFar.map(m => typeof m === 'string' ? m : (m.san || ''));
        const len = currentSans.length;

        // Check for matching openings:
        // Case 1: Game moves match the prefix of book moves (len <= bookMoves.length)
        // Case 2: Game moves continued past the book line (len > bookMoves.length, and all book moves match currentSans)
        const candidateMatches = [];

        for (const opening of OPENING_BOOK) {
            const bookMoves = opening.moves;
            const bLen = bookMoves.length;

            if (len <= bLen) {
                let matches = true;
                for (let i = 0; i < len; i++) {
                    if (currentSans[i] !== bookMoves[i]) {
                        matches = false;
                        break;
                    }
                }
                if (matches) {
                    candidateMatches.push({ opening, type: 'in_progress', diff: bLen - len, matchLen: len });
                }
            } else {
                let matches = true;
                for (let i = 0; i < bLen; i++) {
                    if (currentSans[i] !== bookMoves[i]) {
                        matches = false;
                        break;
                    }
                }
                if (matches) {
                    candidateMatches.push({ opening, type: 'past_book', diff: len - bLen, matchLen: bLen });
                }
            }
        }

        if (candidateMatches.length === 0) return null;

        // Prioritize:
        // 1. Exact length match (diff === 0)
        // 2. In progress lines: smallest diff (closest to current move)
        // 3. Past book lines: largest matchLen (deepest book knowledge matched)
        candidateMatches.sort((a, b) => {
            if (a.diff === 0 && b.diff !== 0) return -1;
            if (b.diff === 0 && a.diff !== 0) return 1;

            if (a.type === 'in_progress' && b.type === 'in_progress') {
                return a.diff - b.diff;
            }
            if (a.type === 'past_book' && b.type === 'past_book') {
                return b.matchLen - a.matchLen;
            }
            if (a.type === 'in_progress') return -1;
            return 1;
        });

        const bestMatch = candidateMatches[0].opening;

        return {
            isTheory: true,
            openingName: bestMatch.name,
            eco: bestMatch.eco,
            fullLabel: `Theory - ${bestMatch.name}`
        };
    }
}

if (typeof window !== 'undefined') {
    window.OpeningTheory = OpeningTheory;
    window.OPENING_BOOK = OPENING_BOOK;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OpeningTheory, OPENING_BOOK };
}
