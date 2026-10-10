// Practice Module — Curated Positions & Comprehensive Opening Repertoire
// Based on Established Chess Literature (Nimzowitsch, Nunn, Fine, Watson, Romero Holmes, Kasparov)

const PRACTICE_SCENARIOS = [

    // ─── ENDGAMES ────────────────────────────────────────────────────────────────

    {
        id: 'eg_kpk',
        category: 'endgames',
        name: 'King & Pawn vs King',
        icon: '♟',
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
        fen: '8/8/8/8/8/8/6pk/R3K3 w - - 0 1',
        playAs: 'w',
        goal: 'Stop the dangerous h-pawn from queening',
        tip: 'The rook must get behind the pawn or cut off the enemy king. With a rook-pawn on the 7th, it\'s often a draw — calculate carefully!',
        difficulty_note: 'Tricky draw or win',
    },

    // ─── WHITE OPENINGS (Play as White ♔) ──────────────────────────────────────────

    {
        id: 'op_london',
        category: 'openings',
        side: 'w',
        name: 'The London System',
        icon: '🏛️',
        eco: 'D02',
        moves: ['d4', 'd5', 'Bf4', 'Nf6', 'e3', 'c5', 'c3', 'Nc6', 'Nd2', 'e6', 'Ngf3', 'Bd6', 'Bg3'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Construct the harmonious c3-d4-e3 pyramid and outpost the knight on e5',
        tip: 'Develop the dark-squared bishop to f4 BEFORE playing e3! This solves the classical problem of the Queen\'s Pawn openings.',
        literature: {
            bookTitle: 'The Agile London System & Classic Queen\'s Pawn Strategy',
            sources: 'Alfonso Romero Holmes & Oscar de Prado, Sverre Johnsen, Aaron Nimzowitsch (My System)',
            generalIdea: 'The London System is a modern universal opening characterized by White developing the dark-square bishop to f4 before locking the central structure with e3. Established literature highlights that this solves the historical drawback of the Queen\'s Gambit and Colle System, where the c1-bishop is confined behind a chain of pawns. White erects the unshakeable c3-d4-e3 pyramid, establishing central control with minimal tactical vulnerability while directing piece energy toward the kingside.',
            pawnStructure: 'The granite pyramid c3-d4-e3 forms the backbone. If Black plays ...cxd4, White recaptures with exd4, opening the e-file for the rooks and securing the permanent e5 outpost. The d4 pawn blunts Black\'s central breaks, while White\'s king can castle safely into a secure kingside haven.',
            keyPlans: '1. Plant a knight on the formidable e5 outpost, anchored by d4 and f4.\n2. Position the light-squared bishop on d3, menacing Black\'s h7-pawn.\n3. If Black harasses the f4-bishop with ...Nh5 or ...Nd7-f6, retreat to g3. A capture on g3 allows hxg3, opening the h-file for White\'s rook attack.\n4. Mobilize the queen via e2 or f3 to support kingside pressure.',
            criticalSquares: 'e5 (White\'s primary attacking springboard), d4 (the central pillar), f4/g3 (the life diagonal for the dark bishop), and h7 (the target of White\'s bishop-queen battery).',
            commonPitfalls: 'Playing e3 prematurely on move 2 (locking the c1 bishop inside); neglecting Black\'s queen counterattack ...Qb6 targeting b2; trading the f4 bishop blindly without securing the open h-file or dynamic compensation.',
            masterQuote: '"The London System is not merely an opening; it is a fortress from which you launch devastating kingside offensives without risking central collapse." — Alfonso Romero Holmes'
        },
        moveExplanations: [
            '1. d4: White stakes out an unassailable claim in the center, blunting Black\'s e5-break while preparing rapid development for the queen, knight, and bishops.',
            '1... d5: Black stakes an equal territorial claim in the center, preventing White from playing e4 directly.',
            '2. Bf4: The hallmark move of the London System! White brings the bishop outside the pawn chain before committing the e-pawn to e3.',
            '2... Nf6: Black develops naturally, controlling the key e4 square and preparing kingside castling.',
            '3. e3: Solidifies d4 and opens the diagonal for the king\'s bishop, completing the initial granite triangle.',
            '3... c5: Black challenges White\'s d4 center directly — this is the most critical and frequent response faced by London players.',
            '4. c3: White locks in the signature c3-d4-e3 pawn pyramid. If Black plays ...cxd4, White recaptures with exd4, maintaining full central supremacy.',
            '4... Nc6: Black increases piece pressure on d4 and contests e5.',
            '5. Nd2: Develops the b1-knight without obstructing the c3-pawn, keeping e4 firmly under White\'s surveillance while preparing Ngf3.',
            '5... e6: Black solidifies their center and prepares to develop the dark-squared bishop to d6 or e7.',
            '6. Ngf3: White brings the second knight into the battle, aiming for the glorious e5 outpost.',
            '6... Bd6: Black offers a trade of dark-squared bishops to relieve White\'s pressure.',
            '7. Bg3: The classic master maneuver! White refuses an immediate capture. If Black plays ...Bxg3, White recaptures with hxg3, opening the semi-open h-file for a direct attack!'
        ],
        branches: {
            'd4': [
                { opponentMove: 'd5', theoryResponse: 'Bf4', name: 'Classical 1...d5', note: 'The main line. White proceeds with 2.Bf4, taking control of the key central diagonals.' },
                { opponentMove: 'Nf6', theoryResponse: 'Bf4', name: 'Indian Setup (1...Nf6)', note: 'Flexible defense. White continues 2.Bf4. Whether Black plays ...g6 or ...e6, the London setup remains rock-solid.' },
                { opponentMove: 'c5', theoryResponse: 'e3', name: 'Steinitz Countergambit (1...c5)', note: 'Aggressive flank strike! Established literature recommends solidifying with 2.e3 or taking space with 2.d5. White holds a positional advantage.' },
                { opponentMove: 'e6', theoryResponse: 'Bf4', name: 'Franco-Indian Defense (1...e6)', note: 'Black prepares ...d5 or ...c5. White calmly continues 2.Bf4.' },
                { opponentMove: 'g6', theoryResponse: 'Bf4', name: 'Modern / Pirc Setup (1...g6)', note: 'Black prepares kingside fianchetto. White plays 2.Bf4 and 3.e3, building central harmony.' }
            ],
            'd4 d5 Bf4': [
                { opponentMove: 'c5', theoryResponse: 'e3', name: 'Immediate 2...c5 Challenge', note: 'Black attacks the d4 base immediately. White responds 3.e3, preparing c3 to absorb any central tension.' },
                { opponentMove: 'Nf6', theoryResponse: 'e3', name: 'Classical 2...Nf6', note: 'Natural development. White responds 3.e3, securing d4.' },
                { opponentMove: 'Bf5', theoryResponse: 'e3', name: 'Symmetrical 2...Bf5', note: 'Black copies White\'s bishop development. White continues 3.e3 e6 4.c4! striking at Black\'s center.' },
                { opponentMove: 'Nc6', theoryResponse: 'e3', name: 'Chigorin-style 2...Nc6', note: 'Black aims for rapid ...e5. White plays 3.e3 followed by 4.Nf3 or 4.c3 to deny e5.' }
            ],
            'd4 d5 Bf4 Nf6 e3': [
                { opponentMove: 'c5', theoryResponse: 'c3', name: 'Main Line 3...c5', note: 'White reinforces d4 with 4.c3, completing the classic London pyramid.' },
                { opponentMove: 'e6', theoryResponse: 'Nf3', name: 'Solid 3...e6', note: 'White continues 4.Nf3, preparing to castle and plant a knight on e5.' },
                { opponentMove: 'Bf5', theoryResponse: 'Bd3', name: 'Bishop Challenge 3...Bf5', note: 'White plays 4.Bd3 or 4.c4 to challenge Black\'s bishop actively.' },
                { opponentMove: 'g6', theoryResponse: 'Nf3', name: 'Fianchetto Setup (3...g6)', note: 'Black prepares ...Bg7 and castling. White plays 4.Nf3 and 5.Be2, keeping smooth central control.' }
            ],
            'd4 d5 Bf4 Nf6 e3 c5 c3': [
                { opponentMove: 'Nc6', theoryResponse: 'Nd2', name: 'Natural Development (4...Nc6)', note: 'White continues 5.Nd2, keeping the c3 pawn supported while preparing Ngf3.' },
                { opponentMove: 'Qb6', theoryResponse: 'Qb3', name: 'Queen Counterattack (4...Qb6)', note: 'Tactical alert! Black attacks b2. Theory recommends 5.Qb3 (or 5.Qc2). If 5...c4, White plays 6.Qc2 keeping balance.' },
                { opponentMove: 'e6', theoryResponse: 'Nd2', name: 'Solid Defense (4...e6)', note: 'Black prepares ...Bd6. White responds 5.Nd2, continuing normal London development.' }
            ]
        }
    },

    {
        id: 'op_italian',
        category: 'openings',
        side: 'w',
        name: 'Italian Game (Giuoco Piano)',
        icon: '♗',
        eco: 'C53',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6', 'O-O', 'a6', 'Bb3', 'Ba7'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Pressure f7, build central flexibility with c3/d3, and maneuver the knight to g3',
        tip: 'In the Giuoco Pianissimo, don\'t rush d4! Build slowly, tuck the bishop on b3, and route the b1-knight via d2-f1-g3.',
        literature: {
            bookTitle: 'Understanding the Chess Openings & Master Italian Strategy',
            sources: 'John Nunn, Reuben Fine, Garry Kasparov (My Great Predecessors)',
            generalIdea: 'Originating in 16th-century Italy with Polerio and Greco, the Italian Game focuses on rapid development and direct diagonal pressure on Black\'s fragile f7-square. Modern grandmaster practice favors the Giuoco Pianissimo ("very quiet game"), where White foregoes an immediate, destabilizing d4-push in favor of c3 and d3. This keeps the center solid while orchestrating a profound kingside piece buildup.',
            pawnStructure: 'White forms a supple pawns duo on c3 and d3, leaving the option open to strike with d3-d4 at the optimal psychological moment. Black usually supports e5 with ...d6.',
            keyPlans: '1. The famous Italian knight maneuver: Nb1-d2-f1-g3, creating a dangerous attacking post on f5.\n2. Preserve the c4 bishop by retreating to b3 or c2 before Black plays ...Na5.\n3. Castle early, then launch kingside pressure with Re1, h3 (preventing ...Bg4), and eventual d4 or f4 breaks.',
            criticalSquares: 'f7 (Black\'s weakest link), f5 (White\'s dream knight outpost), c4/b3 (the sniper diagonal), and d4 (the central trigger).',
            commonPitfalls: 'Allowing Black to pin the f3 knight with ...Bg4 when h3 hasn\'t been played; letting Black trade the c4 bishop via ...Na5 for free.',
            masterQuote: '"In the Italian Game, the f7 square is the target of your youth; the maneuver Nd2-f1-g3 is the wisdom of your maturity." — John Nunn'
        },
        moveExplanations: [
            '1. e4: White occupies the center, opens paths for queen and bishop, and immediately challenges key central squares.',
            '1... e5: Black establishes equal central footing and prepares standard piece mobilization.',
            '2. Nf3: Develops a knight with tempo, directly attacking Black\'s e5 pawn and preparing kingside castling.',
            '2... Nc6: Black\'s most natural defense, protecting e5 while developing a piece toward the center.',
            '3. Bc4: The Italian defining move! The bishop aims directly at Black\'s softest spot: the vulnerable f7 square.',
            '3... Bc5: The Giuoco Piano ("Quiet Game"). Black mirrors White\'s bishop activity and controls d4.',
            '4. c3: White prepares to support the center and controls the crucial d4 square.',
            '4... Nf6: Black develops with tempo, attacking White\'s e4 pawn.',
            '5. d3: The hallmark of the modern Giuoco Pianissimo. White defends e4 and creates a durable foundation.',
            '5... d6: Black solidifies e5 and frees the light-squared bishop for action.',
            '6. O-O: White tucks the king to safety and activates the f1 rook for future central play.',
            '6... a6: Essential master move! Black prepares a safe retreat square on a7 for the dark-squared bishop.',
            '7. Bb3: White proactively retreats the bishop out of harm\'s way, avoiding any ...Na5 trades.',
            '7... Ba7: Black safely parks their bishop on the glorious a7-g1 diagonal.'
        ],
        branches: {
            'e4 e5 Nf3 Nc6 Bc4': [
                { opponentMove: 'Nf6', theoryResponse: 'd3', name: 'Two Knights Defense (3...Nf6)', note: 'Black counter-attacks e4. White can play the sharp 4.Ng5 (Fried Liver territory) or the calm positional 4.d3.' },
                { opponentMove: 'Bc5', theoryResponse: 'c3', name: 'Giuoco Piano (3...Bc5)', note: 'Classical main line. White prepares central control with 4.c3.' },
                { opponentMove: 'Be7', theoryResponse: 'd4', name: 'Hungarian Defense (3...Be7)', note: 'Quiet and defensive. White seizes immediate space with 4.d4.' }
            ],
            'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6': [
                { opponentMove: 'd4', theoryResponse: 'exd4', name: 'Sharp Greco Attack', note: 'White immediately blasts the center with 5.d4.' },
                { opponentMove: 'd3', theoryResponse: 'd6', name: 'Quiet Pianissimo (5.d3)', note: 'White chooses long-term strategic maneuvering.' }
            ]
        }
    },

    {
        id: 'op_ruy_lopez',
        category: 'openings',
        side: 'w',
        name: 'Ruy López (Spanish Opening)',
        icon: '🏰',
        eco: 'C84',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Apply long-term pressure on Black\'s central e5 stronghold and conquer the center with c3/d4',
        tip: 'Don\'t take on c6 early unless you want the Exchange Variation! Preserve your bishop on b3 and play c3 to build the classic Spanish pawn roller.',
        literature: {
            bookTitle: 'The Ruy Lopez: The Classical Cornerstone of Chess',
            sources: 'Siegbert Tarrasch, Aaron Nimzowitsch, John Shaw (Quality Chess)',
            generalIdea: 'Named after 16th-century Spanish bishop Ruy López de Segura, this is universally regarded as the deepest and most prestigious opening in chess. Unlike the Italian Game which attacks f7, 3.Bb5 targets the defender of e5 (the c6-knight). This puts structural tension on Black\'s entire central formation, creating subtle strategic advantages that persist deep into the endgame.',
            pawnStructure: 'White forms the classic Spanish center: c3 and d4, backed by pawns on e4 and f2. Black usually sets up a defensive phalanx with ...d6, ...e5, and queenside pawns on a6 and b5.',
            keyPlans: '1. Re1 supports the e4 pawn, freeing the f3 knight and d-pawn.\n2. The trademark knight journey: Nb1-d2-f1-g3, joining the kingside offensive.\n3. h3 is vital: it stops ...Bg4 from pinning the f3-knight.\n4. Strike in the center with d2-d4 to challenge Black\'s space.',
            criticalSquares: 'e5 (Black\'s central anchor), c6 (the pinned defender), d4 (the contested central prize), and f5 (the ultimate kingside outpost).',
            commonPitfalls: 'Forgetting h3 and allowing Black to pin the f3-knight with ...Bg4; falling for the Noah\'s Ark trap (...a6, ...b5, ...d6, ...c5, ...c4 trapping the Spanish bishop).',
            masterQuote: '"Whoever understands the Ruy López understands chess." — Siegbert Tarrasch'
        },
        moveExplanations: [
            '1. e4: White seizes space in the center and frees the bishop and queen.',
            '1... e5: Black claims symmetrical central space.',
            '2. Nf3: Attacks e5 and prepares kingside castling.',
            '2... Nc6: Defends e5 and develops an active minor piece.',
            '3. Bb5: The Spanish Opening! White pressures the knight that defends e5.',
            '3... a6: Morphy Defense. Black forces White to clarify the bishop\'s intention.',
            '4. Ba4: White maintains the pressure while keeping the bishop pair alive.',
            '4... Nf6: Black develops the kingside knight and counter-attacks e4.',
            '5. O-O: White completes castling, offering the e4 pawn (Berlin/Open lines) for rapid development.',
            '5... Be7: Black chooses the Classical Closed Defense, developing solidly.',
            '6. Re1: White defends e4 and prepares the central push d4.',
            '6... b5: Black breaks the pin and gains queenside space.',
            '7. Bb3: The bishop safely settles on the great a2-g8 attacking diagonal.',
            '7... d6: Black cements the e5 pawn and opens the c8 bishop\'s diagonal.',
            '8. c3: Crucial Spanish move! Prepares d4 while providing a retreat square on c2.',
            '8... O-O: Black castles into safety.',
            '9. h3: The quiet prophylactic master stroke! Prevents ...Bg4 from pinning White\'s crucial knight.'
        ],
        branches: {
            'e4 e5 Nf3 Nc6 Bb5': [
                { opponentMove: 'a6', theoryResponse: 'Ba4', name: 'Morphy Defense (3...a6)', note: 'The gold standard. White retreats 4.Ba4, keeping maximum pressure on Black\'s setup.' },
                { opponentMove: 'Nf6', theoryResponse: 'O-O', name: 'Berlin Defense (3...Nf6)', note: 'The formidable "Berlin Wall" famously used by Kramnik against Kasparov. White castles 4.O-O.' },
                { opponentMove: 'f5', theoryResponse: 'Nc3', name: 'Schliemann / Jaenisch Gambit (3...f5)', note: 'Sharp romantic counter-strike. White replies 4.Nc3 or 4.d3.' },
                { opponentMove: 'Bc5', theoryResponse: 'c3', name: 'Classical Defense (3...Bc5)', note: 'White prepares the central d4-break with 4.c3.' }
            ]
        }
    },

    {
        id: 'op_queens_gambit',
        category: 'openings',
        side: 'w',
        name: 'Queen\'s Gambit',
        icon: '♕',
        eco: 'D35',
        moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'cxd5', 'exd5', 'Bg5', 'Be7', 'e3', 'O-O', 'Bd3', 'c6', 'Qc2', 'Nbd7'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Sacrifice a flank pawn to dominate the center, then execute the minority attack on the queenside',
        tip: 'The Queen\'s Gambit is not a true gambit because White can always regain the c4 pawn. Use the Carlsbad structure (after cxd5 exd5) to launch the b4-b5 minority attack!',
        literature: {
            bookTitle: 'The Ideas Behind the Chess Openings & The Queen\'s Gambit',
            sources: 'Reuben Fine, Matthew Sadler, Alexander Alekhine',
            generalIdea: 'The Queen\'s Gambit is the quintessential d4 opening. White offers the wing c-pawn to deflect Black\'s central d5-pawn, aiming for complete central dominance. When Black declines with 2...e6 (QGD), White enters the profound Carlsbad pawn structure (after cxd5 exd5), which provides a clinic in positional chess.',
            pawnStructure: 'Carlsbad structure: White has pawns on a2, b2, d4, e3, f2, g2, h2; Black has a7, b7, c6, d5, f7, g7, h7. White\'s 2 queenside pawns (a2, b2) attack Black\'s 3 pawns (a7, b7, c6) via the famous Minority Attack (b4-b5).',
            keyPlans: '1. The Minority Attack: Advance b2-b4-b5 to exchange on c6, creating a permanent backward c-pawn on Black\'s semi-open c-file.\n2. Pin Black\'s kingside with Bg5, tying down the f6-knight.\n3. Position the queen and bishop on c2 and d3, creating a dangerous battery against h7.',
            criticalSquares: 'c6 (target of the minority attack), e4 (the central control square), d5 (Black\'s isolated or supported anchor), and h7 (the battery target).',
            commonPitfalls: 'Prematurely pushing e4 in the Carlsbad without sufficient preparation, allowing Black\'s counterplay with ...Ne4 or ...c5.',
            masterQuote: '"The Queen\'s Gambit is the triumph of positional logic over tactical chaos." — Reuben Fine'
        },
        moveExplanations: [
            '1. d4: White stakes claim to the center, controlling e5 and c5.',
            '1... d5: Black stakes an equal claim in the center.',
            '2. c4: The Queen\'s Gambit! White offers a wing pawn to deflect Black\'s central d5 pawn.',
            '2... e6: Queen\'s Gambit Declined (QGD). Black cements d5 at the cost of hemming in the c8-bishop.',
            '3. Nc3: White increases pressure on d5 and controls e4.',
            '3... Nf6: Black develops and reinforces the central bastion.',
            '4. cxd5: White enters the Exchange Variation, establishing the renowned Carlsbad structure.',
            '4... exd5: Black recaptures toward the center, opening the c8-bishop\'s diagonal.',
            '5. Bg5: White pins the f6 knight, undermining Black\'s control of e4 and d5.',
            '5... Be7: Black breaks the pin and prepares kingside castling.',
            '6. e3: Solidifies d4 and opens the light-square bishop\'s path.',
            '6... O-O: Black brings the king to safety.',
            '7. Bd3: The bishop assumes an aggressive post aiming at h7.',
            '7... c6: Black fortifies d5, setting up the classic Carlsbad defensive line.',
            '8. Qc2: White forms the potent queen-bishop battery targeting h7.',
            '8... Nbd7: Black develops flexibly, preparing ...Re8 and ...Nf8.'
        ],
        branches: {
            'd4 d5 c4': [
                { opponentMove: 'dxc4', theoryResponse: 'Nf3', name: 'Queen\'s Gambit Accepted (2...dxc4)', note: 'Black takes the pawn. White plays 3.Nf3 and 4.e3 to comfortably recapture with the bishop.' },
                { opponentMove: 'e6', theoryResponse: 'Nc3', name: 'Queen\'s Gambit Declined (2...e6)', note: 'The rock-solid classic. White continues 3.Nc3 to increase pressure on d5.' },
                { opponentMove: 'c6', theoryResponse: 'Nf3', name: 'Slav Defense (2...c6)', note: 'Black defends d5 without blocking the c8-bishop. White plays 3.Nf3 and 4.Nc3.' },
                { opponentMove: 'e5', theoryResponse: 'dxe5', name: 'Albin Countergambit (2...e5)', note: 'Sharp tactical trick! White accepts 3.dxe5 and plays accurately against the d4-pawn.' }
            ]
        }
    },

    {
        id: 'op_english',
        category: 'openings',
        side: 'w',
        name: 'English Opening',
        icon: '⚔️',
        eco: 'A29',
        moves: ['c4', 'e5', 'Nc3', 'Nf6', 'g3', 'd5', 'cxd5', 'Nxd5', 'Bg2', 'Nb6', 'Nf3', 'Nc6', 'O-O', 'Be7', 'd3', 'O-O'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Control d5 from the flank with c4 and the g2 fianchetto, playing a reversed Sicilian with an extra tempo',
        tip: 'The English Opening is a hypermodern masterpiece. By playing c4 and fianchettoing the king\'s bishop, you dominate the light squares without committing central pawns early.',
        literature: {
            bookTitle: 'Grandmaster Repertoire: The English Opening',
            sources: 'Mihail Marin, Howard Staunton, Garry Kasparov',
            generalIdea: 'Pioneered by English champion Howard Staunton in the 1840s, the English Opening (1.c4) is a flank opening that controls the central d5-square without pushing a central pawn. In the Four Knights line against 1...e5, White essentially plays a Sicilian Defense with colors reversed and an extra tempo! The g2 bishop exerts long-range pressure along the h1-a8 diagonal, while White maneuvers flexibly across both flanks.',
            pawnStructure: 'Asymmetric and highly flexible. White typically operates with pawns on c4 and d3, leaving the center fluid while preparing queenside expansions like b2-b4-b5.',
            keyPlans: '1. Fianchetto the bishop on g2 to dominate the long diagonal.\n2. Expand on the queenside with a3, Rb1, and b4.\n3. Pressure Black\'s d5-square and queenside knight on c6.',
            criticalSquares: 'd5 (White\'s primary focal point), c6 (target of White\'s bishop), and b4 (White\'s expansion territory).',
            commonPitfalls: 'Allowing Black to set up an unchallenged pawn chain with ...f5 and ...e4 before White has castled.',
            masterQuote: '"The English is the opening of the connoisseur: subtle, flexible, and venomous." — Mihail Marin'
        },
        moveExplanations: [
            '1. c4: The English Opening! Controls d5 from the flank and keeps transpositional options open.',
            '1... e5: The King\'s English. Black seizes space and challenges the center directly.',
            '2. Nc3: White bolsters control over d5 and e4.',
            '2... Nf6: Black develops naturally, contesting e4 and preparing ...d5.',
            '3. g3: White prepares to fianchetto the bishop on the great long diagonal.',
            '3... d5: Black strikes in the center, entering the Open Sicilian with colors reversed.',
            '4. cxd5: White trades a flank c-pawn for Black\'s central d-pawn.',
            '4... Nxd5: Black recaptures with the knight in the center.',
            '5. Bg2: The dragon bishop arrives! Directly menacing Black\'s d5 knight.',
            '5... Nb6: Black retreats the knight to safety on the queenside.',
            '6. Nf3: White develops the second knight, hitting Black\'s e5 pawn.',
            '6... Nc6: Black defends e5 and develops an active piece.',
            '7. O-O: White completes castling with harmonious piece coordination.',
            '7... Be7: Black prepares kingside castling.',
            '8. d3: Opens the c1-bishop and clamps down on the e4 square.'
        ],
        branches: {
            'c4': [
                { opponentMove: 'e5', theoryResponse: 'Nc3', name: 'King\'s English (1...e5)', note: 'Reversed Sicilian structure. White plays 2.Nc3 to control d5.' },
                { opponentMove: 'c5', theoryResponse: 'Nc3', name: 'Symmetrical English (1...c5)', note: 'Black mirrors White. A deep positional battle for central outposts.' },
                { opponentMove: 'Nf6', theoryResponse: 'Nc3', name: 'Anglo-Indian (1...Nf6)', note: 'Flexible response. White can transpose to Queen\'s Gambit or remain in English structures.' }
            ]
        }
    },

    {
        id: 'op_scotch',
        category: 'openings',
        side: 'w',
        name: 'Scotch Game',
        icon: '⚡',
        eco: 'C45',
        moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Nxd4', 'Nf6', 'Nxc6', 'bxc6', 'e5', 'Qe7', 'Qe2', 'Nd5', 'c4', 'Ba6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Blast open the center on move 3 to create dynamic piece activity and avoid Spanish theoretical labyrinths',
        tip: 'Revived by Garry Kasparov in World Championship matches! Push d4 immediately to open diagonals for your bishops and queen.',
        literature: {
            bookTitle: 'The Scotch Game: Dynamic Central Combat',
            sources: 'Garry Kasparov, Yelena Dembo & Richard Palliser',
            generalIdea: 'First played in a correspondence match between Edinburgh and London in 1824, the Scotch Game was famously revived by Garry Kasparov in his 1990 World Championship match against Anatoly Karpov. By playing 3.d4 immediately, White avoids the immense theoretical weight of the Ruy Lopez and Italian, forcing an open central game where piece activity and dynamic initiative reign supreme.',
            pawnStructure: 'Open center with asymmetric pawn distribution. After White\'s e4-e5 advance, Black gets doubled c-pawns (c6 and c7) while White controls space in the center.',
            keyPlans: '1. Establish space in the center with e4-e5, kicking Black\'s f6-knight.\n2. In the Mieses variation (4...Nf6 5.Nxc6 bxc6 6.e5), pin Black\'s knight and clamp down with c4.\n3. Utilize active piece lines for the bishops.',
            criticalSquares: 'd4 (the central explosion point), e5 (White\'s space wedge), and c6 (the site of Black\'s structural compromise).',
            commonPitfalls: 'Prematurely trading queens when White holds a space advantage; allowing Black\'s dark-squared bishop to dominate on c5 without challenge.',
            masterQuote: '"The Scotch Game gave me the psychological surprise and dynamic punch I needed to wrest the initiative." — Garry Kasparov'
        },
        moveExplanations: [
            '1. e4: Standard open game kickoff.',
            '1... e5: Black responds with central equality.',
            '2. Nf3: Attacks e5 with tempo.',
            '2... Nc6: Defends e5 naturally.',
            '3. d4: The Scotch! White blasts the center open immediately.',
            '3... exd4: Black captures White\'s central pawn.',
            '4. Nxd4: White recaptures, planting a dominant knight on d4.',
            '4... Nf6: Black counter-attacks White\'s e4 pawn (Mieses variation).',
            '5. Nxc6: White damages Black\'s pawn structure.',
            '5... bxc6: Black recaptures toward the center, creating doubled c-pawns.',
            '6. e5: White pushes forward, dislodging the f6-knight!',
            '6... Qe7: Black pins the e5 pawn to White\'s king.',
            '7. Qe2: White breaks the pin and maintains the space wedge.',
            '7... Nd5: Black\'s knight settles on d5.',
            '8. c4: White kicks the knight again, cementing central supremacy.'
        ],
        branches: {
            'e4 e5 Nf3 Nc6 d4 exd4 Nxd4': [
                { opponentMove: 'Nf6', theoryResponse: 'Nxc6', name: 'Mieses Variation (4...Nf6)', note: 'The sharpest line. White responds with 5.Nxc6, leading to dynamic imbalances.' },
                { opponentMove: 'Bc5', theoryResponse: 'Be3', name: 'Classical Line (4...Bc5)', note: 'Black develops and attacks d4. White solidly defends with 5.Be3.' },
                { opponentMove: 'Qh4', theoryResponse: 'Nc3', name: 'Steinitz Attack (4...Qh4)', note: 'Aggressive queen raid! White calmly defends with 5.Nc3, developing ahead of Black.' }
            ]
        }
    },

    {
        id: 'op_vienna',
        category: 'openings',
        side: 'w',
        name: 'Vienna Game & Gambit',
        icon: '🎯',
        eco: 'C29',
        moves: ['e4', 'e5', 'Nc3', 'Nf6', 'f4', 'd5', 'fxe5', 'Nxe4', 'Qf3', 'Nc6', 'Bb5', 'Nxc3', 'dxc3'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Reinforce e4 before launching the f4 thrust, creating a supercharged King\'s Gambit without the defensive risks',
        tip: 'In the Vienna Gambit (3.f4), meet Black\'s 3...d5 with 4.fxe5! When Black plays 4...Nxe4, White replies with 5.Qf3 or 5.Nf3 to seize the initiative.',
        literature: {
            bookTitle: 'The Vienna Game: Aggressive King Pawn Weapon',
            sources: 'Rudolf Spielmann, Carl Hamppe, Graham Burgess',
            generalIdea: 'Invented by Austrian master Carl Hamppe in the 19th century, the Vienna Game (2.Nc3) was designed as an "improved King\'s Gambit". By protecting e4 with the knight before pushing f4, White avoids the weaknesses of an immediate 2.f4 while preparing explosive kingside lines.',
            pawnStructure: 'White trades the f-pawn for e5, opening the f-file for the kingside rook while maintaining an e5 space wedge.',
            keyPlans: '1. Launch the f2-f4 thrust to shatter Black\'s e5 center.\n2. Utilize the half-open f-file for an overwhelming attack after castling.\n3. Pin Black\'s knights with Bb5.',
            criticalSquares: 'f4 (the gambit lever), e5 (the central wedge), and f7 (the focal point of the f-file battery).',
            commonPitfalls: 'Failing to anticipate Black\'s 3...d5 counter-punch in the center; falling behind in development.',
            masterQuote: '"The Vienna Game offers all the romantic fire of the King\'s Gambit with the steel backbone of modern positional theory." — Rudolf Spielmann'
        },
        moveExplanations: [
            '1. e4: Standard king\'s pawn opening.',
            '1... e5: Black matches in the center.',
            '2. Nc3: The Vienna! Guards e4 and delays Nf3 so f4 can be played.',
            '2... Nf6: Black develops the kingside knight and challenges e4.',
            '3. f4: The Vienna Gambit! White strikes at Black\'s e5 pawn.',
            '3... d5: The theoretical master reply: Black counter-strikes in the center!',
            '4. fxe5: White captures, gaining the e5 space wedge.',
            '4... Nxe4: Black centralizes the knight on e4.',
            '5. Qf3: Steinitz\'s recommendation, piling pressure on the e4 knight.',
            '5... Nc6: Black develops aggressively.',
            '6. Bb5: White pins the knight and prepares castling.'
        ],
        branches: {
            'e4 e5 Nc3': [
                { opponentMove: 'Nf6', theoryResponse: 'f4', name: 'Main Line Vienna (2...Nf6)', note: 'White plays 3.f4 to unleash the Vienna Gambit.' },
                { opponentMove: 'Nc6', theoryResponse: 'Bc4', name: 'Max Lange Setup (2...Nc6)', note: 'White plays 3.Bc4 or 3.f4, heading toward rich attacking games.' },
                { opponentMove: 'Bc5', theoryResponse: 'f4', name: 'Quiet Defense (2...Bc5)', note: 'White can play 3.f4 or 3.Nf3.' }
            ]
        }
    },

    {
        id: 'op_catalan',
        category: 'openings',
        side: 'w',
        name: 'Catalan Opening',
        icon: '💎',
        eco: 'E04',
        moves: ['d4', 'Nf6', 'c4', 'e6', 'g3', 'd5', 'Bg2', 'Be7', 'Nf3', 'O-O', 'O-O', 'dxc4', 'Qc2', 'a6', 'Qxc4', 'b5', 'Qc2', 'Bb7'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Combine Queen\'s Gambit space with a kingside fianchetto to exert permanent diagonal pressure on the queenside',
        tip: 'The g2-bishop is the soul of the Catalan. It exerts relentless laser pressure down the h1-a8 diagonal, tying down Black\'s queenside development.',
        literature: {
            bookTitle: 'Grandmaster Repertoire: 1.d4 Catalan Strategy',
            sources: 'Boris Avrukh, Vladimir Kramnik, Garry Kasparov',
            generalIdea: 'Introduced by Savielly Tartakower at the 1929 Barcelona tournament, the Catalan combines the central space of the Queen\'s Gambit with the hypermodern fianchetto of the Reti. World champions from Smyslov to Kramnik and Carlsen have made the Catalan their primary weapon due to its immense, relentless positional pressure.',
            pawnStructure: 'White retains a pawn on d4 and c4, while the g2-bishop exerts pressure along the long diagonal. Black often captures on c4 and tries to hold with ...b5.',
            keyPlans: '1. Recapture on c4 with the queen (Qc2/Qxc4) or knight (Nbd2-e5).\n2. Use the g2-bishop to dominate Black\'s queenside pieces on b7, c6, and a8.\n3. Push e4 at the right moment to seize the entire center.',
            criticalSquares: 'g2 (the sniper bishop outpost), d4 (the central anchor), and c4 (the contested gambit pawn).',
            commonPitfalls: 'Allowing Black to cement the c4 pawn with ...b5 and ...Bb7 before White can recover it.',
            masterQuote: '"The Catalan bishop on g2 is not a piece; it is an artillery battery that shoots all the way to a8." — Vladimir Kramnik'
        },
        moveExplanations: [
            '1. d4: White claims the center.',
            '1... Nf6: Black prevents e4.',
            '2. c4: The Queen\'s Gambit space advance.',
            '2... e6: Black prepares ...d5 while keeping options open.',
            '3. g3: The Catalan signature! White prepares to fianchetto the bishop on g2.',
            '3... d5: Black stakes their claim in the center.',
            '4. Bg2: The Catalan sniper takes position on the long diagonal.',
            '4... Be7: Black develops solidly and prepares to castle.',
            '5. Nf3: White develops the kingside knight.',
            '5... O-O: Black castles to safety.',
            '6. O-O: White completes castling.',
            '6... dxc4: Open Catalan! Black captures the pawn and challenges White to regain it.',
            '7. Qc2: White prepares to recapture on c4 with the queen.',
            '7... a6: Black prepares ...b5 to expand on the queenside.',
            '8. Qxc4: White restores material equality with active piece pressure.'
        ],
        branches: {
            'd4 Nf6 c4 e6 g3 d5 Bg2': [
                { opponentMove: 'dxc4', theoryResponse: 'Qc2', name: 'Open Catalan (4...dxc4)', note: 'Black captures on c4. White plays 5.Qc2 or 5.Nf3 to regain the pawn with superior piece activity.' },
                { opponentMove: 'Be7', theoryResponse: 'Nf3', name: 'Closed Catalan (4...Be7)', note: 'Solid classical setup. White continues 5.Nf3 and 6.O-O.' },
                { opponentMove: 'Bb4+', theoryResponse: 'Bd2', name: 'Bogo-Catalan Check', note: 'Black checks on b4. White blocks with 5.Bd2, offering a trade of bishops.' }
            ]
        }
    },

    {
        id: 'op_kings_gambit',
        category: 'openings',
        side: 'w',
        name: 'King\'s Gambit',
        icon: '👑',
        eco: 'C33',
        moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'h4', 'g4', 'Ne5', 'Nf6', 'd4', 'd6', 'Nd3'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Sacrifice the f-pawn to destroy Black\'s center and blast open the f-file for kingside checkmate',
        tip: 'The romantic weapon of Paul Morphy, Adolf Anderssen, and Boris Spassky! Meet 2...exf4 with 3.Nf3 to prevent ...Qh4+.',
        literature: {
            bookTitle: 'The King\'s Gambit: Romantic Heroism & Modern Science',
            sources: 'John Shaw (Quality Chess), Paul Morphy, David Bronstein',
            generalIdea: 'The most romantic opening in chess history. Dating back to Ruy López in 1561, White offers the f-pawn on move 2 to deflect Black\'s e5 pawn, seize the entire center with d4, and open the f-file for a direct assault on Black\'s f7 square.',
            pawnStructure: 'Black has an extra pawn on f4 (or g4), while White enjoys a massive central pawn superiority with pawns on e4 and d4.',
            keyPlans: '1. 3.Nf3 prevents the lethal 3...Qh4+ check.\n2. Attack the f7 square with Bc4 and the open f-file.\n3. Push d4 and regain the f4 pawn with Bxf4.',
            criticalSquares: 'f7 (the perennial target), f4 (the gambit prize), and e5 (the central dominating square).',
            commonPitfalls: 'Neglecting defense against ...Qh4+; pushing too fast and getting counter-gambited with 2...d5 (Falkbeer Countergambit).',
            masterQuote: '"In the King\'s Gambit, every move is a duel with destiny." — David Bronstein'
        },
        moveExplanations: [
            '1. e4: Standard open game opening.',
            '1... e5: Symmetrical center.',
            '2. f4: The King\'s Gambit! White offers the f-pawn to dismantle Black\'s center.',
            '2... exf4: King\'s Gambit Accepted (KGA). Black accepts the challenge.',
            '3. Nf3: Mandatory! Develops a piece and prevents ...Qh4+.',
            '3... g5: Classical defense. Black holds the f4 pawn.',
            '4. h4: White undermines Black\'s g5-f4 pawn chain.',
            '4... g4: Black pushes forward, attacking the knight.',
            '5. Ne5: Kieseritzky Gambit! The knight leaps to the glorious central e5 outpost.',
            '5... Nf6: Black develops and attacks e4.',
            '6. d4: White grabs the classical center!'
        ],
        branches: {
            'e4 e5 f4': [
                { opponentMove: 'exf4', theoryResponse: 'Nf3', name: 'King\'s Gambit Accepted (2...exf4)', note: 'Main line. White plays 3.Nf3 to prevent ...Qh4+.' },
                { opponentMove: 'd5', theoryResponse: 'exd5', name: 'Falkbeer Countergambit (2...d5)', note: 'Aggressive central counter! White responds 3.exd5.' },
                { opponentMove: 'Bc5', theoryResponse: 'Nf3', name: 'King\'s Gambit Declined (2...Bc5)', note: 'Solid classical decline. White continues 3.Nf3.' }
            ]
        }
    },

    {
        id: 'op_jobava',
        category: 'openings',
        side: 'w',
        name: 'Jobava London System',
        icon: '⚡',
        eco: 'D00',
        moves: ['d4', 'd5', 'Nc3', 'Nf6', 'Bf4', 'a6', 'e3', 'Bf5', 'f3', 'e6', 'g4', 'Bg6', 'h4', 'h6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'w',
        goal: 'Combine London bishop placement with rapid Nc3 development, threatening Nb5 forks on c7 and kingside pawn storms',
        tip: 'Created by Georgian Grandmaster Baadur Jobava. By playing 2.Nc3 instead of 2.Nf3, White creates immediate tactical threats against c7 with Nb5 while preparing a kingside pawn storm (f3, g4, h4).',
        literature: {
            bookTitle: 'The Iron English & The Jobava London System',
            sources: 'Simon Williams (GingerGM), Baadur Jobava',
            generalIdea: 'A cutting-edge modern development in Queen\'s Pawn openings pioneered by Georgian genius Baadur Jobava. Instead of the quiet c3-pyramid of the classical London, White develops 2.Nc3! and 3.Bf4, creating immediate dynamic threats (Nb5 targeting c7) followed by an aggressive kingside pawn avalanche with f3, g4, and h4.',
            pawnStructure: 'Fluid and aggressive. White often supports e4 with f3, launching a kingside expansion while Black defends the c7 square.',
            keyPlans: '1. Threaten Nb5 to exploit the weakness of c7.\n2. Push f3 followed by e4 to seize the entire center.\n3. Launch a kingside pawn avalanche with g4 and h4 to trap Black\'s bishop or blow open the h-file.',
            criticalSquares: 'c7 (the fork target), b5 (the jumping square for the knight), and e4 (the central goal).',
            commonPitfalls: 'Forgetting that c3 is occupied by the knight, so White cannot play c3 to bolster d4 if Black plays ...c5.',
            masterQuote: '"The Jobava London is for players who love the London\'s safety but crave the King\'s Gambit\'s savagery." — Simon Williams'
        },
        moveExplanations: [
            '1. d4: White occupies the center.',
            '1... d5: Black stakes an equal claim.',
            '2. Nc3: The Jobava signature! White develops the knight aggressively in front of the c-pawn.',
            '2... Nf6: Black develops naturally, preventing e4.',
            '3. Bf4: The London bishop takes its dominant post outside the pawn chain.',
            '3... a6: Essential prophylaxis! Black prevents the dangerous 4.Nb5 fork on c7.',
            '4. e3: White solidifies d4 and prepares to develop the light-squared bishop.',
            '4... Bf5: Black develops actively outside their pawn chain.',
            '5. f3: The aggressive trigger! White prepares 6.e4 or 6.g4.',
            '5... e6: Black solidifies their center.',
            '6. g4: White launches the kingside pawn avalanche!',
            '6... Bg6: Black\'s bishop retreats.',
            '7. h4: White threatens to trap the bishop with 8.h5!',
            '7... h6: Black creates a necessary breathing hole on h7.'
        ],
        branches: {
            'd4 d5 Nc3 Nf6 Bf4': [
                { opponentMove: 'a6', theoryResponse: 'e3', name: 'Prophylactic 3...a6', note: 'Black prevents Nb5. White calmly continues 4.e3 and prepares f3/g4.' },
                { opponentMove: 'c5', theoryResponse: 'e3', name: 'Counter-attack 3...c5', note: 'Black strikes at d4. White responds 4.e3 or 4.Nb5! with intense tactical play.' },
                { opponentMove: 'e6', theoryResponse: 'Nb5', name: 'Blunder Warning (3...e6?)', note: 'White plays 4.Nb5! targeting the undefended c7 square with a winning fork threat!' }
            ]
        }
    },

    // ─── BLACK DEFENSES (Play as Black ♚) ──────────────────────────────────────────

    {
        id: 'op_sicilian_najdorf',
        category: 'openings',
        side: 'b',
        name: 'Sicilian Defense (Najdorf Variation)',
        icon: '🗡️',
        eco: 'B90',
        moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6', 'Be3', 'e5', 'Nb3', 'Be6', 'f3', 'Be7', 'Qd2', 'O-O'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Control b5 with 5...a6, seize central space with ...e5, and unleash deadly counterplay on the semi-open c-file',
        tip: 'The favorite weapon of Garry Kasparov and Bobby Fischer! The Najdorf is the sharpest, most combative defense against 1.e4.',
        literature: {
            bookTitle: 'The Complete Najdorf: Modern Master Counterplay',
            sources: 'Bobby Fischer (My 60 Memorable Games), Garry Kasparov, John Nunn',
            generalIdea: 'Named after Polish-Argentine Grandmaster Miguel Najdorf, the Najdorf is widely celebrated as the crown jewel of chess openings. With 5...a6, Black takes total prophylactic control over the b5-square, denying it to White\'s knights and bishops while preparing queenside expansion (...b5) and central strikes (...e5 or ...d5). It leads to rich, double-edged battles where Black plays for a decisive win rather than a quiet draw.',
            pawnStructure: 'Asymmetric brilliance. Black exchanges a flank c-pawn for White\'s central d-pawn, granting Black a central 2-to-1 pawn majority (e- and d-pawns vs White\'s e-pawn) and an open c-file.',
            keyPlans: '1. Advance ...e5 to kick White\'s d4-knight and claim central space, accepting a backward d6 pawn in exchange for enormous piece dynamism.\n2. Expand on the queenside with ...b5 and utilize the half-open c-file.\n3. Position the light-squared bishop on e6 or b7 to control key central squares.',
            criticalSquares: 'd5 (the "hole" that White tries to occupy and Black fiercely defends), b5 (the square denied to White), and c4 (the outpost for Black\'s knight).',
            commonPitfalls: 'Rushing ...d5 before piece development is complete; underestimating White\'s English Attack pawn storm (f3, g4, h4).',
            masterQuote: '"I don\'t believe in psychology in chess. I believe in good moves. And in the Sicilian, the Najdorf is the best move." — Bobby Fischer'
        },
        moveExplanations: [
            '1. e4: White pushes king\'s pawn.',
            '1... c5: The Sicilian Defense! Black fights for the center from the flank, creating immediate structural asymmetry.',
            '2. Nf3: White develops and prepares d4.',
            '2... d6: Black controls e5 and prepares ...Nf6.',
            '3. d4: White blows open the center.',
            '3... cxd4: Black trades a flank pawn for White\'s central pawn — the core Sicilian trade!',
            '4. Nxd4: White recaptures with the knight.',
            '4... Nf6: Black develops with tempo, attacking the e4 pawn.',
            '5. Nc3: White defends e4.',
            '5... a6: The Najdorf! The greatest prophylactic move in chess, preventing Nb5 and Bb5+ while preparing ...b5 and ...e5.',
            '6. Be3: The English Attack setup.',
            '6... e5: Najdorf\'s signature strike! Black seizes the center and kicks the knight.',
            '7. Nb3: White retreats the knight to b3.',
            '7... Be6: Black develops the bishop, taking control of the crucial d5 square.',
            '8. f3: White shores up e4 and prepares a kingside storm with g4.',
            '8... Be7: Black calmly develops and prepares to castle.',
            '9. Qd2: White prepares queenside castling.',
            '9... O-O: Black castles into safety, ready for the sharp opposite-side castling battle!'
        ],
        branches: {
            'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6': [
                { opponentMove: 'Be3', theoryResponse: 'e5', name: 'English Attack (6.Be3)', note: 'Modern grandmaster choice. Black responds with the energetic 6...e5!' },
                { opponentMove: 'Bg5', theoryResponse: 'e6', name: 'Classical 6.Bg5', note: 'The historic sharpest line favored by Fischer and Tal. Black responds 6...e6, preparing ...Be7.' },
                { opponentMove: 'Be2', theoryResponse: 'e5', name: 'Quiet Karpovian 6.Be2', note: 'Positional line. Black plays 6...e5 7.Nb3 Be7 8.O-O O-O.' },
                { opponentMove: 'h3', theoryResponse: 'b5', name: 'Adams Attack (6.h3)', note: 'White prepares g4. Black counter-punches on the queenside with 6...b5!' }
            ]
        }
    },

    {
        id: 'op_sicilian_dragon',
        category: 'openings',
        side: 'b',
        name: 'Sicilian Defense (Dragon Variation)',
        icon: '🐉',
        eco: 'B76',
        moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'f3', 'O-O', 'Qd2', 'Nc6', 'Bc4', 'Bd7', 'O-O-O', 'Rc8'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Fianchetto the dark-squared bishop onto the long diagonal and unleash a ferocious queenside counter-attack',
        tip: 'Named because Black\'s pawn formation resembles the constellation Draco (the Dragon)! In the Yugoslav Attack, castle kingside and launch your rooks along the c-file.',
        literature: {
            bookTitle: 'The Sicilian Dragon: Complete Attacking Repertoire',
            sources: 'Gawain Jones, Mikhail Tal, Edward Lasker',
            generalIdea: 'Russian master Fyodor Dus-Chotimirsky coined the name in 1901, noting the uncanny resemblance between Black\'s pawn chain (d6-e7-f7-g6-h7) and the constellation Draco. The Dragon is one of the most fiercely debated openings in history. The dark-squared bishop on g7 breathes fire across the board like a mythical beast, dominating the h8-a1 diagonal and providing dynamic counterplay against White\'s king.',
            pawnStructure: 'Asymmetric Sicilian structure. Black fianchettoes on g6, accepting some kingside exposure in exchange for complete command of the long diagonal and the semi-open c-file.',
            keyPlans: '1. Unleash the Dragon bishop along the long diagonal against White\'s queenside.\n2. Double rooks on the semi-open c-file (Rc8, Re8).\n3. Sacrifice the exchange on c3 (Rxc3!) to shatter White\'s king protection and win the game.',
            criticalSquares: 'c3 (the prime sacrifice target for ...Rxc3!), d4 (White\'s centralized post), and h6/h7 (targets of White\'s mating storm).',
            commonPitfalls: 'Allowing White to trade your Dragon bishop via Bh6 without compensation; falling behind in the race of opposite-side attacks.',
            masterQuote: '"The Dragon bishop on g7 is worth more than a rook; it is the soul of Black\'s entire counter-attack." — Mikhail Tal'
        },
        moveExplanations: [
            '1. e4: Standard king\'s pawn start.',
            '1... c5: The Sicilian Defense.',
            '2. Nf3: Develops toward the center.',
            '2... d6: Controls e5 and frees the pieces.',
            '3. d4: Open Sicilian.',
            '3... cxd4: Black captures the center pawn.',
            '4. Nxd4: White recaptures.',
            '4... Nf6: Black develops and attacks e4.',
            '5. Nc3: White defends e4.',
            '5... g6: The Dragon is born! Black prepares to fianchetto the bishop on g7.',
            '6. Be3: White prepares the ferocious Yugoslav Attack.',
            '6... Bg7: The Dragon bishop takes its terrifying post on the long diagonal!',
            '7. f3: Essential Yugoslav move, shoring up e4 and preparing g4/h4.',
            '7... O-O: Black castles into safety.',
            '8. Qd2: White prepares queenside castling and Bh6 trades.',
            '8... Nc6: Black increases pressure on d4.',
            '9. Bc4: White targets f7 and slows Black\'s ...d5 break.',
            '9... Bd7: Black develops smoothly, connecting the rooks.',
            '10. O-O-O: White castles queenside — the battle lines are drawn!',
            '10... Rc8: Black activates the rook on the c-file, eyeing White\'s king!'
        ],
        branches: {
            'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6': [
                { opponentMove: 'Be3', theoryResponse: 'Bg7', name: 'Yugoslav Attack (6.Be3)', note: 'The main line battle. Black continues 6...Bg7 and 7...O-O.' },
                { opponentMove: 'Bc4', theoryResponse: 'Bg7', name: 'Classical 6.Bc4', note: 'White targets f7 early. Black plays 6...Bg7 and castles.' },
                { opponentMove: 'f4', theoryResponse: 'Bg7', name: 'Levenfish Attack (6.f4)', note: 'Aggressive pawn push. Black meets it with 6...Bg7 and 7...Nc6.' }
            ]
        }
    },

    {
        id: 'op_french_defense',
        category: 'openings',
        side: 'b',
        name: 'French Defense (Winawer Variation)',
        icon: '🛡️',
        eco: 'C15',
        moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4', 'e5', 'c5', 'a3', 'Bxc3+', 'bxc3', 'Ne7', 'Qg4', 'O-O', 'Bd3', 'Nbc6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Pin White\'s knight with ...Bb4, shatter White\'s queenside pawns with ...Bxc3+, and undermine the d4 pawn chain base',
        tip: 'Nimzowitsch\'s favorite weapon! Always attack a pawn chain at its base with ...c5 and ...f6.',
        literature: {
            bookTitle: 'Winning with the French Defense',
            sources: 'Wolfgang Uhlmann, Aaron Nimzowitsch (My System), Viktor Korchnoi',
            generalIdea: 'Named after an 1834 correspondence match between London and Paris, the French Defense creates profound structural imbalances. In the razor-sharp Winawer Variation (3...Bb4), Black pins White\'s c3 knight and willingly gives up the dark-squared bishop to inflict crippling doubled c-pawns on White. Black then methodically attacks White\'s central pawn chain at its base (d4 and c3).',
            pawnStructure: 'Fixed locked center: White has an e5-d4-c3 pawn wedge; Black counters with e6-d5-c5. White has doubled pawns on c2 and c3.',
            keyPlans: '1. Attack White\'s d4 base with ...c5, ...Nc6, and ...Qb6.\n2. Undermine White\'s e5 wedge with the ...f6 break.\n3. Defend the kingside against White\'s queen (Qg4) and bishop assault.',
            criticalSquares: 'c3 (the doubled pawn weakness), d4 (the contested base), and g7 (the target of White\'s Qg4).',
            commonPitfalls: 'Allowing White\'s dark-squared bishop (Bc1) to become a monster after trading your own dark-squared bishop on c3; leaving g7 undefended.',
            masterQuote: '"The French Defense is the embodiment of counter-attack: you give ground in the center to shatter the enemy\'s foundation." — Wolfgang Uhlmann'
        },
        moveExplanations: [
            '1. e4: Standard king\'s pawn start.',
            '1... e6: The French Defense! Black prepares to challenge the center with ...d5.',
            '2. d4: White occupies the full center.',
            '2... d5: Black strikes directly at White\'s e4 pawn.',
            '3. Nc3: White defends e4 and develops.',
            '3... Bb4: The Winawer! Black pins the knight, threatening ...dxe4.',
            '4. e5: White closes the center and gains space on the kingside.',
            '4... c5: The classic counter-strike! Black immediately attacks the base of White\'s pawn chain on d4.',
            '5. a3: White challenges the pinned bishop.',
            '5... Bxc3+: Black trades bishop for knight, permanently ruining White\'s queenside pawn structure!',
            '6. bxc3: White recaptures, saddled with doubled c-pawns.',
            '6... Ne7: Black develops the knight to e7, heading toward f5 or c6.',
            '7. Qg4: White aggressively attacks Black\'s undefended g7 pawn.',
            '7... O-O: Black castles into safety, trusting in their rock-solid defense.'
        ],
        branches: {
            'e4 e6 d4 d5': [
                { opponentMove: 'Nc3', theoryResponse: 'Bb4', name: 'Winawer / Classical (3.Nc3)', note: 'The main line battleground. Black pins with 3...Bb4 (Winawer) or plays 3...Nf6 (Classical).' },
                { opponentMove: 'e5', theoryResponse: 'c5', name: 'Advance Variation (3.e5)', note: 'White locks the center immediately. Black counter-attacks d4 with 3...c5 4.c3 Nc6.' },
                { opponentMove: 'Nd2', theoryResponse: 'c5', name: 'Tarrasch Variation (3.Nd2)', note: 'Quiet positional line. Black strikes the center with 3...c5 or 3...Nf6.' },
                { opponentMove: 'exd5', theoryResponse: 'exd5', name: 'Exchange Variation (3.exd5)', note: 'Symmetrical structure. Black plays 3...exd5 with harmonious development.' }
            ]
        }
    },

    {
        id: 'op_caro_kann',
        category: 'openings',
        side: 'b',
        name: 'Caro-Kann Defense',
        icon: '🏰',
        eco: 'B18',
        moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6', 'h4', 'h6', 'Nf3', 'Nd7', 'h5', 'Bh7', 'Bd3', 'Bxd3', 'Qxd3', 'e6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Prepare ...d5 with ...c6 so the light-squared bishop develops freely to f5 outside the pawn chain',
        tip: 'The solid fortress favored by Anatoly Karpov! Unlike the French Defense, your c8 bishop is never trapped behind your pawns.',
        literature: {
            bookTitle: 'The Caro-Kann: Solid & Sound Repertoire',
            sources: 'Anatoly Karpov, Lars Schandorff, Peter Leko',
            generalIdea: 'Named after Horatio Caro and Marcus Kann in 1886, the Caro-Kann is renowned as one of the most reliable, rock-solid defenses in all of chess theory. Unlike the French Defense where the c8-bishop is shut behind e6, Black plays 1...c6 to support 2...d5 while keeping the c8-h3 diagonal wide open. Black develops the bishop to f5 or g6 outside the pawn chain before locking the center with ...e6.',
            pawnStructure: 'Superior endgame pawn structure. In the Classical line, Black has an unbreachable pawn chain (e6-f7-g7-h6) and often enjoys a cleaner queenside majority in the late middlegame.',
            keyPlans: '1. Develop the light-squared bishop to f5 outside the pawn chain.\n2. Trade White\'s attacking dark-squared bishop via ...Bxd3 to neutralize kingside danger.\n3. Solidify with ...e6, ...Nbd7, ...Qc7, and castle queenside or kingside.',
            criticalSquares: 'e4 (the contested exchange square), f5/g6 (the ideal home for Black\'s light-squared bishop), and d5 (the central bedrock).',
            commonPitfalls: 'Forgetting to create an escape square (...h6) for the g6-bishop, allowing White to trap it with h4-h5.',
            masterQuote: '"The Caro-Kann is not passive; it is a coiled spring waiting for White to overextend." — Anatoly Karpov'
        },
        moveExplanations: [
            '1. e4: Standard king\'s pawn start.',
            '1... c6: The Caro-Kann! Prepares ...d5 with a solid pawn anchor.',
            '2. d4: White occupies the full center.',
            '2... d5: Black challenges e4 directly.',
            '3. Nc3: Classical Variation. White defends e4.',
            '3... dxe4: Black eliminates the e4 pawn, opening lines for pieces.',
            '4. Nxe4: White recaptures in the center.',
            '4... Bf5: The defining Caro-Kann move! The bishop develops outside the pawn chain with tempo.',
            '5. Ng3: White attacks the bishop and repositions the knight.',
            '5... Bg6: The bishop retreats to a dominant diagonal.',
            '6. h4: White threatens to trap the bishop with h5!',
            '6... h6: Essential breathing room! Black creates a safe retreat on h7.',
            '7. Nf3: White develops the kingside knight.',
            '7... Nd7: Prophylaxis! Prevents White from playing Ne5.',
            '8. h5: White grabs kingside space.',
            '8... Bh7: The bishop tucks safely into its cozy corner.',
            '9. Bd3: White offers a trade of bishops to relieve the diagonal.',
            '9... Bxd3: Black happily trades, removing White\'s most dangerous attacking piece.',
            '10. Qxd3: White recaptures with the queen.',
            '10... e6: Black solidifies their center with total positional harmony!'
        ],
        branches: {
            'e4 c6 d4 d5': [
                { opponentMove: 'Nc3', theoryResponse: 'dxe4', name: 'Classical Line (3.Nc3)', note: 'Black trades 3...dxe4 and develops the bishop to f5.' },
                { opponentMove: 'e5', theoryResponse: 'Bf5', name: 'Advance Variation (3.e5)', note: 'White closes the center. Black immediately develops 3...Bf5 before playing ...e6.' },
                { opponentMove: 'exd5', theoryResponse: 'cxd5', name: 'Panov-Botvinnik / Exchange', note: 'White plays 4.c4 (Panov Attack) or 4.Bd3. Black achieves comfortable piece play.' }
            ]
        }
    },

    {
        id: 'op_kings_indian',
        category: 'openings',
        side: 'b',
        name: 'King\'s Indian Defense',
        icon: '🔥',
        eco: 'E97',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5', 'O-O', 'Nc6', 'd5', 'Ne7', 'Ne1', 'Nd7', 'Nd3', 'f5'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Cede the classical center, close it with ...e5, and launch a furious kingside mating assault with ...f5-f4 and ...g5-g4',
        tip: 'The ultimate counter-attacking weapon! Played with lethal effect by Garry Kasparov and Bobby Fischer. When White attacks on the queenside, Black checkmates on the kingside.',
        literature: {
            bookTitle: 'Zurich 1953 & The King\'s Indian Warfare',
            sources: 'David Bronstein (Zurich 1953), Garry Kasparov, John Burgess',
            generalIdea: 'The King\'s Indian Defense (KID) is the purest expression of hypermodern chess philosophy. Instead of occupying the center on move 1, Black allows White to construct a massive classical center (d4, c4, e4), only to lock it with ...e5 and launch a legendary kingside pawn avalanche with ...f5, ...g5, and ...h5, aiming directly for the white king\'s throat.',
            pawnStructure: 'Classic closed center with interlocking pawn chains: White\'s pawns on c4-d5-e4 point toward the queenside; Black\'s pawns on c7-d6-e5 point menacingly toward the kingside.',
            keyPlans: '1. Close the center with ...e5, forcing White\'s d5.\n2. Reroute the knight via Ne7 and launch the ...f5 break.\n3. Advance the kingside pawn avalanche (...f4, ...g5, ...h5, ...g4) to deliver checkmate before White breaks through on the queenside.',
            criticalSquares: 'f5/f4 (the spearhead of Black\'s attack), g7 (the dragon bishop sanctuary), and c7/c8 (the targets of White\'s queenside break).',
            commonPitfalls: 'Hesitating on the kingside while White rolls through on the queenside with c5 and b4; allowing White to keep the center fluid.',
            masterQuote: '"In the King\'s Indian, you are playing for checkmate. A pawn lost on the queenside means nothing when you are mating on the kingside." — Garry Kasparov'
        },
        moveExplanations: [
            '1. d4: White claims the center.',
            '1... Nf6: Black prevents e4.',
            '2. c4: White expands space on the queenside.',
            '2... g6: The KID signature! Black prepares the kingside fianchetto.',
            '3. Nc3: White prepares e4.',
            '3... Bg7: The dark-squared bishop occupies the long diagonal.',
            '4. e4: White takes the full classical center.',
            '4... d6: Black controls e5 and prepares the central counter-strike.',
            '5. Nf3: White develops the kingside knight.',
            '5... O-O: Black castles into safety.',
            '6. Be2: The Classical Variation setup.',
            '6... e5: The critical counter-strike! Black challenges White\'s center.',
            '7. O-O: White completes castling.',
            '7... Nc6: The Mar del Plata variation! Black pressures d4.',
            '8. d5: White locks the center, pointing piece energy toward the queenside.',
            '8... Ne7: Black retreats the knight, clearing the f-pawn for the kingside attack!',
            '9. Ne1: White reroutes the knight to defend the kingside.',
            '9... Nd7: Black unblocks the f-pawn.',
            '10. Nd3: White supports c5.',
            '10... f5: The avalanche begins! Black attacks White\'s e4 base.'
        ],
        branches: {
            'd4 Nf6 c4 g6 Nc3 Bg7 e4 d6': [
                { opponentMove: 'Nf3', theoryResponse: 'O-O', name: 'Classical System (5.Nf3)', note: 'White plays classical development. Black castles and prepares ...e5.' },
                { opponentMove: 'f3', theoryResponse: 'O-O', name: 'Sämisch Variation (5.f3)', note: 'White bolsters e4 and prepares Be3/Qd2. Black counters with ...c5 or ...e5.' },
                { opponentMove: 'g3', theoryResponse: 'O-O', name: 'Fianchetto System (5.g3)', note: 'White fianchettoes on g2 to blunt Black\'s kingside attack.' }
            ]
        }
    },

    {
        id: 'op_nimzo_indian',
        category: 'openings',
        side: 'b',
        name: 'Nimzo-Indian Defense',
        icon: '🛡️',
        eco: 'E46',
        moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'e3', 'O-O', 'Bd3', 'd5', 'Nf3', 'c5', 'O-O', 'dxc4', 'Bxc4', 'Nbd7'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Pin White\'s c3 knight with ...Bb4, prevent e4, and inflict doubled pawns or control dark squares',
        tip: 'Created by Aaron Nimzowitsch! The most respected and bulletproof response to 1.d4 at master level. If White plays a3, gladly play ...Bxc3+ to saddle White with doubled c-pawns.',
        literature: {
            bookTitle: 'The Blockade & Modern Nimzo-Indian Strategy',
            sources: 'Aaron Nimzowitsch (My System), Mark Taimanov, Michael Adams',
            generalIdea: 'Formulated by hypermodern pioneer Aaron Nimzowitsch, the Nimzo-Indian (3...Bb4) is universally considered one of Black\'s most theoretically sound answers to 1.d4. By pinning White\'s c3-knight, Black completely stops White from playing 4.e4 without making a single central pawn push. If White forces the bishop trade with a3, Black accepts it happily, saddling White with doubled c-pawns and targeting them for the rest of the game.',
            pawnStructure: 'Flexible and strategically rich. Often results in White having doubled pawns on c3 and c4, while Black commands the light or dark squares with an iron grip.',
            keyPlans: '1. Pin the c3 knight to paralyze White\'s central expansion.\n2. Execute the ...c5 and ...d5 central counter-punches.\n3. Blockade White\'s doubled pawns and target the weak c4-pawn with ...b6, ...Ba6, and ...Nc6.',
            criticalSquares: 'e4 (the square Black forbids White from owning), c4 (the chronic doubled pawn target), and c3 (the pinned outpost).',
            commonPitfalls: 'Trading the dark-squared bishop prematurely without inflicting doubled pawns or gaining concrete central control.',
            masterQuote: '"The pin on c3 is not merely a tactic; it is a blockade of White\'s entire strategic ambition." — Aaron Nimzowitsch'
        },
        moveExplanations: [
            '1. d4: White occupies the center.',
            '1... Nf6: Black prevents e4.',
            '2. c4: Space on the queenside.',
            '2... e6: Black prepares ...d5 or ...Bb4.',
            '3. Nc3: White prepares e4.',
            '3... Bb4: The Nimzo-Indian! The knight is pinned, completely preventing e4.',
            '4. e3: The Rubinstein Variation — White solidly defends d4.',
            '4... O-O: Black castles into safety.',
            '5. Bd3: White develops the bishop aggressively.',
            '5... d5: Black stakes a direct claim in the center.',
            '6. Nf3: White develops the kingside knight.',
            '6... c5: Black attacks White\'s d4 center directly.',
            '7. O-O: White completes castling.',
            '7... dxc4: Black resolves central tension, gaining time.',
            '8. Bxc4: White recaptures with the bishop.',
            '8... Nbd7: Black develops flexibly, preparing ...b6 and ...Bb7.'
        ],
        branches: {
            'd4 Nf6 c4 e6 Nc3 Bb4': [
                { opponentMove: 'e3', theoryResponse: 'O-O', name: 'Rubinstein System (4.e3)', note: 'The most popular classical choice. Black castles and strikes with ...d5 or ...c5.' },
                { opponentMove: 'Qc2', theoryResponse: 'O-O', name: 'Capablanca Variation (4.Qc2)', note: 'White avoids doubled pawns. Black plays 4...O-O or 4...d5.' },
                { opponentMove: 'a3', theoryResponse: 'Bxc3+', name: 'Sämisch Variation (4.a3)', note: 'White forces the issue! Black happily plays 4...Bxc3+ 5.bxc3 c5, targeting the doubled c-pawns.' }
            ]
        }
    },

    {
        id: 'op_qgd',
        category: 'openings',
        side: 'b',
        name: 'Queen\'s Gambit Declined (Tartakower)',
        icon: '🛡️',
        eco: 'D58',
        moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'e3', 'O-O', 'Nf3', 'h6', 'Bh4', 'b6', 'cxd5', 'Nxd5', 'Bxe7', 'Qxe7', 'Nxd5', 'exd5'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Fianchetto the problem c8-bishop on b7, eliminate White\'s dark-squared bishop, and build an unbreakable central fortress',
        tip: 'Created by Savielly Tartakower and championed by Anatoly Karpov! With 7...h6 8.Bh4 b6, Black solves the age-old problem of the "bad" light-squared bishop by placing it on b7.',
        literature: {
            bookTitle: 'The Queen\'s Gambit Declined: Classical Mastery',
            sources: 'Matthew Sadler, Savielly Tartakower, Anatoly Karpov',
            generalIdea: 'The Queen\'s Gambit Declined (QGD) is the most classical, time-tested defense in the history of chess. Historically, Black\'s greatest strategic hurdle in the QGD is the passive c8-bishop hemmed in by the e6 pawn. In the Tartakower System (7...h6 8.Bh4 b6), Black brilliantly solves this dilemma by fianchettoing the bishop to b7, while orchestrating trades on d5 that dismantle White\'s attacking initiative.',
            pawnStructure: 'Solid, symmetric central pawn duo on d5 and b6. Black eliminates backward pawn weaknesses and secures open diagonals for both bishops.',
            keyPlans: '1. Neutralize White\'s dark-square pin with ...h6 and ...b6.\n2. Develop the c8-bishop onto b7 to command the long diagonal.\n3. Trade minor pieces with ...Nxd5 and ...Qxe7 to comfortably reach an equal or superior endgame.',
            criticalSquares: 'b7 (the ideal home for Black\'s liberated bishop), d5 (the central bedrock), and e4 (the contestable outpost).',
            commonPitfalls: 'Playing ...b6 prematurely without ...h6, allowing White to trade on f6 and disrupt Black\'s pawn structure.',
            masterQuote: '"The Tartakower Defense is the jewel of the Queen\'s Gambit: it turns Black\'s greatest weakness into their greatest strength." — Matthew Sadler'
        },
        moveExplanations: [
            '1. d4: White claims the center.',
            '1... d5: Black stakes an equal central claim.',
            '2. c4: White offers the gambit pawn.',
            '2... e6: Black declines solidly, defending d5.',
            '3. Nc3: White increases pressure on d5.',
            '3... Nf6: Black develops and reinforces d5.',
            '4. Bg5: White pins the knight.',
            '4... Be7: Black unpins and prepares castling.',
            '5. e3: White solidifies d4.',
            '5... O-O: Black castles into safety.',
            '6. Nf3: White develops the kingside knight.',
            '6... h6: Black challenges White\'s bishop with "the question".',
            '7. Bh4: White preserves the pin.',
            '7... b6: The Tartakower signature! Black prepares to fianchetto the bishop on b7.',
            '8. cxd5: White opens the central tension.',
            '8... Nxd5: Black recaptures with the knight, forcing piece trades.',
            '9. Bxe7: White trades the dark-squared bishops.',
            '9... Qxe7: Black recaptures with the queen, achieving harmonious equality!'
        ],
        branches: {
            'd4 d5 c4 e6 Nc3 Nf6': [
                { opponentMove: 'Bg5', theoryResponse: 'Be7', name: 'Main Line (4.Bg5)', note: 'Black unpins with 4...Be7 and prepares the Tartakower with ...h6 and ...b6.' },
                { opponentMove: 'Nf3', theoryResponse: 'Be7', name: 'Quiet 4.Nf3', note: 'White develops calmly. Black plays 4...Be7 and 5...O-O.' },
                { opponentMove: 'cxd5', theoryResponse: 'exd5', name: 'Exchange Variation (4.cxd5)', note: 'Carlsbad structure. Black recaptures 4...exd5 and develops ...c6 and ...Bd6.' }
            ]
        }
    },

    {
        id: 'op_slav',
        category: 'openings',
        side: 'b',
        name: 'Slav Defense',
        icon: '🛡️',
        eco: 'D15',
        moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Reinforce d5 with ...c6 without blocking the c8-bishop, then develop ...Bf5 outside the pawn chain',
        tip: 'The granite wall against 1.d4! Favored by World Champions from Euwe to Kramnik. After 4...dxc4, White must play 5.a4 to stop ...b5, allowing you to develop 5...Bf5 freely.',
        literature: {
            bookTitle: 'The Slav: Solid & Rock-Solid Defense',
            sources: 'Matthew Sadler, Vladimir Kramnik, Boris Avrukh',
            generalIdea: 'The Slav Defense (2...c6) is the premier answer to the Queen\'s Gambit. Unlike the Queen\'s Gambit Declined (2...e6) where the light-squared bishop is permanently locked behind the pawn chain, the Slav supports d5 while keeping the c8-h3 diagonal wide open. Once White plays Nc3, Black captures with ...dxc4, threatening to hold the pawn with ...b5. When White plays 5.a4 to prevent this, Black smoothly develops the bishop to f5 outside the pawn chain.',
            pawnStructure: 'Solid, harmonious, and durable. Black avoids structural weaknesses while controlling key central light squares.',
            keyPlans: '1. Support d5 with c6, avoiding early weaknesses.\n2. Develop the bishop to f5 outside the pawn chain.\n3. Pin White\'s knight with ...Bb4 and castle into complete safety.',
            criticalSquares: 'd5 (the central anchor), c4 (the contested gambit pawn), and f5 (the active bishop outpost).',
            commonPitfalls: 'Playing ...Bf5 prematurely before capturing on c4, which allows White to play cxd5 cxd5 Qb3! winning a pawn.',
            masterQuote: '"The Slav is the rock upon which many Queen\'s Gambit attacks have shattered." — Matthew Sadler'
        },
        moveExplanations: [
            '1. d4: White occupies the center.',
            '1... d5: Black claims equal central territory.',
            '2. c4: The Queen\'s Gambit.',
            '2... c6: The Slav Defense! Supports d5 without trapping the c8-bishop.',
            '3. Nf3: White develops and controls e5.',
            '3... Nf6: Black develops the kingside knight.',
            '4. Nc3: White piles pressure on d5.',
            '4... dxc4: The Main Line Slav! Black takes the pawn and threatens ...b5.',
            '5. a4: Mandatory for White! Stops Black from cementing the pawn with ...b5.',
            '5... Bf5: Black develops the bishop outside the pawn chain with tempo!',
            '6. e3: White prepares to recapture on c4.',
            '6... e6: Black solidifies their center.',
            '7. Bxc4: White recaptures the pawn.',
            '7... Bb4: Black pins the knight and prepares to castle.',
            '8. O-O: White castles.',
            '8... O-O: Black castles into bulletproof safety!'
        ],
        branches: {
            'd4 d5 c4 c6': [
                { opponentMove: 'Nf3', theoryResponse: 'Nf6', name: 'Main Line Slav (3.Nf3)', note: 'Black develops 3...Nf6 and prepares ...dxc4.' },
                { opponentMove: 'cxd5', theoryResponse: 'cxd5', name: 'Exchange Slav (3.cxd5)', note: 'Symmetrical structure. Black plays 3...cxd5 with easy piece equality.' },
                { opponentMove: 'e3', theoryResponse: 'Nf6', name: 'Quiet Slav (3.e3)', note: 'White plays passively. Black develops smoothly with 3...Nf6 and 4...Bf5.' }
            ]
        }
    },

    {
        id: 'op_scandinavian',
        category: 'openings',
        side: 'b',
        name: 'Scandinavian Defense',
        icon: '🌊',
        eco: 'B01',
        moves: ['e4', 'd5', 'exd5', 'Qxd5', 'Nc3', 'Qa5', 'd4', 'Nf6', 'Nf3', 'c6', 'Bc4', 'Bf5', 'Bd2', 'e6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Eliminate White\'s e4 pawn on move 1, park the queen safely on a5, and build an unbreachable Caro-Kann-like pawn wall',
        tip: 'Don\'t fear bringing the queen out on move 2! After 3.Nc3 Qa5, Black\'s queen is safe and pins White\'s pieces down the a5-e1 diagonal.',
        literature: {
            bookTitle: 'The Scandinavian Defense: Immediate Central Assault',
            sources: 'Christian Bauer, Bent Larsen, John Emms',
            generalIdea: 'The Scandinavian (1...d5) is the oldest recorded opening in chess, appearing in the 1475 Catalan poem Scachs d\'amor. Black strikes at White\'s central pawn on move 1, immediately eliminating White\'s central e-pawn. While White gains a tempo on Black\'s queen with 3.Nc3, Black tucks the queen safely onto a5 or d6, constructs a solid c6/e6 pawn wall, and develops the light-squared bishop freely to f5.',
            pawnStructure: 'Solid Caro-Kann-like pawn chain with pawns on c6 and e6, giving Black a secure central shield and open files for the rooks.',
            keyPlans: '1. Safely position the queen on a5, pinning White\'s pieces and controlling the 5th rank.\n2. Develop the light-squared bishop to f5 outside the pawn chain.\n3. Build the c6/e6 pawn fortress, develop ...Nbd7, and castle queenside or kingside.',
            criticalSquares: 'a5 (the safe haven for Black\'s queen), d5 (the open central file), and f5 (the active bishop outpost).',
            commonPitfalls: 'Wandering with the queen into pins or tactics; neglecting development while trying to save the queen.',
            masterQuote: '"In the Scandinavian, you force White to play on your terms from move one." — Bent Larsen'
        },
        moveExplanations: [
            '1. e4: Standard king\'s pawn start.',
            '1... d5: The Scandinavian! Black strikes at the central pawn immediately.',
            '2. exd5: White captures.',
            '2... Qxd5: Black recaptures with the queen, taking command of the center.',
            '3. Nc3: White attacks the queen with tempo.',
            '3... Qa5: The Mieses-Kotroc variation! The queen retreats to a5, pinning White\'s knight and controlling the 5th rank.',
            '4. d4: White occupies the center.',
            '4... Nf6: Black develops the kingside knight.',
            '5. Nf3: White develops.',
            '5... c6: Essential move! Provides an escape hatch for the queen on c7 or d8 and blunts White\'s knights.',
            '6. Bc4: White targets f7.',
            '6... Bf5: Black develops the bishop outside the pawn chain!',
            '7. Bd2: White breaks the pin and threatens discovered attacks.',
            '7... e6: Black solidifies their center with complete harmony.'
        ],
        branches: {
            'e4 d5': [
                { opponentMove: 'exd5', theoryResponse: 'Qxd5', name: 'Main Line (2.exd5 Qxd5)', note: 'Black recaptures with the queen and heads to a5 or d6.' },
                { opponentMove: 'exd5', theoryResponse: 'Nf6', name: 'Modern Scandinavian (2...Nf6)', note: 'The Portuguese / Marshall line. Black gambits the pawn for rapid piece development.' },
                { opponentMove: 'e5', theoryResponse: 'c5', name: 'Advance 2.e5', note: 'Passive move by White. Black replies 2...c5 or 2...Bf5 with easy equality.' }
            ]
        }
    },

    {
        id: 'op_grunfeld',
        category: 'openings',
        side: 'b',
        name: 'Grünfeld Defense',
        icon: '💥',
        eco: 'D85',
        moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'cxd5', 'Nxd5', 'e4', 'Nxc3', 'bxc3', 'Bg7', 'Nf3', 'c5', 'Rb1', 'O-O', 'Be2', 'Nc6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Lure White into building a giant pawn center with e4, then relentlessly blast it apart with ...Bg7 and ...c5',
        tip: 'Invented by Ernst Grünfeld and championed by Kasparov and Svidler! Black willingly cedes the center to attack it like a wrecking ball.',
        literature: {
            bookTitle: 'The Grünfeld Defense: Dynamic Master Strategy',
            sources: 'Peter Svidler, Garry Kasparov, Ernst Grünfeld',
            generalIdea: 'Introduced by Austrian master Ernst Grünfeld in 1922 to defeat Alexander Alekhine, the Grünfeld Defense (3...d5) is the ultimate hypermodern counter-attacking weapon against 1.d4. Black invites White to construct a massive classical center with cxd5, e4, and bxc3, only to mercilessly blast it apart with ...Bg7, ...c5, and ...Nc6. If White\'s center collapses, Black\'s active pieces overrun the board.',
            pawnStructure: 'Massive central asymmetry. White holds a giant pawn center on c3 and e4; Black has a queenside majority (a- and b-pawns) and pressure along the semi-open c-file and the long diagonal.',
            keyPlans: '1. Target the d4 base with ...c5 and ...Nc6.\n2. Maximize the power of the g7 bishop along the long diagonal.\n3. Create a dangerous queenside passed pawn in the endgame with ...b5 and ...a5.',
            criticalSquares: 'd4 (the central pillar that Black must destroy), c3 (the pinned pawn), and c5 (Black\'s dynamite lever).',
            commonPitfalls: 'Playing too passively and allowing White\'s center pawns to roll forward unimpeded; neglecting king safety against White\'s f4-f5 thrusts.',
            masterQuote: '"The Grünfeld is not an opening for the faint of heart. You give the opponent the center and bet your life you can blow it up." — Peter Svidler'
        },
        moveExplanations: [
            '1. d4: White occupies the center.',
            '1... Nf6: Black prevents e4.',
            '2. c4: White expands on the queenside.',
            '2... g6: Prepares the fianchetto.',
            '3. Nc3: White prepares e4.',
            '3... d5: The Grünfeld! Black strikes in the center immediately.',
            '4. cxd5: The Exchange Variation — White captures.',
            '4... Nxd5: Black recaptures in the center.',
            '5. e4: White seizes the full center and attacks the knight.',
            '5... Nxc3: Black trades on c3.',
            '6. bxc3: White recaptures, erecting a massive pawn center.',
            '6... Bg7: The Grünfeld sniper takes position on the long diagonal!',
            '7. Nf3: White develops and supports d4.',
            '7... c5: The dynamite fuse is lit! Black strikes at White\'s d4 base.',
            '8. Rb1: White moves the rook off the vulnerable diagonal.',
            '8... O-O: Black castles into safety.',
            '9. Be2: White develops the bishop.',
            '9... Nc6: Black piles three attackers onto White\'s d4 pawn!'
        ],
        branches: {
            'd4 Nf6 c4 g6 Nc3 d5': [
                { opponentMove: 'cxd5', theoryResponse: 'Nxd5', name: 'Exchange Variation (4.cxd5)', note: 'The main battlefield. White builds a big center, Black attacks it.' },
                { opponentMove: 'Nf3', theoryResponse: 'Bg7', name: 'Russian System (4.Nf3)', note: 'Positional approach. Black fianchettoes with 4...Bg7 and strikes with ...c5.' },
                { opponentMove: 'Bf4', theoryResponse: 'Bg7', name: 'Classical 4.Bf4', note: 'White develops actively. Black continues 4...Bg7 and 5...O-O.' }
            ]
        }
    },

    {
        id: 'op_petrov',
        category: 'openings',
        side: 'b',
        name: 'Petrov\'s Defense (Russian Game)',
        icon: '🛡️',
        eco: 'C42',
        moves: ['e4', 'e5', 'Nf3', 'Nf6', 'Nxe5', 'd6', 'Nf3', 'Nxe4', 'd4', 'd5', 'Bd3', 'Bd6', 'O-O', 'O-O', 'c4', 'c6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Counter-attack White\'s e4 pawn instead of defending e5, neutralizing White\'s first-move initiative',
        tip: 'The drawing weapon of World Championship matches! Fabiano Caruana and Vladimir Kramnik used the Petrov to completely neutralize 1.e4.',
        literature: {
            bookTitle: 'The Petrov: Bulletproof Russian Defense',
            sources: 'Fabiano Caruana, Vladimir Kramnik, Alexander Kotov',
            generalIdea: 'Named after Russian master Alexander Petrov in the 1830s, this defense takes an aggressive hyper-counter stance against 1.e4. Rather than defending the e5 pawn with 2...Nc6, Black counter-attacks White\'s e4 pawn with 2...Nf6. This forces symmetrical central exchanges that rapidly drain White\'s first-move initiative, leading to extraordinarily resilient positions.',
            pawnStructure: 'Symmetrical and solid. Pawns on d4 and d5 anchor both sides, leading to open e-files and clean piece play.',
            keyPlans: '1. Plant a knight on the formidable e4 outpost.\n2. Meet White\'s c4 push with ...c6, cementing the d5 pawn.\n3. Harmoniously develop ...Bd6, ...O-O, and activate the rooks along the e-file.',
            criticalSquares: 'e4 (Black\'s centralized knight outpost), d5 (the central anchor), and e5 (the open e-file focal point).',
            commonPitfalls: 'Greedily playing 3...Nxe4? on move 3 without 3...d6 first, allowing White to play 4.Qe2! winning material via discovered checks.',
            masterQuote: '"Against the Petrov, White feels like they are banging their head against a granite wall." — Fabiano Caruana'
        },
        moveExplanations: [
            '1. e4: Standard open game kickoff.',
            '1... e5: Symmetrical center.',
            '2. Nf3: White attacks e5.',
            '2... Nf6: The Petrov! Black counter-attacks White\'s e4 pawn instead of defending!',
            '3. Nxe5: White captures the e-pawn.',
            '3... d6: Essential accuracy! Black kicks the knight BEFORE capturing on e4.',
            '4. Nf3: White retreats the knight.',
            '4... Nxe4: Black safely recaptures, restoring material balance.',
            '5. d4: White claims central space.',
            '5... d5: Black stakes an equal claim in the center.',
            '6. Bd3: White develops and targets the e4 knight.',
            '6... Bd6: Black develops the bishop aggressively.',
            '7. O-O: White castles.',
            '7... O-O: Black castles into equal safety.',
            '8. c4: White challenges d5.',
            '8... c6: Black cements the d5 anchor!'
        ],
        branches: {
            'e4 e5 Nf3 Nf6': [
                { opponentMove: 'Nxe5', theoryResponse: 'd6', name: 'Classical 3.Nxe5', note: 'The main line. Remember: play 3...d6 FIRST, then 4...Nxe4!' },
                { opponentMove: 'd4', theoryResponse: 'Nxe4', name: 'Steinitz Attack (3.d4)', note: 'White strikes in the center. Black plays 3...Nxe4 4.Bd3 d5.' },
                { opponentMove: 'Nc3', theoryResponse: 'Bb4', name: 'Four Knights Transposition (3.Nc3)', note: 'Quiet response. Black plays 3...Bb4 or 3...Nc6.' }
            ]
        }
    },

    {
        id: 'op_dutch',
        category: 'openings',
        side: 'b',
        name: 'Dutch Defense (Leningrad Variation)',
        icon: '🪓',
        eco: 'A87',
        moves: ['d4', 'f5', 'g3', 'Nf6', 'Bg2', 'g6', 'Nf3', 'Bg7', 'O-O', 'O-O', 'c4', 'd6', 'Nc3', 'Qe8', 'd5', 'Na6'],
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        playAs: 'b',
        goal: 'Control the e4 square from move 1 with the f-pawn and combine it with a kingside fianchetto to launch a kingside counter-attack',
        tip: 'The fighting weapon of Mikhail Botvinnik and Simon Williams! The Leningrad combines the best of the Dutch with the flexibility of the King\'s Indian.',
        literature: {
            bookTitle: 'The Killer Dutch: Aggressive Asymmetry',
            sources: 'Simon Williams (GingerGM), Mikhail Botvinnik, Bent Larsen',
            generalIdea: 'First analyzed by Elias Stein in 1789, the Dutch Defense (1...f5) is Black\'s most aggressive asymmetric response to 1.d4. By advancing the f-pawn, Black clamps down on the e4 square from move 1. In the Leningrad Variation, Black combines this with a kingside fianchetto (...g6 and ...Bg7), creating a hybrid between the Dutch and King\'s Indian that offers ferocious counter-attacking chances.',
            pawnStructure: 'Asymmetric and razor-sharp. Black controls e4 and prepares the ...e5 break while maintaining a fluid queenside.',
            keyPlans: '1. Secure control of the e4 square.\n2. Prepare the central breakthrough with ...Qe8 and ...e5.\n3. Launch kingside piece play utilizing the semi-open f-file.',
            criticalSquares: 'e4 (the contested central prize), f5 (the anchor pawn), and e8 (the queen maneuvering post).',
            commonPitfalls: 'Weakening the e8-h5 diagonal before castling; underestimating White\'s Staunton Gambit (2.e4).',
            masterQuote: '"If you want an easy draw, don\'t play the Dutch. If you want a fight for the full point, the Dutch is your weapon." — Simon Williams'
        },
        moveExplanations: [
            '1. d4: White occupies the center.',
            '1... f5: The Dutch Defense! Black clamps down on e4 immediately.',
            '2. g3: White prepares to fianchetto to blunt Black\'s bishop.',
            '2... Nf6: Black develops the knight and controls e4.',
            '3. Bg2: White\'s bishop takes the long diagonal.',
            '3... g6: The Leningrad Variation! Black prepares a counter-fianchetto.',
            '4. Nf3: White develops.',
            '4... Bg7: The Leningrad bishop takes its powerful post.',
            '5. O-O: White castles.',
            '5... O-O: Black castles into safety.',
            '6. c4: White expands space on the queenside.',
            '6... d6: Black controls e5 and prepares the central push.',
            '7. Nc3: White increases central control.',
            '7... Qe8: The classic Leningrad queen maneuver! Prepares the ...e5 break.',
            '8. d5: White clamps down on e6.',
            '8... Na6: Black develops the knight toward c5!'
        ],
        branches: {
            'd4 f5': [
                { opponentMove: 'g3', theoryResponse: 'Nf6', name: 'Main Line Fianchetto (2.g3)', note: 'The standard master reply. Black continues 2...Nf6 and 3...g6.' },
                { opponentMove: 'e4', theoryResponse: 'fxe4', name: 'Staunton Gambit (2.e4)', note: 'Sharp pawn sacrifice by White. Black accepts 2...fxe4 3.Nc3 Nf6.' },
                { opponentMove: 'Bg5', theoryResponse: 'g6', name: 'Hopton Attack (2.Bg5)', note: 'White pins and challenges. Black responds with 2...g6 or 2...c6.' }
            ]
        }
    },

    // ─── MIDDLEGAME STRUCTURES ──────────────────────────────────────────────────

    {
        id: 'mid_isolated_pawn',
        category: 'middlegames',
        name: 'Attacking the Isolated Queen Pawn',
        icon: '🎯',
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
        return [...new Set(this.scenarios.map(s => s.category))];
    }

    getScenariosForCategory(category, sideFilter = 'all') {
        let list = this.scenarios.filter(s => s.category === category);
        if (category === 'openings' && sideFilter && sideFilter !== 'all') {
            list = list.filter(s => s.side === sideFilter);
        }
        return list;
    }

    getOpeningsBySide(side = 'all') {
        const openings = this.scenarios.filter(s => s.category === 'openings');
        if (side === 'all') return openings;
        return openings.filter(s => s.side === side);
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

if (typeof window !== 'undefined') {
    window.PRACTICE_SCENARIOS = PRACTICE_SCENARIOS;
    window.PracticeManager = PracticeManager;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRACTICE_SCENARIOS, PracticeManager };
}
