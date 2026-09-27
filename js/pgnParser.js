// Chess.com Compatible PGN Game Parser & Scrubber Data Generator
class PgnGameParser {
    static parsePGN(pgnString) {
        if (!pgnString || typeof pgnString !== 'string') return null;

        const headers = {};
        const headerRegex = /\[(\w+)\s+"([^"]*)"\]/g;
        let match;

        while ((match = headerRegex.exec(pgnString)) !== null) {
            headers[match[1]] = match[2];
        }

        // Clean move text by stripping annotations, clock tags [%clk...], eval tags [%eval...], and comments
        let moveText = pgnString.replace(/\[.*?\]/g, ''); // strip headers
        moveText = moveText.replace(/\{.*?\}/g, '');     // strip comments
        moveText = moveText.replace(/\(.*?\)/g, '');     // strip variations
        moveText = moveText.replace(/\$\d+/g, '');        // strip NAGs ($1, $2, etc.)
        moveText = moveText.replace(/\d+\.\.\./g, '');    // strip continuation numbers
        moveText = moveText.replace(/\d+\./g, '');       // strip move numbers
        moveText = moveText.replace(/1-0|0-1|1\/2-1\/2|\*/g, ''); // strip result tags
        moveText = moveText.trim();

        // Split into tokens
        const rawMoves = moveText.split(/\s+/).filter(m => m.length > 0);

        // Load into chess.js instance to generate exact FEN at each ply step
        const tempChess = new Chess();
        const movesList = [];

        for (let i = 0; i < rawMoves.length; i++) {
            const san = rawMoves[i];
            const moveObj = tempChess.move(san, { sloppy: true });
            if (!moveObj) {
                console.warn(`Unrecognized SAN move at ply ${i}:`, san);
                break;
            }

            movesList.push({
                ply: i + 1,
                moveNumber: Math.floor(i / 2) + 1,
                color: moveObj.color,
                san: moveObj.san,
                from: moveObj.from,
                to: moveObj.to,
                piece: moveObj.piece,
                captured: moveObj.captured || null,
                fen: tempChess.fen(),
                eval: null,
                quality: null,
                recommendation: null
            });
        }

        return {
            headers: {
                white: headers.White || 'White Player',
                black: headers.Black || 'Black Player',
                whiteElo: headers.WhiteElo || '?',
                blackElo: headers.BlackElo || '?',
                result: headers.Result || '*',
                event: headers.Event || 'Chess.com Game',
                date: headers.Date || ''
            },
            moves: movesList,
            initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
        };
    }
}
