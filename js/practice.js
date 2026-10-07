// Practice Module — Curated Positions for Training Endgames, Openings, Middlegames & Pawn Structures

const PRACTICE_SCENARIOS = [

    // ─── ENDGAMES ────────────────────────────────────────────────────────────────

    {
        id: 'eg_kpk',
        category: 'endgames',
        name: 'King & Pawn vs King',
        icon: '♟',
        // White king on e4, pawn on e5, Black king on e7 — classic K+P endgame
        fen: '4k3/8/8/4P3/4K3/8/8/8 w - - 0 1',
        playAs: 'w',
        goal: 'Promote the pawn to queen and checkmate',
        tip: 'Use the rule of the square! Your king must support the pawn. Aim for the key squares d6, e6, or f6 to guarantee promotion.',
        difficulty_note: 'Win for White',
    },
    {
        id: 'eg_opposition',
        category: 'endgames',
        name: 'King Opposition',
        icon: '♟',
        // White king d4, pawn d5, Black king d7 — opposition battle
        fen: '3k4/8/8/3P4/3K4/8/8/8 w - - 0 1',
        playAs: 'w',
        goal: 'Take the opposition, support the pawn, and queen it',
        tip: 'Direct opposition means the kings face each other with one square between them. The player NOT to move has the opposition. Use triangulation to seize it!',
        difficulty_note: 'Win for White',
    },
    {
        id: 'eg_lucena',
        category: 'endgames',
        name: 'Lucena Position',
        icon: '♜',
        // Classic Lucena: White Rook on a1, King b7, Pawn b6, Black Rook e8, King d8
        fen: '3k4/1KP5/8/8/8/8/8/R3r3 w - - 0 1',
        playAs: 'w',
        goal: 'Build the bridge to shelter your king and promote',
        tip: '"Building the bridge": Bring your rook to the 4th rank (Ra4) to shield your king from checks. This is one of the most important rook endgame techniques!',
        difficulty_note: 'Win for White',
    },
    {
        id: 'eg_philidor',
        category: 'endgames',
        name: 'Philidor Defense (Draw)',
        icon: '♜',
        // Black to hold a draw: White King e5, Rook f1, Pawn e4; Black King e7, Rook a6
        fen: '8/4k3/r7/4PK2/8/8/8/5R2 b - - 0 1',
        playAs: 'b',
        goal: 'Hold a draw by keeping your rook active',
        tip: 'The Philidor position is a draw for Black: keep your rook on the 6th rank (Ra6) until the pawn advances to e6, THEN switch to the back rank (Ra1/Ra8) to give endless checks!',
        difficulty_note: 'Draw for Black',
    },
    {
        id: 'eg_rook_pawn',
        category: 'endgames',
        name: 'Rook & Pawn Endgame',
        icon: '♜',
        // White has extra pawn in a rook ending — convert the advantage
        fen: '4r1k1/5ppp/8/4P3/8/8/5PPP/4R1K1 w - - 0 1',
        playAs: 'w',
        goal: 'Advance the passed pawn and convert the advantage',
        tip: 'Activate your rook behind the passed pawn (or in front of the opponent\'s king). Rooks belong behind passed pawns — this maximizes their activity!',
        difficulty_note: 'Slight edge for White',
    },
    {
        id: 'eg_queen_vs_rook',
        category: 'endgames',
        name: 'Queen vs Rook',
        icon: '♛',
        // Classic Q vs R — White Queen and King vs Black Rook and King
        fen: '6k1/8/8/8/8/8/5Q2/3K2r1 w - - 0 1',
        playAs: 'w',
        goal: 'Force checkmate with queen vs rook',
        tip: 'Queen vs Rook is a technical win. Use your queen to restrict the enemy king, then fork king and rook. Patience is key — it often takes 30+ moves!',
        difficulty_note: 'Win for White',
    },
    {
        id: 'eg_two_rooks_mate',
        category: 'endgames',
        name: 'Two Rooks Checkmate',
        icon: '♜',
        // White two rooks vs lone black king — elementary checkmate drill
        fen: '4k3/8/8/8/8/8/8/1RR1K3 w - - 0 1',
        playAs: 'w',
        goal: 'Checkmate with two rooks (lawnmower technique)',
        tip: 'Use the "lawnmower" method: place one rook on the 1st rank, the other on the 2nd — then push the black king to the edge rank by rank. Don\'t stalemate!',
        difficulty_note: 'Win for White',
    },
    {
        id: 'eg_rook_vs_pawn',
        category: 'endgames',
        name: 'Rook vs Advanced Pawn',
        icon: '♜',
        // White Rook a1, King e1 vs Black King g2, pawn h2
        fen: '8/8/8/8/8/8/6pk/R3K3 w - - 0 1',
        playAs: 'w',
        goal: 'Stop the dangerous h-pawn from queening',
        tip: 'The rook must get behind the pawn or cut off the enemy king. With a rook-pawn on the 7th, it\'s often a draw — calculate carefully!',
        difficulty_note: 'Tricky draw or win',
    },

    // ─── OPENINGS ────────────────────────────────────────────────────────────────

    {
        id: 'op_italian',
        category: 'openings',
        name: 'Italian Game',
        icon: '♗',
        // After 1.e4 e5 2.Nf3 Nc6 3.Bc4 — Italian starting point
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 3',
        playAs: 'w',
        goal: 'Develop pieces, castle kingside, and control the center',
        tip: 'In the Italian, your bishop on c4 eyes the f7 pawn. Common plans: play d3 for a slow build, or d4 for an immediate center fight. Castle early!',
        difficulty_note: 'Balanced opening',
    },
    {
        id: 'op_ruy_lopez',
        category: 'openings',
        name: 'Ruy López (Spanish)',
        icon: '♗',
        // After 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4
        fen: 'r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
        playAs: 'w',
        goal: 'Pressure Black\'s e5 pawn and fight for long-term advantage',
        tip: 'The Ruy López puts pressure on the c6 knight that defends the e5 pawn. Typical plan: castle, then d4 to fight for the center. A top choice at all levels!',
        difficulty_note: 'Slight edge for White',
    },
    {
        id: 'op_sicilian_dragon',
        category: 'openings',
        name: 'Sicilian Dragon',
        icon: '🐉',
        // After 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6
        fen: 'rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6',
        playAs: 'w',
        goal: 'Prepare the Yugoslav Attack: Bc4, Be3, Qd2, castle queenside',
        tip: 'In the Yugoslav Attack vs Dragon: castle queenside and launch a kingside pawn storm (h4-h5). Meanwhile Black attacks on the queenside. A razor-sharp battle of attacks!',
        difficulty_note: 'Double-edged',
    },
    {
        id: 'op_queens_gambit',
        category: 'openings',
        name: 'Queen\'s Gambit',
        icon: '♕',
        // After 1.d4 d5 2.c4 — Black to move: accept or decline?
        fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
        playAs: 'b',
        goal: 'Respond to the Queen\'s Gambit — decline with e6 or Nc6',
        tip: 'The QGD (2...e6) keeps a solid pawn structure. After ...e6, develop Nf6, Be7 and castle. White will try to get a space advantage — stay active and fight for e4!',
        difficulty_note: 'Balanced',
    },
    {
        id: 'op_kings_indian',
        category: 'openings',
        name: 'King\'s Indian Defense',
        icon: '♞',
        // After 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O
        fen: 'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 2 6',
        playAs: 'w',
        goal: 'Close the center with d5 or keep tension — fight for space',
        tip: 'In the KID, White often closes with d5 and attacks on the queenside. Black will counterattack with ...e5 followed by ...f5. Knowing both sides\' plans is key!',
        difficulty_note: 'Sharp counterplay',
    },
    {
        id: 'op_french_advance',
        category: 'openings',
        name: 'French Advance Variation',
        icon: '⚔️',
        // After 1.e4 e6 2.d4 d5 3.e5 — Advance variation
        fen: 'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4',
        playAs: 'w',
        goal: 'Maintain the space advantage and attack on the kingside',
        tip: 'In the French Advance: protect e5 with f4, develop Nf3 and Nd2 before Be2 and castle. Black will attack with ...c5 and ...Nc6 — be ready to defend d4!',
        difficulty_note: 'White has space',
    },
    {
        id: 'op_caro_kann',
        category: 'openings',
        name: 'Caro-Kann Defense',
        icon: '🏰',
        // After 1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 — classical variation
        fen: 'rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 1 4',
        playAs: 'b',
        goal: 'Develop naturally and neutralize White\'s center',
        tip: 'In the Caro-Kann Classical: play ...Bf5 to develop outside the pawn chain, then ...e6, Nd7, Ngf6, Bd6 and castle. Solid and sound — a favourite of Karpov!',
        difficulty_note: 'Solid for Black',
    },

    // ─── MIDDLEGAME STRUCTURES ──────────────────────────────────────────────────

    {
        id: 'mid_isolated_pawn',
        category: 'middlegames',
        name: 'Attacking the Isolated Queen Pawn',
        icon: '🎯',
        // Typical IQP structure: White has IQP on d4, Black blockades d5
        fen: 'r1bqr1k1/pp3ppp/2n2n2/3p4/3P4/2N1PN2/PP3PPP/R1BQR1K1 w - - 0 1',
        playAs: 'b',
        goal: 'Blockade the isolated pawn and convert the long-term weakness',
        tip: 'Blockade the IQP with a knight on d5 — it is a beautiful outpost! Then aim to trade pieces to reach an ending where the isolated pawn is a decisive weakness.',
        difficulty_note: 'Black aims for endgame',
    },
    {
        id: 'mid_iqp_attack',
        category: 'middlegames',
        name: 'Attacking with Isolated Queen Pawn',
        icon: '⚡',
        // Same IQP structure — White attacks with the IQP's dynamic potential
        fen: 'r2qr1k1/pp1nbppp/2p2n2/8/2BP4/2N1PN2/PP3PPP/R2QR1K1 w - - 0 1',
        playAs: 'w',
        goal: 'Launch a kingside attack using the IQP\'s dynamic potential',
        tip: 'When you have the IQP, attack! The pawn provides space and open files. Typical plan: Nd5 sacrifice or d4-d5 pawn break to open the position for your active pieces.',
        difficulty_note: 'White attacks dynamically',
    },
    {
        id: 'mid_two_bishops',
        category: 'middlegames',
        name: 'Two Bishops Advantage',
        icon: '♗',
        // White has two bishops vs knight+bishop — semi-open position
        fen: 'r4rk1/pp2ppbp/2np2p1/q7/4P3/1BN2N2/PP1Q1PPP/R4RK1 w - - 0 1',
        playAs: 'w',
        goal: 'Open the position to activate the bishop pair',
        tip: 'The bishop pair shines in open positions. Use your central pawn to open the position. Avoid trading either bishop — keep both active on different colored squares.',
        difficulty_note: 'White has long-term edge',
    },
    {
        id: 'mid_rook_seventh',
        category: 'middlegames',
        name: 'Rook on the 7th Rank',
        icon: '♜',
        // White rook on 7th, Black king on back rank — dominant rook endgame
        fen: '6k1/R4pp1/8/8/8/8/5PPP/6K1 w - - 0 1',
        playAs: 'w',
        goal: 'Use the dominating rook on the 7th to win material or mate',
        tip: 'A rook on the 7th rank is "on the pig" — it attacks the enemy pawns and restricts the king. Connect it with your king or a second rook to maximize pressure!',
        difficulty_note: 'White dominates',
    },
    {
        id: 'mid_minority_attack',
        category: 'middlegames',
        name: 'Minority Attack',
        icon: '⚔️',
        // Queen's Gambit structure: White launches b4-b5 minority attack
        fen: 'r2qr1k1/pp2bppp/2n1pn2/2ppN3/2PP4/2N1BP2/PP1QB1PP/R4RK1 w - - 0 1',
        playAs: 'w',
        goal: 'Launch the b4-b5 minority attack to create a backward pawn',
        tip: 'The minority attack (b2-b4-b5) uses 2 pawns to disrupt 3! After bxc6, Black gets a weak backward c-pawn on the semi-open c-file. This is the key idea in many QGD structures.',
        difficulty_note: 'White creates weaknesses',
    },

    // ─── PAWN STRUCTURES ─────────────────────────────────────────────────────────

    {
        id: 'pawn_passed_breakthrough',
        category: 'pawns',
        name: 'Passed Pawn Breakthrough',
        icon: '♟',
        // White has d-pawn majority, Black has c+e pawns — breakthrough with d5!
        fen: '4k3/8/8/2p1p3/2P1P3/3P4/8/4K3 w - - 0 1',
        playAs: 'w',
        goal: 'Execute the pawn breakthrough to create a passed pawn',
        tip: 'The pawn breakthrough: push d5! If cxd5 then exd5 wins, if exd5 then cxd5 wins. One of your pawns will always queen. Calculate every variation before pushing!',
        difficulty_note: 'Win for White',
    },
    {
        id: 'pawn_outside_passed',
        category: 'pawns',
        name: 'Outside Passed Pawn',
        icon: '♟',
        // White has an outside passed a-pawn + kingside pawns vs Black's kingside only
        fen: '4k3/5ppp/8/P7/8/8/5PPP/4K3 w - - 0 1',
        playAs: 'w',
        goal: 'Use the outside passed pawn as a decoy to win the kingside',
        tip: 'The outside passed pawn is a powerful weapon! Advance it to force the enemy king to chase it, then your king invades the kingside to collect all the pawns.',
        difficulty_note: 'Win for White',
    },
    {
        id: 'pawn_king_activation',
        category: 'pawns',
        name: 'King Activation in Endgame',
        icon: '♔',
        // Pure king and pawn endgame — White must activate king to win
        fen: '8/5ppp/5k2/8/5PPP/8/8/6K1 w - - 0 1',
        playAs: 'w',
        goal: 'March your king into the position to win the pawn race',
        tip: 'The king is a powerful fighting piece in the endgame! March it toward the center or the opponent\'s pawns. Don\'t be passive — an active king wins games!',
        difficulty_note: 'Requires accurate play',
    },
    {
        id: 'pawn_zugzwang',
        category: 'pawns',
        name: 'Zugzwang & Triangulation',
        icon: '🔺',
        // Black King d3, pawn d4 vs White King d1 — Black to force White into zugzwang
        fen: '8/8/8/8/3p4/3k4/8/3K4 b - - 0 1',
        playAs: 'b',
        goal: 'Triangulate to put White in zugzwang and promote the pawn',
        tip: 'Zugzwang means "obligation to move" — the player forced to move is at a disadvantage. Use triangulation (move your king in a triangle) to give your opponent the move!',
        difficulty_note: 'Win for Black',
    },
    {
        id: 'pawn_doubled',
        category: 'pawns',
        name: 'Exploiting Doubled Pawns',
        icon: '⬆️',
        // White has doubled c-pawns — Black exploits the structural weakness
        fen: '4k3/pp1p1ppp/8/8/2P5/2P5/PP1P1PPP/4K3 b - - 0 1',
        playAs: 'b',
        goal: 'Target and win the weak doubled pawns',
        tip: 'Doubled pawns cannot defend each other. Target the front pawn with your king and pieces, then the rear pawn becomes a free target. Don\'t hurry — restrict first, then win!',
        difficulty_note: 'Black has structural edge',
    },
    {
        id: 'pawn_chain',
        category: 'pawns',
        name: 'Attack the Pawn Chain Base',
        icon: '⛓️',
        // French-like pawn chain: White e5-d4, Black e6-d5 — Black attacks the base c3/c4
        fen: 'rnbqk2r/pp3ppp/4pn2/2ppP3/3P4/2P1BN2/PP3PPP/RN1QKB1R b KQkq - 0 1',
        playAs: 'b',
        goal: 'Attack the base of White\'s pawn chain with ...c4 or ...b5',
        tip: 'Nimzowitsch\'s rule: attack a pawn chain at its base! In French-like structures, White\'s chain is e5-d4-c3. Black attacks the base with ...c4 or ...b5 to undermine it.',
        difficulty_note: 'Black counterattacks',
    },
];

