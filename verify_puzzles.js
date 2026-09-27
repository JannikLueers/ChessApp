const fs = require('fs');

// Load chess.min.js into environment
const chessCode = fs.readFileSync('c:/Users/janni/CodingProjects/ChessApp/js/chess.min.js', 'utf8');
eval(chessCode + '; global.Chess = Chess;');

// Read puzzles.js content
const puzzlesCode = fs.readFileSync('c:/Users/janni/CodingProjects/ChessApp/js/puzzles.js', 'utf8');
const cleanPuzzlesCode = puzzlesCode.replace('const PUZZLE_DATABASE =', 'global.PUZZLE_DATABASE =');
eval(cleanPuzzlesCode);

console.log(`Verifying ${global.PUZZLE_DATABASE.length} Puzzles...`);

let totalPassed = 0;
let totalFailed = 0;

global.PUZZLE_DATABASE.forEach((p, idx) => {
    const c = new Chess();
    const loaded = c.load(p.fen);
    if (!loaded) {
        console.error(`[FAIL] Puzzle ${p.id} (${p.title}): Invalid FEN -> ${p.fen}`);
        totalFailed++;
        return;
    }

    let validMoves = true;
    let currentTurn = c.turn();

    p.moves.forEach((moveStr, mIdx) => {
        let moveRes = c.move(moveStr, { sloppy: true });
        if (!moveRes && moveStr.length >= 4) {
            const from = moveStr.substring(0, 2);
            const to = moveStr.substring(2, 4);
            const promo = moveStr.substring(4, 5);
            moveRes = c.move({ from, to, promotion: promo || 'q' });
        }

        if (!moveRes) {
            console.error(`[FAIL] Puzzle ${p.id} (${p.title}): Invalid move at step ${mIdx + 1} ("${moveStr}") on FEN: ${c.fen()}`);
            validMoves = false;
        }
    });

    if (validMoves) {
        totalPassed++;
        console.log(`[OK] Puzzle ${p.id} (${p.title}) -> Verified ${p.moves.length} moves cleanly!`);
    } else {
        totalFailed++;
    }
});

console.log(`\nVerification Summary: ${totalPassed} PASSED, ${totalFailed} FAILED out of ${global.PUZZLE_DATABASE.length} Puzzles.`);
