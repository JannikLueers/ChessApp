const fs = require('fs');

// Load chess.min.js into environment
const chessCode = fs.readFileSync('c:/Users/janni/CodingProjects/ChessApp/js/chess.min.js', 'utf8');
eval(chessCode + '; global.Chess = Chess;');

// Read puzzles.js content
const puzzlesCode = fs.readFileSync('c:/Users/janni/CodingProjects/ChessApp/js/puzzles.js', 'utf8');
const cleanPuzzlesCode = puzzlesCode.replace('const PUZZLE_DATABASE =', 'global.PUZZLE_DATABASE =');
eval(cleanPuzzlesCode);

console.log(`Verifying ${global.PUZZLE_DATABASE.length} Puzzles against Lichess Contract...`);

let totalPassed = 0;
let totalFailed = 0;

global.PUZZLE_DATABASE.forEach((p, idx) => {
    const c = new Chess();
    const loaded = c.load(p.fen);
    if (!loaded) {
        console.error(`[FAIL] Puzzle ${p.lichessId || p.id}: Invalid FEN -> ${p.fen}`);
        totalFailed++;
        return;
    }

    const opponentColor = c.turn();
    const solverColor = opponentColor === 'w' ? 'b' : 'w';
    let validMoves = true;

    p.moves.forEach((moveStr, mIdx) => {
        const expectedColor = (mIdx % 2 === 0) ? opponentColor : solverColor;
        if (c.turn() !== expectedColor) {
            console.error(`[FAIL] Puzzle ${p.lichessId || p.id}: Turn mismatch at move ${mIdx}. Expected ${expectedColor}, got ${c.turn()}`);
            validMoves = false;
            return;
        }

        const from = moveStr.substring(0, 2);
        const to = moveStr.substring(2, 4);
        const promo = moveStr.substring(4, 5) || 'q';
        const moveRes = c.move({ from, to, promotion: promo });

        if (!moveRes) {
            const role = mIdx === 0 ? 'Opponent Blunder (moves[0])' : (mIdx % 2 === 1 ? `Solver Move (moves[${mIdx}])` : `Opponent Reply (moves[${mIdx}])`);
            console.error(`[FAIL] Puzzle ${p.lichessId || p.id}: Invalid move at ${role} ("${moveStr}") on FEN: ${c.fen()}`);
            validMoves = false;
        }
    });

    if (validMoves) {
        totalPassed++;
    } else {
        totalFailed++;
    }
});

console.log(`\nVerification Summary: ${totalPassed} PASSED, ${totalFailed} FAILED out of ${global.PUZZLE_DATABASE.length} Puzzles.`);
if (totalFailed > 0) {
    process.exit(1);
}