// ─── PracticeManager ────────────────────────────────────────────────────────────

class PracticeManager {
    constructor() {
        this.scenarios = PRACTICE_SCENARIOS;
        this.currentScenario = null;
        this.resultsKey = 'chessapp_practice_results';
        this.results = this._loadResults();
    }

    getCategories() {
        const cats = [...new Set(this.scenarios.map(s => s.category))];
        return cats;
    }

    getScenariosForCategory(category) {
        return this.scenarios.filter(s => s.category === category);
    }

    getScenarioById(id) {
        return this.scenarios.find(s => s.id === id) || null;
    }

    setCurrentScenario(id) {
        this.currentScenario = this.getScenarioById(id);
        return this.currentScenario;
    }

    recordResult(scenarioId, result) { // result: 'win' | 'draw' | 'loss'
        this.results[scenarioId] = result;
        this._saveResults();
    }

    getResult(scenarioId) {
        return this.results[scenarioId] || null;
    }

    _loadResults() {
        try {
            const raw = localStorage.getItem(this.resultsKey);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            return {};
        }
    }

    _saveResults() {
        try {
            localStorage.setItem(this.resultsKey, JSON.stringify(this.results));
        } catch (e) {}
    }

    clearResults() {
        this.results = {};
        try { localStorage.removeItem(this.resultsKey); } catch (e) {}
    }
}
