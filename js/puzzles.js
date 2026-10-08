// ============================================================
// Lichess Open Puzzle Database — Verified Official Collection (175 Puzzles)
// Standard Lichess Contract:
// - fen: Board position before opponent blunder
// - moves[0]: Opponent's blunder move (auto-played on puzzle load)
// - moves[1]: Solver's 1st tactical move
// - moves[2]: Opponent reply
// - moves[3]: Solver follow-up (if multi-move)
// ============================================================

const PUZZLE_DATABASE = [
    {
        "lichessId": "0030b",
        "id": "lichess_0030b",
        "fen": "6k1/5ppp/5nb1/pp6/6rP/5N1Q/Pq2r1P1/3R2RK b - - 4 32",
        "moves": [
            "g6e4",
            "d1d8",
            "f6e8",
            "d8e8"
        ],
        "rating": 538,
        "themes": [
            "backRankMate",
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "0042j",
        "id": "lichess_0042j",
        "fen": "3r2k1/4nppp/pq1p1b2/1p2P3/2r2P2/2P1NR2/PP1Q2BP/3R2K1 b - - 0 24",
        "moves": [
            "d6e5",
            "d2d8",
            "b6d8",
            "d1d8"
        ],
        "rating": 550,
        "themes": [
            "backRankMate",
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "001KR",
        "id": "lichess_001KR",
        "fen": "6Qk/p1p3pp/4N3/1p6/2q1r1n1/2B5/PP4PP/3R1R1K b - - 0 28",
        "moves": [
            "h8g8",
            "f1f8"
        ],
        "rating": 563,
        "themes": [
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "White to move — deliver checkmate in one!"
    },
    {
        "lichessId": "002vV",
        "id": "lichess_002vV",
        "fen": "8/6k1/2R4p/5p1P/5P1K/6P1/8/r7 w - - 2 58",
        "moves": [
            "c6b6",
            "a1h1"
        ],
        "rating": 576,
        "themes": [
            "endgame",
            "master",
            "mate",
            "mateIn1",
            "oneMove",
            "rookEndgame"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "002GQ",
        "id": "lichess_002GQ",
        "fen": "5rk1/5ppp/4p3/4N3/8/1Pn5/5PPP/5RK1 w - - 0 28",
        "moves": [
            "f1c1",
            "c3e2",
            "g1f1",
            "e2c1"
        ],
        "rating": 653,
        "themes": [
            "crushing",
            "endgame",
            "fork",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "000rZ",
        "id": "lichess_000rZ",
        "fen": "2kr1b1r/p1p2pp1/2pqb3/7p/3N2n1/2NPB3/PPP2PPP/R2Q1RK1 w - - 2 13",
        "moves": [
            "d4e6",
            "d6h2"
        ],
        "rating": 662,
        "themes": [
            "kingsideAttack",
            "mate",
            "mateIn1",
            "oneMove",
            "opening"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "001gi",
        "id": "lichess_001gi",
        "fen": "r6r/1pNk1ppp/2np4/b3p3/4P1b1/N1Q5/P4PPP/R3KB1R w KQ - 3 18",
        "moves": [
            "c7a8",
            "a5c3"
        ],
        "rating": 785,
        "themes": [
            "bodenMate",
            "hangingPiece",
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "001pC",
        "id": "lichess_001pC",
        "fen": "r4rk1/pp3ppp/3b4/2p1pPB1/7N/2PP3n/PP4PP/R2Q1RqK w - - 5 18",
        "moves": [
            "f1g1",
            "h3f2"
        ],
        "rating": 848,
        "themes": [
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove",
            "smotheredMate"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "002p5",
        "id": "lichess_002p5",
        "fen": "r1bqr1k1/pp1nbpp1/2p2n2/6P1/2BP4/P7/1PQNNPP1/R3K2R b KQ - 0 13",
        "moves": [
            "f6d5",
            "c2h7",
            "g8f8",
            "h7h8"
        ],
        "rating": 908,
        "themes": [
            "kingsideAttack",
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "002X3",
        "id": "lichess_002X3",
        "fen": "6k1/2q2p1p/4pPp1/4P3/p1pP1P2/RrP5/6QP/4B1K1 b - - 0 33",
        "moves": [
            "b3a3",
            "g2a8",
            "c7b8",
            "a8b8"
        ],
        "rating": 914,
        "themes": [
            "endgame",
            "mate",
            "mateIn2",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "002CP",
        "id": "lichess_002CP",
        "fen": "r5k1/pp4pp/4p1q1/4p3/3n4/P5P1/1PP2Q1P/2KR1R2 w - - 4 24",
        "moves": [
            "f2e3",
            "g6c2"
        ],
        "rating": 923,
        "themes": [
            "endgame",
            "mate",
            "mateIn1",
            "oneMove",
            "queensideAttack"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "002Mm",
        "id": "lichess_002Mm",
        "fen": "rn1qr1k1/ppp3pQ/3p1pP1/3Pp3/2P1P3/8/PP3PP1/R1B1K3 b Q - 2 16",
        "moves": [
            "g8f8",
            "h7h8",
            "f8e7",
            "h8g7"
        ],
        "rating": 927,
        "themes": [
            "deflection",
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "002Q2",
        "id": "lichess_002Q2",
        "fen": "7k/p4R1p/3p3r/2pN1n2/2PbBBb1/3P2P1/P3r3/5R1K w - - 1 28",
        "moves": [
            "f4h6",
            "f5g3"
        ],
        "rating": 956,
        "themes": [
            "cornerMate",
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "000o3",
        "id": "lichess_000o3",
        "fen": "8/2p1k3/6p1/1p1P1p2/1P3P2/3K2Pp/7P/8 b - - 1 43",
        "moves": [
            "e7d6",
            "d3d4",
            "g6g5",
            "f4g5"
        ],
        "rating": 959,
        "themes": [
            "crushing",
            "endgame",
            "pawnEndgame",
            "short",
            "zugzwang"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "003jb",
        "id": "lichess_003jb",
        "fen": "r3kb1r/p4ppp/b1p1p3/3q4/3Q4/4BN2/PPP2PPP/R3K2R b KQkq - 0 11",
        "moves": [
            "c6c5",
            "d4a4",
            "a6b5",
            "a4b5"
        ],
        "rating": 962,
        "themes": [
            "crushing",
            "fork",
            "master",
            "middlegame",
            "short"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "001wr",
        "id": "lichess_001wr",
        "fen": "r4rk1/p3ppbp/Pp1q1np1/3PpbB1/2B5/2N5/1PPQ1PPP/3RR1K1 w - - 4 18",
        "moves": [
            "f2f3",
            "d6c5",
            "g1h1",
            "c5c4"
        ],
        "rating": 989,
        "themes": [
            "advantage",
            "fork",
            "master",
            "masterVsMaster",
            "middlegame",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "003Jb",
        "id": "lichess_003Jb",
        "fen": "6k1/3bqr1p/2rpp1pR/p7/Pp1QP3/1B3P2/1PP3P1/2KR4 w - - 6 22",
        "moves": [
            "d4a7",
            "e7g5",
            "c1b1",
            "g5h6"
        ],
        "rating": 993,
        "themes": [
            "advantage",
            "fork",
            "master",
            "middlegame",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "003o0",
        "id": "lichess_003o0",
        "fen": "r1bqk2r/pp1nbppp/3p4/1B1p4/3P1B2/8/PPP2PPP/R2QK1NR w KQkq - 2 9",
        "moves": [
            "g1f3",
            "d8a5",
            "d1d2",
            "a5b5"
        ],
        "rating": 1001,
        "themes": [
            "advantage",
            "fork",
            "master",
            "opening",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "003jv",
        "id": "lichess_003jv",
        "fen": "1R6/1p2k2p/p2n2p1/4K3/8/6P1/P6P/8 w - - 10 37",
        "moves": [
            "b8h8",
            "d6f7",
            "e5e4",
            "f7h8"
        ],
        "rating": 1006,
        "themes": [
            "crushing",
            "endgame",
            "fork",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "003AX",
        "id": "lichess_003AX",
        "fen": "2r2rk1/5ppp/bq2p3/p1ppP1N1/Pb1P2P1/1P2P2P/2QN4/2R1K2R b K - 1 18",
        "moves": [
            "c5d4",
            "c2h7"
        ],
        "rating": 1014,
        "themes": [
            "kingsideAttack",
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "White to move — deliver checkmate in one!"
    },
    {
        "lichessId": "001om",
        "id": "lichess_001om",
        "fen": "5r1k/pp4pp/5p2/1BbQp1r1/6K1/7P/1PP3P1/3R3R w - - 2 26",
        "moves": [
            "g4h4",
            "c5f2",
            "g2g3",
            "f2g3"
        ],
        "rating": 1018,
        "themes": [
            "mate",
            "mateIn2",
            "middlegame",
            "morphysMate",
            "short"
        ],
        "description": "Black to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "001w5",
        "id": "lichess_001w5",
        "fen": "1rb2rk1/q5P1/4p2p/3p3p/3P1P2/2P5/2QK3P/3R2R1 b - - 0 29",
        "moves": [
            "f8f7",
            "c2h7",
            "g8h7",
            "g7g8q"
        ],
        "rating": 1034,
        "themes": [
            "advancedPawn",
            "attraction",
            "mate",
            "mateIn2",
            "middlegame",
            "promotion",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "003YF",
        "id": "lichess_003YF",
        "fen": "r4rk1/1pp2ppp/p2p4/2bPp3/2P1Pn1q/P1N2B2/1P3P2/R1BQK1R1 w Q - 1 15",
        "moves": [
            "c1f4",
            "h4f2"
        ],
        "rating": 1061,
        "themes": [
            "attackingF2F7",
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "003jH",
        "id": "lichess_003jH",
        "fen": "rn3rk1/p5pp/3N4/4np1q/5Q2/1P3K2/PB1P2P1/2R4R w - - 0 25",
        "moves": [
            "f3f2",
            "e5d3",
            "f2e3",
            "d3f4",
            "h1h5",
            "f4h5"
        ],
        "rating": 1089,
        "themes": [
            "crushing",
            "fork",
            "long",
            "middlegame"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "003IM",
        "id": "lichess_003IM",
        "fen": "8/5kp1/p3pb2/8/6Pp/1P4qP/P2RQ3/7K w - - 2 34",
        "moves": [
            "e2g2",
            "g3e1",
            "g2g1",
            "e1d2"
        ],
        "rating": 1096,
        "themes": [
            "crushing",
            "deflection",
            "endgame",
            "master",
            "short"
        ],
        "description": "Black to move — deflect the key defender!"
    },
    {
        "lichessId": "002bK",
        "id": "lichess_002bK",
        "fen": "8/7p/2b1k3/p2p1pPB/1n1P3P/N1p1P3/4K3/8 b - - 1 42",
        "moves": [
            "c6b5",
            "a3b5",
            "c3c2",
            "e2d2"
        ],
        "rating": 1100,
        "themes": [
            "advantage",
            "endgame",
            "hangingPiece",
            "short"
        ],
        "description": "White to move — punish the undefended piece!"
    },
    {
        "lichessId": "000rO",
        "id": "lichess_000rO",
        "fen": "3R4/8/K7/pB2b3/1p6/1P2k3/3p4/8 w - - 4 58",
        "moves": [
            "a6a5",
            "e5c7",
            "a5b4",
            "c7d8"
        ],
        "rating": 1110,
        "themes": [
            "crushing",
            "endgame",
            "fork",
            "master",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "002HE",
        "id": "lichess_002HE",
        "fen": "1qr2rk1/1p1p1ppp/pB2p1n1/7n/2P1P3/1Q2NP1P/PP2B1Pb/3R1RK1 w - - 1 20",
        "moves": [
            "g1f2",
            "b8g3"
        ],
        "rating": 1116,
        "themes": [
            "master",
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "001Wz",
        "id": "lichess_001Wz",
        "fen": "4r1k1/5ppp/r1p5/p1n1RP2/8/2P2N1P/2P3P1/3R2K1 b - - 0 21",
        "moves": [
            "e8e5",
            "d1d8",
            "e5e8",
            "d8e8"
        ],
        "rating": 1118,
        "themes": [
            "backRankMate",
            "endgame",
            "mate",
            "mateIn2",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "0039T",
        "id": "lichess_0039T",
        "fen": "1r5r/p3kp2/4p2p/4P3/3R1Pp1/6P1/P1P4P/4K2R w K - 1 25",
        "moves": [
            "d4a4",
            "b8b1",
            "e1f2",
            "b1h1",
            "a4a7",
            "e7f8"
        ],
        "rating": 1121,
        "themes": [
            "crushing",
            "defensiveMove",
            "endgame",
            "long",
            "rookEndgame",
            "skewer"
        ],
        "description": "Black to move — find the winning skewer!"
    },
    {
        "lichessId": "003r5",
        "id": "lichess_003r5",
        "fen": "r2qr1k1/ppp2ppp/4b3/3P4/1nP2Q2/2N2N1P/PP3KP1/R4R2 w - - 1 15",
        "moves": [
            "d5e6",
            "b4d3",
            "f2g1",
            "d3f4"
        ],
        "rating": 1130,
        "themes": [
            "crushing",
            "fork",
            "middlegame",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "001wb",
        "id": "lichess_001wb",
        "fen": "r3k2r/pb1p1ppp/1b4q1/1Q2P3/8/2NP1Pn1/PP4PP/R1B2R1K w kq - 1 17",
        "moves": [
            "h2g3",
            "g6h5"
        ],
        "rating": 1149,
        "themes": [
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "001wR",
        "id": "lichess_001wR",
        "fen": "6nr/pp3p1p/k1p5/8/1QN5/2P1P3/4KPqP/8 b - - 5 26",
        "moves": [
            "b7b5",
            "b4a5",
            "a6b7",
            "c4d6",
            "b7b8",
            "a5d8"
        ],
        "rating": 1152,
        "themes": [
            "endgame",
            "long",
            "mate",
            "mateIn3"
        ],
        "description": "White to move — calculate the mate in 3!"
    },
    {
        "lichessId": "003eP",
        "id": "lichess_003eP",
        "fen": "8/r1b1q2k/2p3p1/2Pp4/1P2p1n1/2B1P3/NQ6/2K4R b - - 1 36",
        "moves": [
            "h7g8",
            "h1h8",
            "g8f7",
            "h8h7",
            "f7e8",
            "h7e7"
        ],
        "rating": 1156,
        "themes": [
            "crushing",
            "exposedKing",
            "long",
            "middlegame",
            "skewer"
        ],
        "description": "White to move — find the winning skewer!"
    },
    {
        "lichessId": "000pA",
        "id": "lichess_000pA",
        "fen": "5rk1/5pp1/7p/3p4/1ppPn3/1K2PPP1/1P2N1P1/r4R1R w - - 0 24",
        "moves": [
            "b3b4",
            "f8b8"
        ],
        "rating": 1162,
        "themes": [
            "endgame",
            "mate",
            "mateIn1",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "004Lu",
        "id": "lichess_004Lu",
        "fen": "8/p1p4p/4Pk2/2PP1p1P/1r3r2/5B2/P3RK2/8 b - - 3 38",
        "moves": [
            "f6e7",
            "d5d6",
            "c7d6",
            "c5d6",
            "e7d6",
            "e6e7"
        ],
        "rating": 1201,
        "themes": [
            "advancedPawn",
            "advantage",
            "endgame",
            "exposedKing",
            "long",
            "master"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "004kB",
        "id": "lichess_004kB",
        "fen": "4rr1k/pQpn2pp/3p1q2/8/8/2P5/PP3PPP/RN3RK1 w - - 1 16",
        "moves": [
            "b7c7",
            "f6f2",
            "f1f2",
            "e8e1",
            "f2f1",
            "e1f1"
        ],
        "rating": 1209,
        "themes": [
            "kingsideAttack",
            "long",
            "mate",
            "mateIn3",
            "middlegame",
            "sacrifice"
        ],
        "description": "Black to move — calculate the mate in 3!"
    },
    {
        "lichessId": "002IE",
        "id": "lichess_002IE",
        "fen": "r3brk1/5pp1/p1nqpn1p/P2pN3/2pP4/2P1PN2/5PPP/RB1QK2R b KQ - 4 16",
        "moves": [
            "c6e5",
            "d4e5",
            "d6e7",
            "e5f6"
        ],
        "rating": 1229,
        "themes": [
            "advantage",
            "fork",
            "middlegame",
            "short"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "002Z9",
        "id": "lichess_002Z9",
        "fen": "4r1k1/1p2R1p1/p2p2Pp/P1pP4/5q2/1R3p2/1P1Q3P/5B1K b - - 0 34",
        "moves": [
            "f4d2",
            "e7e8"
        ],
        "rating": 1231,
        "themes": [
            "endgame",
            "hangingPiece",
            "master",
            "mate",
            "mateIn1",
            "oneMove"
        ],
        "description": "White to move — deliver checkmate in one!"
    },
    {
        "lichessId": "00KYU",
        "id": "lichess_00KYU",
        "fen": "3r4/p2n2kp/1p2Bpp1/2r2N2/4q3/6QP/P5P1/5R1K b - - 1 40",
        "moves": [
            "g7f8",
            "g3d6",
            "f8e8",
            "d6e7"
        ],
        "rating": 1262,
        "themes": [
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "0040n",
        "id": "lichess_0040n",
        "fen": "r7/p2k1pp1/p1p1pn2/3p4/3P4/P3PQp1/1PP2P1q/2K4R w - - 0 20",
        "moves": [
            "h1h2",
            "g3h2",
            "f3h3",
            "f6g4"
        ],
        "rating": 1268,
        "themes": [
            "advancedPawn",
            "advantage",
            "endgame",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "007OE",
        "id": "lichess_007OE",
        "fen": "8/pkp5/2p1p3/3p4/N2q4/1n4Q1/PPP3Pr/K2R4 w - - 2 29",
        "moves": [
            "a2b3",
            "d4d1",
            "a1a2",
            "h2h1",
            "a4c5",
            "b7b6"
        ],
        "rating": 1281,
        "themes": [
            "advantage",
            "endgame",
            "hangingPiece",
            "long",
            "quietMove"
        ],
        "description": "Black to move — punish the undefended piece!"
    },
    {
        "lichessId": "003nQ",
        "id": "lichess_003nQ",
        "fen": "6rk/pp6/2n5/3ppn1p/3p4/2P2P1q/PP3QNB/R4R1K w - - 2 29",
        "moves": [
            "f1g1",
            "f5g3",
            "f2g3",
            "g8g3"
        ],
        "rating": 1286,
        "themes": [
            "crushing",
            "kingsideAttack",
            "master",
            "middlegame",
            "pin",
            "short"
        ],
        "description": "Black to move — exploit the pin!"
    },
    {
        "lichessId": "004JD",
        "id": "lichess_004JD",
        "fen": "3r4/R7/2p5/p1P2p2/1p4k1/nP6/P2KNP2/8 w - - 3 41",
        "moves": [
            "d2e3",
            "a3c2"
        ],
        "rating": 1291,
        "themes": [
            "cornerMate",
            "endgame",
            "mate",
            "mateIn1",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "001xl",
        "id": "lichess_001xl",
        "fen": "8/4R1k1/p5pp/3B4/5q2/8/5P1P/6K1 b - - 5 40",
        "moves": [
            "g7f6",
            "e7f7",
            "f6e5",
            "f7f4"
        ],
        "rating": 1299,
        "themes": [
            "advantage",
            "endgame",
            "master",
            "masterVsMaster",
            "short",
            "skewer",
            "superGM"
        ],
        "description": "White to move — find the winning skewer!"
    },
    {
        "lichessId": "0048x",
        "id": "lichess_0048x",
        "fen": "6k1/7p/4p1p1/QP2Pp2/P1pq4/5bRK/7r/6R1 w - - 0 39",
        "moves": [
            "h3h2",
            "d4h4",
            "g3h3",
            "h4f2",
            "g1g2",
            "f2g2"
        ],
        "rating": 1299,
        "themes": [
            "endgame",
            "exposedKing",
            "long",
            "mate",
            "mateIn3"
        ],
        "description": "Black to move — calculate the mate in 3!"
    },
    {
        "lichessId": "00KO5",
        "id": "lichess_00KO5",
        "fen": "2r2rk1/3p1ppp/p3p3/1p2q3/6P1/3Q4/PP5P/1K2RR2 b - - 0 22",
        "moves": [
            "e5h2",
            "f1h1",
            "h2c2",
            "d3c2",
            "c8c2",
            "b1c2"
        ],
        "rating": 1323,
        "themes": [
            "advantage",
            "endgame",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "003mh",
        "id": "lichess_003mh",
        "fen": "r4k1r/1pp2p2/p2p3p/3N4/3P2q1/8/PPP5/1K2Q1NR b - - 1 23",
        "moves": [
            "a8e8",
            "e1e8",
            "f8e8",
            "d5f6",
            "e8e7",
            "f6g4"
        ],
        "rating": 1325,
        "themes": [
            "advantage",
            "attraction",
            "fork",
            "long",
            "middlegame",
            "sacrifice"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "004u0",
        "id": "lichess_004u0",
        "fen": "6k1/ppq3pp/2p1rp2/4r3/4p1Q1/P5RP/1P3PP1/3R2K1 b - - 3 34",
        "moves": [
            "e6e8",
            "d1d7",
            "c7d7",
            "g4d7"
        ],
        "rating": 1325,
        "themes": [
            "advantage",
            "endgame",
            "short"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "003S3",
        "id": "lichess_003S3",
        "fen": "r4k1r/pNqnppb1/6pn/2p3Np/7P/2P2Q2/PP3PP1/R1B1K2R b KQ - 2 15",
        "moves": [
            "a8b8",
            "g5e6",
            "f8g8",
            "e6c7"
        ],
        "rating": 1336,
        "themes": [
            "advantage",
            "middlegame",
            "pin",
            "short"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "000lC",
        "id": "lichess_000lC",
        "fen": "3r3r/pQNk1ppp/1qnb1n2/1B6/8/8/PPP3PP/3R1R1K w - - 5 19",
        "moves": [
            "d1d6",
            "d7d6",
            "b7b6",
            "a7b6"
        ],
        "rating": 1356,
        "themes": [
            "advantage",
            "hangingPiece",
            "middlegame",
            "short"
        ],
        "description": "Black to move — punish the undefended piece!"
    },
    {
        "lichessId": "00761",
        "id": "lichess_00761",
        "fen": "3r2k1/1b3pbR/p2P2P1/3p2N1/2p5/2P2N2/PP6/2K5 b - - 0 28",
        "moves": [
            "f7g6",
            "h7g7",
            "g8g7",
            "g5e6",
            "g7g8",
            "e6d8"
        ],
        "rating": 1357,
        "themes": [
            "attraction",
            "crushing",
            "endgame",
            "exposedKing",
            "fork",
            "long",
            "sacrifice"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "004mT",
        "id": "lichess_004mT",
        "fen": "5Q2/8/1b1kp1p1/5p2/3p4/5qPK/7P/8 b - - 1 51",
        "moves": [
            "d6c6",
            "f8a8",
            "c6d6",
            "a8f3"
        ],
        "rating": 1361,
        "themes": [
            "advantage",
            "endgame",
            "short",
            "skewer"
        ],
        "description": "White to move — find the winning skewer!"
    },
    {
        "lichessId": "000Zo",
        "id": "lichess_000Zo",
        "fen": "4r3/1k6/pp3r2/1b2P2p/3R1p2/P1R2P2/1P4PP/6K1 w - - 0 35",
        "moves": [
            "e5f6",
            "e8e1",
            "g1f2",
            "e1f1"
        ],
        "rating": 1363,
        "themes": [
            "endgame",
            "mate",
            "mateIn2",
            "operaMate",
            "short"
        ],
        "description": "Black to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "005wJ",
        "id": "lichess_005wJ",
        "fen": "r3kb1r/ppqn1ppp/4pn2/1Q2Nb2/3P4/8/PP2PPPP/RNB1KB1R w KQkq - 4 9",
        "moves": [
            "e5d7",
            "c7c1"
        ],
        "rating": 1364,
        "themes": [
            "hangingPiece",
            "mate",
            "mateIn1",
            "oneMove",
            "opening"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "0008Q",
        "id": "lichess_0008Q",
        "fen": "8/4R3/1p2P3/p4r2/P6p/1P3Pk1/4K3/8 w - - 1 64",
        "moves": [
            "e7f7",
            "f5e5",
            "e2f1",
            "e5e6"
        ],
        "rating": 1383,
        "themes": [
            "advantage",
            "endgame",
            "rookEndgame",
            "short"
        ],
        "description": "Black to move — convert the rook endgame!"
    },
    {
        "lichessId": "000hf",
        "id": "lichess_000hf",
        "fen": "r1bqk2r/pp1nbNp1/2p1p2p/8/2BP4/1PN3P1/P3QP1P/3R1RK1 b kq - 0 19",
        "moves": [
            "e8f7",
            "e2e6",
            "f7f8",
            "e6f7"
        ],
        "rating": 1391,
        "themes": [
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "004zI",
        "id": "lichess_004zI",
        "fen": "2q3k1/4br1p/6RQ/1p1n2p1/7P/1P4P1/1B2PP2/6K1 b - - 0 27",
        "moves": [
            "h7g6",
            "h6h8"
        ],
        "rating": 1420,
        "themes": [
            "endgame",
            "mate",
            "mateIn1",
            "oneMove"
        ],
        "description": "White to move — deliver checkmate in one!"
    },
    {
        "lichessId": "006wz",
        "id": "lichess_006wz",
        "fen": "2r5/4ppkp/5bp1/1p6/1P6/P3B3/2r2PPP/1R1R2K1 b - - 2 22",
        "moves": [
            "f6b2",
            "b1b2",
            "c2b2",
            "e3d4",
            "f7f6",
            "d4b2"
        ],
        "rating": 1426,
        "themes": [
            "attraction",
            "crushing",
            "endgame",
            "fork",
            "long",
            "sacrifice"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "00KHR",
        "id": "lichess_00KHR",
        "fen": "8/6pk/1Q1p2n1/4p3/2P3P1/P2PP2P/1B4K1/4q3 w - - 1 35",
        "moves": [
            "g2f3",
            "g6h4",
            "f3e4",
            "e1h1"
        ],
        "rating": 1426,
        "themes": [
            "endgame",
            "mate",
            "mateIn2",
            "short"
        ],
        "description": "Black to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "00KAq",
        "id": "lichess_00KAq",
        "fen": "5rr1/3pk1q1/p2Rp3/1pP4p/1P3p2/2P2QP1/1P3P1P/5RK1 w - - 1 26",
        "moves": [
            "d6d4",
            "f4g3",
            "d4d7",
            "e7d7",
            "f3b7",
            "d7e8"
        ],
        "rating": 1429,
        "themes": [
            "advantage",
            "endgame",
            "long"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "005do",
        "id": "lichess_005do",
        "fen": "7r/pp1k4/4p1b1/3pP1Np/3P1P1K/8/P7/2R5 b - - 7 42",
        "moves": [
            "h8f8",
            "c1c7",
            "d7c7",
            "g5e6",
            "c7b6",
            "e6f8"
        ],
        "rating": 1433,
        "themes": [
            "attraction",
            "crushing",
            "deflection",
            "endgame",
            "fork",
            "long",
            "sacrifice"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "005Bm",
        "id": "lichess_005Bm",
        "fen": "4rk2/p1q5/1p3Q1b/8/1p5N/2P1p3/P3P3/2K5 b - - 0 43",
        "moves": [
            "c7f7",
            "h4g6",
            "f8g8",
            "f6h8"
        ],
        "rating": 1434,
        "themes": [
            "endgame",
            "mate",
            "mateIn2",
            "pin",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "001m3",
        "id": "lichess_001m3",
        "fen": "7r/6k1/2b1pp2/8/P1N3p1/5nP1/4RP2/Q4K2 w - - 2 38",
        "moves": [
            "e2e6",
            "h8h1",
            "f1e2",
            "h1a1"
        ],
        "rating": 1455,
        "themes": [
            "advantage",
            "endgame",
            "short",
            "skewer"
        ],
        "description": "Black to move — find the winning skewer!"
    },
    {
        "lichessId": "0068B",
        "id": "lichess_0068B",
        "fen": "r1q3k1/4bppp/pp2pn2/4B3/8/2N2Q2/PPPR1PPP/6K1 b - - 0 18",
        "moves": [
            "f6d7",
            "d2d7",
            "c8d7",
            "f3a8"
        ],
        "rating": 1459,
        "themes": [
            "crushing",
            "deflection",
            "middlegame",
            "short"
        ],
        "description": "White to move — deflect the key defender!"
    },
    {
        "lichessId": "00KSB",
        "id": "lichess_00KSB",
        "fen": "r7/4kpRp/2p2p1P/p1P1n3/Pp6/1B6/5PP1/6K1 b - - 2 35",
        "moves": [
            "a8h8",
            "f2f4",
            "e5d7",
            "g7f7"
        ],
        "rating": 1462,
        "themes": [
            "crushing",
            "endgame",
            "short"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "002VP",
        "id": "lichess_002VP",
        "fen": "8/6p1/2B1bn2/6k1/3B4/6K1/4P3/8 b - - 4 44",
        "moves": [
            "e6d5",
            "d4f6",
            "g5f5",
            "c6d5"
        ],
        "rating": 1466,
        "themes": [
            "crushing",
            "endgame",
            "short"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "003UW",
        "id": "lichess_003UW",
        "fen": "8/6pk/7p/2p5/2qp4/5PP1/P3QK1P/8 b - - 1 40",
        "moves": [
            "c4d5",
            "e2e4",
            "d5e4",
            "f3e4"
        ],
        "rating": 1473,
        "themes": [
            "advantage",
            "endgame",
            "queenEndgame",
            "short"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "000Sa",
        "id": "lichess_000Sa",
        "fen": "2Q2bk1/5p1p/p5p1/2p3P1/2r1B3/7P/qPQ2P2/2K4R b - - 0 32",
        "moves": [
            "c4c2",
            "e4c2",
            "a2a1",
            "c2b1"
        ],
        "rating": 1476,
        "themes": [
            "advantage",
            "endgame",
            "short"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "00Kbj",
        "id": "lichess_00Kbj",
        "fen": "8/8/6p1/PR3p2/1P3k2/7P/r5P1/7K w - - 1 39",
        "moves": [
            "h3h4",
            "f4g3",
            "b5d5",
            "a2a1",
            "d5d1",
            "a1d1"
        ],
        "rating": 1479,
        "themes": [
            "endgame",
            "long",
            "mate",
            "mateIn3",
            "rookEndgame"
        ],
        "description": "Black to move — calculate the mate in 3!"
    },
    {
        "lichessId": "003Tx",
        "id": "lichess_003Tx",
        "fen": "2r5/pR5p/5p1k/4p3/4r3/B4nPP/PP3P2/1K2R3 w - - 0 27",
        "moves": [
            "e1e4",
            "f3d2",
            "b1a1",
            "c8c1"
        ],
        "rating": 1511,
        "themes": [
            "backRankMate",
            "endgame",
            "fork",
            "mate",
            "mateIn2",
            "short"
        ],
        "description": "Black to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "001cr",
        "id": "lichess_001cr",
        "fen": "8/3B2pp/p5k1/2p3P1/1p1p1K2/8/1P6/8 b - - 0 38",
        "moves": [
            "c5c4",
            "d7e8"
        ],
        "rating": 1517,
        "themes": [
            "bishopEndgame",
            "endgame",
            "mate",
            "mateIn1",
            "oneMove"
        ],
        "description": "White to move — deliver checkmate in one!"
    },
    {
        "lichessId": "00LH7",
        "id": "lichess_00LH7",
        "fen": "6k1/6Bp/6pP/3q1p2/p2PnQ2/2r5/P5PK/4R3 b - - 1 39",
        "moves": [
            "d5d6",
            "e1e4",
            "d6f4",
            "e4f4"
        ],
        "rating": 1526,
        "themes": [
            "crushing",
            "endgame",
            "short"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "0000D",
        "id": "lichess_0000D",
        "fen": "5rk1/1p3ppp/pq3b2/8/8/1P1Q1N2/P4PPP/3R2K1 w - - 2 27",
        "moves": [
            "d3d6",
            "f8d8",
            "d6d8",
            "f6d8"
        ],
        "rating": 1529,
        "themes": [
            "advantage",
            "endgame",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "000Pw",
        "id": "lichess_000Pw",
        "fen": "6k1/5p1p/4p3/4q3/3nN3/2Q3P1/PP3P1P/6K1 w - - 2 37",
        "moves": [
            "e4d2",
            "d4e2",
            "g1f1",
            "e2c3"
        ],
        "rating": 1530,
        "themes": [
            "crushing",
            "endgame",
            "fork",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "0000H",
        "id": "lichess_0000H",
        "fen": "r4rk1/pp3ppp/8/2bqp2b/3N4/P2Bn2P/1PPN1P2/R1BQ1RK1 w - - 1 15",
        "moves": [
            "d1h5",
            "d5g2"
        ],
        "rating": 1554,
        "themes": [
            "mate",
            "mateIn1",
            "middlegame",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "002Tf",
        "id": "lichess_002Tf",
        "fen": "r3kbnr/ppp1qppp/2n5/3pP3/5B2/4PQ2/PPP2PPP/RN2KB1R w KQkq - 1 7",
        "moves": [
            "f1b5",
            "e7b4",
            "b1c3",
            "b4b2"
        ],
        "rating": 1561,
        "themes": [
            "advantage",
            "fork",
            "opening",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "002Uy",
        "id": "lichess_002Uy",
        "fen": "8/8/1p6/k7/P1R5/1K5r/8/8 w - - 26 64",
        "moves": [
            "c4c3",
            "h3c3",
            "b3c3",
            "a5a4",
            "c3b2",
            "a4b4"
        ],
        "rating": 1565,
        "themes": [
            "crushing",
            "defensiveMove",
            "endgame",
            "long",
            "rookEndgame"
        ],
        "description": "Black to move — convert the rook endgame!"
    },
    {
        "lichessId": "000Vc",
        "id": "lichess_000Vc",
        "fen": "8/8/4k1p1/2KpP2p/5PP1/8/8/8 w - - 0 53",
        "moves": [
            "g4h5",
            "g6h5",
            "f4f5",
            "e6e5",
            "f5f6",
            "e5f6"
        ],
        "rating": 1569,
        "themes": [
            "crushing",
            "endgame",
            "long",
            "pawnEndgame"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "002KJ",
        "id": "lichess_002KJ",
        "fen": "r3kb1r/ppq2ppp/4pn2/2Ppn3/1P4bP/2P2N2/P3BPP1/RNBQ1RK1 b kq - 2 10",
        "moves": [
            "f8e7",
            "f3e5",
            "c7e5",
            "e2g4"
        ],
        "rating": 1569,
        "themes": [
            "crushing",
            "discoveredAttack",
            "middlegame",
            "short"
        ],
        "description": "White to move — unleash a discovered attack!"
    },
    {
        "lichessId": "006E1",
        "id": "lichess_006E1",
        "fen": "5rk1/R4pp1/1p5p/3Q4/1PPp2q1/3P2P1/5P2/4nK2 w - - 0 34",
        "moves": [
            "f1e1",
            "f8e8",
            "e1f1",
            "g4h3",
            "d5g2",
            "e8e1",
            "f1e1",
            "h3g2"
        ],
        "rating": 1572,
        "themes": [
            "crushing",
            "deflection",
            "endgame",
            "veryLong"
        ],
        "description": "Black to move — deflect the key defender!"
    },
    {
        "lichessId": "006pe",
        "id": "lichess_006pe",
        "fen": "r4r2/2q1NN2/4bQpk/2n4p/pp5P/8/1PP2PP1/2KR3R b - - 0 28",
        "moves": [
            "e6f7",
            "e7f5",
            "h6h7",
            "f6g7"
        ],
        "rating": 1588,
        "themes": [
            "master",
            "mate",
            "mateIn2",
            "middlegame",
            "pin",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "004d8",
        "id": "lichess_004d8",
        "fen": "8/4kr2/R2p4/1p1Pp1p1/5p2/3K1P2/PPP5/8 b - - 0 39",
        "moves": [
            "g5g4",
            "a6a7",
            "e7f6",
            "a7f7",
            "f6f7",
            "f3g4"
        ],
        "rating": 1608,
        "themes": [
            "crushing",
            "endgame",
            "long",
            "rookEndgame"
        ],
        "description": "White to move — convert the rook endgame!"
    },
    {
        "lichessId": "002Hv",
        "id": "lichess_002Hv",
        "fen": "8/8/8/3N2p1/5b2/3p3P/5kP1/3K4 w - - 16 56",
        "moves": [
            "d5f4",
            "g5f4",
            "h3h4",
            "f2g2",
            "h4h5",
            "f4f3",
            "d1d2",
            "f3f2"
        ],
        "rating": 1621,
        "themes": [
            "advancedPawn",
            "crushing",
            "endgame",
            "veryLong"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "0048r",
        "id": "lichess_0048r",
        "fen": "1r3k2/5PbQ/p2p4/q2Pp1P1/8/3R4/2P1K3/8 b - - 0 32",
        "moves": [
            "a5b5",
            "h7g8",
            "f8e7",
            "g8g7"
        ],
        "rating": 1630,
        "themes": [
            "crushing",
            "deflection",
            "endgame",
            "short"
        ],
        "description": "White to move — deflect the key defender!"
    },
    {
        "lichessId": "00JzT",
        "id": "lichess_00JzT",
        "fen": "8/7p/6pK/5p2/4p3/1k4P1/5P1P/8 w - - 2 44",
        "moves": [
            "h6h7",
            "g6g5",
            "g3g4",
            "f5f4"
        ],
        "rating": 1638,
        "themes": [
            "crushing",
            "defensiveMove",
            "endgame",
            "pawnEndgame",
            "quietMove",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "0017R",
        "id": "lichess_0017R",
        "fen": "r2qk2r/pp2ppbp/1n1p2p1/3Pn3/2P5/2NBBP1P/PP3P2/R2QK2R b KQkq - 0 12",
        "moves": [
            "e5c4",
            "d3c4",
            "b6c4",
            "d1a4",
            "d8d7",
            "a4c4"
        ],
        "rating": 1655,
        "themes": [
            "advantage",
            "fork",
            "long",
            "middlegame"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "007ku",
        "id": "lichess_007ku",
        "fen": "r1bq3Q/1np2kp1/p5B1/1p1Pp3/1Pn2BP1/2b2P2/P3K3/R4N2 b - - 5 35",
        "moves": [
            "f7g6",
            "h8h5",
            "g6f6",
            "f4g5"
        ],
        "rating": 1663,
        "themes": [
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "002Ua",
        "id": "lichess_002Ua",
        "fen": "r4rk1/pp3ppp/3p1q2/P1P1p3/2B5/2B2n2/2P2P1P/R2Q1RK1 w - - 0 16",
        "moves": [
            "g1h1",
            "f6f4",
            "d1f3",
            "f4f3"
        ],
        "rating": 1666,
        "themes": [
            "crushing",
            "kingsideAttack",
            "middlegame",
            "short"
        ],
        "description": "Black to move — break through on the kingside!"
    },
    {
        "lichessId": "00Kia",
        "id": "lichess_00Kia",
        "fen": "5r1k/4n1pp/1p6/pP5Q/P2pB2K/6P1/2P4P/4q3 b - - 4 37",
        "moves": [
            "g7g6",
            "h5e5",
            "h8g8",
            "e4d5",
            "e7d5",
            "e5e1"
        ],
        "rating": 1679,
        "themes": [
            "advantage",
            "discoveredAttack",
            "endgame",
            "fork",
            "long"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "001XA",
        "id": "lichess_001XA",
        "fen": "1qr2rk1/pb2bppp/8/8/2p1N3/P1Bn2P1/2Q2PBP/1R3RK1 b - - 3 23",
        "moves": [
            "b8c7",
            "b1b7",
            "c7b7",
            "e4f6",
            "e7f6",
            "g2b7"
        ],
        "rating": 1687,
        "themes": [
            "crushing",
            "discoveredAttack",
            "long",
            "master",
            "middlegame",
            "sacrifice"
        ],
        "description": "White to move — unleash a discovered attack!"
    },
    {
        "lichessId": "00734",
        "id": "lichess_00734",
        "fen": "rn3bk1/2rqp2p/2p3p1/3p1p2/3P1P1B/pP1BP3/P1Q2PRP/1KR5 b - - 0 26",
        "moves": [
            "b8a6",
            "d3f5",
            "e7e6",
            "f5g6"
        ],
        "rating": 1692,
        "themes": [
            "crushing",
            "middlegame",
            "pin",
            "short"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "003IX",
        "id": "lichess_003IX",
        "fen": "8/3pk3/R7/1R2Pp1p/2PPnKr1/8/8/8 w - - 4 43",
        "moves": [
            "f4f5",
            "e4g3"
        ],
        "rating": 1698,
        "themes": [
            "endgame",
            "mate",
            "mateIn1",
            "oneMove"
        ],
        "description": "Black to move — deliver checkmate in one!"
    },
    {
        "lichessId": "003if",
        "id": "lichess_003if",
        "fen": "8/3q1kpp/1P2p3/4Q3/5P2/4B2P/2r3PK/8 b - - 0 43",
        "moves": [
            "d7b7",
            "e5h5",
            "f7e7",
            "e3c5",
            "c2c5",
            "h5c5"
        ],
        "rating": 1700,
        "themes": [
            "advantage",
            "endgame",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "006fF",
        "id": "lichess_006fF",
        "fen": "r1b4r/pp1k2pp/2nb2q1/1B1p2B1/3p3Q/8/PPP2PPP/3RR1K1 b - - 5 17",
        "moves": [
            "h7h6",
            "h4g4",
            "d7c7",
            "g5d8",
            "h8d8",
            "g4g6"
        ],
        "rating": 1702,
        "themes": [
            "advantage",
            "discoveredAttack",
            "exposedKing",
            "long",
            "middlegame"
        ],
        "description": "White to move — unleash a discovered attack!"
    },
    {
        "lichessId": "004Ao",
        "id": "lichess_004Ao",
        "fen": "4qk2/1b3rR1/p7/1p2Q3/4P2P/P2P3K/2r5/3R4 w - - 5 41",
        "moves": [
            "g7f7",
            "e8f7",
            "e5h8",
            "f8e7"
        ],
        "rating": 1711,
        "themes": [
            "advantage",
            "endgame",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "005gP",
        "id": "lichess_005gP",
        "fen": "8/8/3p4/2kP4/1p4P1/2pK4/P7/8 w - - 1 42",
        "moves": [
            "g4g5",
            "c5d5",
            "g5g6",
            "d5e6",
            "g6g7",
            "e6f7",
            "a2a4",
            "b4a3",
            "g7g8r",
            "f7g8"
        ],
        "rating": 1723,
        "themes": [
            "crushing",
            "enPassant",
            "endgame",
            "pawnEndgame",
            "veryLong"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "004RF",
        "id": "lichess_004RF",
        "fen": "5rk1/5ppp/1p6/1qp2P1Q/3p3P/6R1/6PK/8 b - - 0 30",
        "moves": [
            "c5c4",
            "g3g7",
            "g8g7",
            "f5f6",
            "g7f6",
            "h5b5"
        ],
        "rating": 1727,
        "themes": [
            "attraction",
            "crushing",
            "discoveredAttack",
            "endgame",
            "long",
            "sacrifice"
        ],
        "description": "White to move — unleash a discovered attack!"
    },
    {
        "lichessId": "00LMb",
        "id": "lichess_00LMb",
        "fen": "8/8/1n4kP/1P3p2/3P1K2/2p1N3/8/8 w - - 4 49",
        "moves": [
            "f4e5",
            "b6c4",
            "e3c4",
            "c3c2"
        ],
        "rating": 1743,
        "themes": [
            "advancedPawn",
            "crushing",
            "endgame",
            "knightEndgame",
            "sacrifice",
            "short"
        ],
        "description": "Black to move — sacrifice for a winning attack!"
    },
    {
        "lichessId": "001h8",
        "id": "lichess_001h8",
        "fen": "2r3k1/2r4p/4p1p1/1p1q1pP1/p1bP1P1Q/P6R/5B2/2R3K1 b - - 5 34",
        "moves": [
            "c4e2",
            "h4h7",
            "c7h7",
            "c1c8",
            "g8g7",
            "c8c7"
        ],
        "rating": 1749,
        "themes": [
            "crushing",
            "deflection",
            "kingsideAttack",
            "long",
            "middlegame",
            "sacrifice"
        ],
        "description": "White to move — deflect the key defender!"
    },
    {
        "lichessId": "0047P",
        "id": "lichess_0047P",
        "fen": "8/1N3k2/6p1/8/2P3P1/pr6/R5K1/8 w - - 1 56",
        "moves": [
            "g2f1",
            "b3b1",
            "f1e2",
            "b1b2",
            "e2d1",
            "b2a2"
        ],
        "rating": 1766,
        "themes": [
            "crushing",
            "endgame",
            "exposedKing",
            "fork",
            "long",
            "master"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "001xO",
        "id": "lichess_001xO",
        "fen": "k1r1b3/p1r1nppp/1p1qpn2/2Np4/1P1P4/PQRBPN2/5PPP/2R3K1 w - - 0 19",
        "moves": [
            "d3a6",
            "b6c5",
            "a6c8",
            "c5c4"
        ],
        "rating": 1780,
        "themes": [
            "crushing",
            "master",
            "masterVsMaster",
            "middlegame",
            "sacrifice",
            "short"
        ],
        "description": "Black to move — sacrifice for a winning attack!"
    },
    {
        "lichessId": "005wy",
        "id": "lichess_005wy",
        "fen": "1r6/pp2kpp1/2n1p1n1/3p2PQ/5P2/2PqP3/PP1N4/2KR3R w - - 3 27",
        "moves": [
            "h5h7",
            "c6b4",
            "c3b4",
            "b8c8",
            "d2c4",
            "c8c4"
        ],
        "rating": 1780,
        "themes": [
            "long",
            "mate",
            "mateIn3",
            "middlegame",
            "queensideAttack",
            "sacrifice"
        ],
        "description": "Black to move — calculate the mate in 3!"
    },
    {
        "lichessId": "005HG",
        "id": "lichess_005HG",
        "fen": "r2q1rk1/p1p2pp1/3bbn1p/4N3/2Q5/1P4P1/PB1PPP1P/RN2K2R w KQ - 1 12",
        "moves": [
            "c4c2",
            "d6e5",
            "b2e5",
            "d8d5",
            "f2f3",
            "d5e5"
        ],
        "rating": 1788,
        "themes": [
            "advantage",
            "clearance",
            "fork",
            "long",
            "opening"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "002rd",
        "id": "lichess_002rd",
        "fen": "r6k/q1pb1p1p/1b3Pr1/p1ppP2Q/3P2p1/4B3/PP2NRPP/3R2K1 b - - 1 25",
        "moves": [
            "d7e6",
            "e2f4",
            "c5d4",
            "f4g6",
            "f7g6",
            "h5h6"
        ],
        "rating": 1795,
        "themes": [
            "crushing",
            "kingsideAttack",
            "long",
            "middlegame",
            "pin"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "00008",
        "id": "lichess_00008",
        "fen": "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24",
        "moves": [
            "f2g3",
            "e6e7",
            "b2b1",
            "b3c1",
            "b1c1",
            "h6c1"
        ],
        "rating": 1811,
        "themes": [
            "crushing",
            "hangingPiece",
            "long",
            "middlegame"
        ],
        "description": "White to move — punish the undefended piece!"
    },
    {
        "lichessId": "003wQ",
        "id": "lichess_003wQ",
        "fen": "2r2rk1/6pp/3Q1q2/8/3N1B2/6P1/PP1K3P/R4b2 w - - 0 24",
        "moves": [
            "a1f1",
            "f6d6",
            "f4d6",
            "f8f1"
        ],
        "rating": 1814,
        "themes": [
            "advantage",
            "discoveredAttack",
            "middlegame",
            "pin",
            "short"
        ],
        "description": "Black to move — exploit the pin!"
    },
    {
        "lichessId": "00bpH",
        "id": "lichess_00bpH",
        "fen": "8/5p2/pq5p/1p5k/6B1/6P1/P6P/2Q4K b - - 0 36",
        "moves": [
            "h5g4",
            "c1f4",
            "g4h5",
            "f4f5"
        ],
        "rating": 1817,
        "themes": [
            "endgame",
            "mate",
            "mateIn2",
            "queenEndgame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "00bqJ",
        "id": "lichess_00bqJ",
        "fen": "r7/1pp4k/p2p3p/3Ppq2/2P2bb1/1N2R3/PP1Q4/1K1N2R1 w - - 8 27",
        "moves": [
            "d2c2",
            "f5c2",
            "b1c2",
            "g4d1",
            "g1d1",
            "f4e3"
        ],
        "rating": 1819,
        "themes": [
            "advantage",
            "attraction",
            "long",
            "middlegame",
            "queensideAttack"
        ],
        "description": "Black to move — lure the enemy piece into danger!"
    },
    {
        "lichessId": "00eRZ",
        "id": "lichess_00eRZ",
        "fen": "5rk1/8/p5pp/1p1b1p2/6n1/PP2p1RP/1B3PP1/1B4K1 w - - 0 33",
        "moves": [
            "h3g4",
            "f5f4",
            "g3e3",
            "f4e3"
        ],
        "rating": 1826,
        "themes": [
            "advantage",
            "endgame",
            "master",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "007en",
        "id": "lichess_007en",
        "fen": "rn3rk1/4pp1p/3p2pB/2q4P/3bP1b1/Pp2Q3/1P2B3/1K1R2NR w - - 0 20",
        "moves": [
            "e3d4",
            "c5c2",
            "b1a1",
            "a8a3",
            "b2a3",
            "c2a2"
        ],
        "rating": 1842,
        "themes": [
            "long",
            "mate",
            "mateIn3",
            "middlegame",
            "queensideAttack",
            "sacrifice"
        ],
        "description": "Black to move — calculate the mate in 3!"
    },
    {
        "lichessId": "00Knu",
        "id": "lichess_00Knu",
        "fen": "r2q1rk1/p3bpp1/2pp1nb1/4p1Q1/8/1B3N1P/PPP3P1/R1B2RK1 b - - 0 18",
        "moves": [
            "f6e4",
            "g5g6",
            "d8b6",
            "g1h2"
        ],
        "rating": 1847,
        "themes": [
            "advantage",
            "defensiveMove",
            "opening",
            "pin",
            "short"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "00LoE",
        "id": "lichess_00LoE",
        "fen": "2k5/1p4p1/p4b2/3p4/3P4/2PQN3/PP3q2/1K6 w - - 0 37",
        "moves": [
            "e3d5",
            "f2g1",
            "b1c2",
            "g1g2"
        ],
        "rating": 1849,
        "themes": [
            "crushing",
            "endgame",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "00Ksa",
        "id": "lichess_00Ksa",
        "fen": "8/5p2/5pk1/8/4PP2/6r1/5K2/7R b - - 2 46",
        "moves": [
            "g3g4",
            "f2f3",
            "g4g5",
            "f4g5"
        ],
        "rating": 1857,
        "themes": [
            "crushing",
            "endgame",
            "rookEndgame",
            "short",
            "trappedPiece"
        ],
        "description": "White to move — trap and win the enemy piece!"
    },
    {
        "lichessId": "00MDy",
        "id": "lichess_00MDy",
        "fen": "8/pp6/2p1k3/2Pp2pp/1P1P1p2/P2K1P2/6PP/8 w - - 0 42",
        "moves": [
            "g2g3",
            "f4g3",
            "h2g3",
            "h5h4",
            "g3h4",
            "g5h4"
        ],
        "rating": 1864,
        "themes": [
            "crushing",
            "endgame",
            "long",
            "pawnEndgame"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "00MZC",
        "id": "lichess_00MZC",
        "fen": "5r1k/p5p1/1pb4p/3pR3/1Q6/P1P4P/1P3qP1/R5K1 w - - 0 24",
        "moves": [
            "g1h1",
            "d5d4",
            "e5e2",
            "c6g2"
        ],
        "rating": 1872,
        "themes": [
            "advantage",
            "discoveredAttack",
            "endgame",
            "short"
        ],
        "description": "Black to move — unleash a discovered attack!"
    },
    {
        "lichessId": "00798",
        "id": "lichess_00798",
        "fen": "6K1/4k3/4P3/6pp/6rP/4R1P1/8/8 w - - 0 60",
        "moves": [
            "g8g7",
            "g5h4",
            "g7h6",
            "h4g3"
        ],
        "rating": 1895,
        "themes": [
            "crushing",
            "discoveredAttack",
            "endgame",
            "rookEndgame",
            "short"
        ],
        "description": "Black to move — unleash a discovered attack!"
    },
    {
        "lichessId": "00JqT",
        "id": "lichess_00JqT",
        "fen": "2r2rk1/pp2R3/5p2/3p1q2/3P4/4QPPp/PP3R1P/6K1 w - - 2 30",
        "moves": [
            "g3g4",
            "f5b1",
            "f2f1",
            "b1b2",
            "e3e6",
            "g8h8"
        ],
        "rating": 1897,
        "themes": [
            "crushing",
            "deflection",
            "endgame",
            "long"
        ],
        "description": "Black to move — deflect the key defender!"
    },
    {
        "lichessId": "00cxg",
        "id": "lichess_00cxg",
        "fen": "r2qk2r/1p2bpp1/p2pp3/8/4b2P/4B3/PPPQB3/2K3RR b kq - 1 17",
        "moves": [
            "g7g6",
            "d2d4",
            "e4h1",
            "d4h8",
            "e8d7",
            "h8d8"
        ],
        "rating": 1900,
        "themes": [
            "advantage",
            "fork",
            "long",
            "middlegame"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "0018P",
        "id": "lichess_0018P",
        "fen": "5R2/1p6/p1p5/2P1rk2/2K3p1/2P1p1P1/1P5P/8 b - - 1 44",
        "moves": [
            "f5e6",
            "f8e8",
            "e6f5",
            "e8e5",
            "f5e5",
            "c4d3",
            "e5d5",
            "d3e3",
            "a6a5",
            "e3f4",
            "d5c4",
            "f4g4"
        ],
        "rating": 1903,
        "themes": [
            "crushing",
            "endgame",
            "exposedKing",
            "rookEndgame",
            "veryLong"
        ],
        "description": "White to move — convert the rook endgame!"
    },
    {
        "lichessId": "005xu",
        "id": "lichess_005xu",
        "fen": "8/3k4/1K1P4/2P3r1/R7/5b2/8/8 b - - 0 68",
        "moves": [
            "g5g8",
            "a4a7",
            "d7e6",
            "a7e7",
            "e6d5",
            "d6d7"
        ],
        "rating": 1914,
        "themes": [
            "advancedPawn",
            "crushing",
            "endgame",
            "exposedKing",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "00e7H",
        "id": "lichess_00e7H",
        "fen": "8/7p/p1p4k/1p1p4/3Qpq2/2P2NpP/PP4K1/8 w - - 0 44",
        "moves": [
            "f3d2",
            "c6c5",
            "d4c5",
            "f4d2"
        ],
        "rating": 1919,
        "themes": [
            "advantage",
            "deflection",
            "endgame",
            "master",
            "masterVsMaster",
            "short"
        ],
        "description": "Black to move — deflect the key defender!"
    },
    {
        "lichessId": "006om",
        "id": "lichess_006om",
        "fen": "1r3k2/5p1p/2p1pp2/P2n4/2r1N3/P4PK1/2R2P1P/2R5 b - - 9 29",
        "moves": [
            "c4a4",
            "e4c5",
            "a4a5",
            "c5d7",
            "f8g7",
            "d7b8"
        ],
        "rating": 1921,
        "themes": [
            "crushing",
            "endgame",
            "fork",
            "long",
            "master"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "0068D",
        "id": "lichess_0068D",
        "fen": "7r/pppk4/2pb1r2/8/2NP2p1/2P5/PP2RPP1/4R1K1 w - - 2 26",
        "moves": [
            "c4d6",
            "f6h6",
            "f2f4",
            "g4g3",
            "e2e7",
            "d7d6",
            "g1f1",
            "h6h1"
        ],
        "rating": 1949,
        "themes": [
            "crushing",
            "endgame",
            "veryLong"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "001kG",
        "id": "lichess_001kG",
        "fen": "rnbq3r/1p2bkpp/p4n2/8/2pNP3/2N5/PPP3PP/R1BQ1RK1 b - - 1 11",
        "moves": [
            "e7c5",
            "d1h5",
            "f7g8",
            "h5c5"
        ],
        "rating": 1974,
        "themes": [
            "advantage",
            "opening",
            "pin",
            "short"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "005f3",
        "id": "lichess_005f3",
        "fen": "r5k1/2p1pp2/pp4p1/1q1r4/5P2/2QP2R1/PP6/1K4R1 b - - 0 32",
        "moves": [
            "d5h5",
            "g3g6",
            "f7g6",
            "g1g6",
            "g8f7",
            "c3g7",
            "f7e8",
            "g7g8",
            "e8d7",
            "g8e6",
            "d7d8",
            "g6g8"
        ],
        "rating": 1974,
        "themes": [
            "crushing",
            "endgame",
            "sacrifice",
            "veryLong"
        ],
        "description": "White to move — sacrifice for a winning attack!"
    },
    {
        "lichessId": "00Lyc",
        "id": "lichess_00Lyc",
        "fen": "4R3/1p4k1/1q1N1bpp/3B4/5p1P/p4P2/3RK1P1/8 w - - 4 42",
        "moves": [
            "d6e4",
            "b6b5",
            "d2d3",
            "b5e8"
        ],
        "rating": 1975,
        "themes": [
            "crushing",
            "endgame",
            "fork",
            "master",
            "short"
        ],
        "description": "Black to move — spot the decisive fork!"
    },
    {
        "lichessId": "00dTd",
        "id": "lichess_00dTd",
        "fen": "3r4/ppp1Q3/1b2kP2/8/4qp2/P1Pr4/1P3P2/1K2N3 b - - 5 31",
        "moves": [
            "e6d5",
            "e7d8",
            "d5c6",
            "e1d3"
        ],
        "rating": 1976,
        "themes": [
            "advantage",
            "endgame",
            "hangingPiece",
            "short"
        ],
        "description": "White to move — punish the undefended piece!"
    },
    {
        "lichessId": "00JsQ",
        "id": "lichess_00JsQ",
        "fen": "r1b1k1nr/pp1np2p/2q1Npp1/2P1p3/2B5/2N3B1/PPPR1PPP/2K4R b kq - 2 14",
        "moves": [
            "d7c5",
            "d2d8",
            "e8f7",
            "d8f8"
        ],
        "rating": 1990,
        "themes": [
            "mate",
            "mateIn2",
            "middlegame",
            "short"
        ],
        "description": "White to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "002Ds",
        "id": "lichess_002Ds",
        "fen": "8/1pp5/p2p4/P2Pk2p/1PP1p2P/2n1K2P/3N4/8 b - - 0 45",
        "moves": [
            "b7b6",
            "b4b5",
            "c3d1",
            "e3e2",
            "a6b5",
            "a5a6"
        ],
        "rating": 1992,
        "themes": [
            "crushing",
            "endgame",
            "knightEndgame",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "004Ax",
        "id": "lichess_004Ax",
        "fen": "8/8/4R1kp/p7/5rPK/8/7P/8 b - - 2 42",
        "moves": [
            "g6f7",
            "e6h6",
            "f4f6",
            "h6h7",
            "f7g6",
            "h7a7"
        ],
        "rating": 1999,
        "themes": [
            "crushing",
            "endgame",
            "exposedKing",
            "long",
            "rookEndgame"
        ],
        "description": "White to move — convert the rook endgame!"
    },
    {
        "lichessId": "00MZr",
        "id": "lichess_00MZr",
        "fen": "1k5r/ppp5/2p5/3n4/5pQ1/3P1P1r/PPP2K2/5R2 w - - 2 26",
        "moves": [
            "f1g1",
            "h3h2",
            "g1g2",
            "d5e3"
        ],
        "rating": 2007,
        "themes": [
            "crushing",
            "endgame",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "00K7b",
        "id": "lichess_00K7b",
        "fen": "7k/1p4p1/pP1r4/4qp2/P2Nn3/1Q5P/2N3K1/3R4 w - - 4 48",
        "moves": [
            "g2f1",
            "e5f4",
            "b3f3",
            "f4f3",
            "d4f3",
            "d6d1"
        ],
        "rating": 2018,
        "themes": [
            "advantage",
            "exposedKing",
            "long",
            "middlegame"
        ],
        "description": "Black to move — find the best tactical combination!"
    },
    {
        "lichessId": "00KNK",
        "id": "lichess_00KNK",
        "fen": "r3r1k1/p1p4p/3b4/4p1qN/8/1P1b1Q2/P2P1PP1/B5KR b - - 2 22",
        "moves": [
            "e5e4",
            "h5f6",
            "g8f8",
            "f6h7",
            "f8e7",
            "a1f6",
            "g5f6",
            "f3f6"
        ],
        "rating": 2022,
        "themes": [
            "advantage",
            "deflection",
            "discoveredCheck",
            "doubleCheck",
            "fork",
            "middlegame",
            "veryLong"
        ],
        "description": "White to move — spot the decisive fork!"
    },
    {
        "lichessId": "00cxG",
        "id": "lichess_00cxG",
        "fen": "2r5/3RQ2p/6pk/8/5q1P/1P6/2K5/8 w - - 16 42",
        "moves": [
            "c2b2",
            "f4c1",
            "b2a2",
            "c8c2"
        ],
        "rating": 2031,
        "themes": [
            "endgame",
            "mate",
            "mateIn2",
            "short"
        ],
        "description": "Black to move — force checkmate in 2 moves!"
    },
    {
        "lichessId": "000h0",
        "id": "lichess_000h0",
        "fen": "5rk1/p5p1/3bpr1p/1Pp4q/3pR3/1P1Q1N2/P4PPP/4R1K1 w - - 4 22",
        "moves": [
            "e4e6",
            "f6f3",
            "g2f3",
            "h5h2",
            "g1f1",
            "h2h3",
            "f1e2",
            "h3e6"
        ],
        "rating": 2048,
        "themes": [
            "advantage",
            "interference",
            "kingsideAttack",
            "middlegame",
            "veryLong"
        ],
        "description": "Black to move — break through on the kingside!"
    },
    {
        "lichessId": "001aK",
        "id": "lichess_001aK",
        "fen": "6k1/5p2/4p3/P1B5/2P4P/4Pnp1/Rb1rN3/5K2 b - - 1 33",
        "moves": [
            "d2e2",
            "f1e2",
            "g3g2",
            "e3e4",
            "f3d4",
            "e2f2"
        ],
        "rating": 2056,
        "themes": [
            "crushing",
            "endgame",
            "hangingPiece",
            "long",
            "quietMove"
        ],
        "description": "White to move — punish the undefended piece!"
    },
    {
        "lichessId": "002xh",
        "id": "lichess_002xh",
        "fen": "2nk4/8/2PBp1n1/1pK1P1p1/1P4P1/8/8/8 b - - 2 42",
        "moves": [
            "g6h4",
            "c5b5",
            "h4g2",
            "b5a6",
            "g2e3",
            "a6b7"
        ],
        "rating": 2065,
        "themes": [
            "crushing",
            "endgame",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "001Oo",
        "id": "lichess_001Oo",
        "fen": "6k1/4p1bp/6p1/1p1pP3/1PpPp3/2P1P3/Q2B1KPP/3q4 b - - 2 23",
        "moves": [
            "d1a4",
            "a2a4",
            "b5a4",
            "b4b5",
            "g8f7",
            "b5b6"
        ],
        "rating": 2078,
        "themes": [
            "crushing",
            "endgame",
            "long",
            "quietMove"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "003aS",
        "id": "lichess_003aS",
        "fen": "8/8/5k1p/6p1/1R4PP/1p2KP2/8/1r6 w - - 0 43",
        "moves": [
            "h4h5",
            "b3b2",
            "b4b6",
            "f6e5",
            "f3f4",
            "g5f4"
        ],
        "rating": 2086,
        "themes": [
            "advancedPawn",
            "crushing",
            "defensiveMove",
            "endgame",
            "long",
            "rookEndgame"
        ],
        "description": "Black to move — convert the rook endgame!"
    },
    {
        "lichessId": "003cs",
        "id": "lichess_003cs",
        "fen": "2r1kbnr/pp4pp/4p3/3pP1N1/3q4/1P2B3/P3Q1PP/nN3RK1 b k - 1 16",
        "moves": [
            "d4e5",
            "f1f8",
            "e8f8",
            "e3c5",
            "c8c5",
            "e2e5",
            "c5c1",
            "g1f2"
        ],
        "rating": 2119,
        "themes": [
            "advantage",
            "attraction",
            "discoveredAttack",
            "exposedKing",
            "middlegame",
            "sacrifice",
            "veryLong"
        ],
        "description": "White to move — unleash a discovered attack!"
    },
    {
        "lichessId": "00Kd8",
        "id": "lichess_00Kd8",
        "fen": "3R4/3P4/8/5p2/5kPp/8/3r1KP1/8 w - - 1 64",
        "moves": [
            "f2g1",
            "f4g3",
            "g1f1",
            "f5g4"
        ],
        "rating": 2133,
        "themes": [
            "advantage",
            "endgame",
            "rookEndgame",
            "short"
        ],
        "description": "Black to move — convert the rook endgame!"
    },
    {
        "lichessId": "000jr",
        "id": "lichess_000jr",
        "fen": "5k2/1p4pp/p5n1/5Q2/3BpP2/1P2PP1K/P1q4P/7r b - - 1 33",
        "moves": [
            "f8g8",
            "f5d5",
            "g8f8",
            "d4c5",
            "c2c5",
            "d5c5"
        ],
        "rating": 2152,
        "themes": [
            "crushing",
            "endgame",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "000qP",
        "id": "lichess_000qP",
        "fen": "8/7R/8/5p2/4bk1P/8/2r2K2/6R1 w - - 7 51",
        "moves": [
            "f2f1",
            "f4f3",
            "f1e1",
            "c2c1",
            "e1d2",
            "c1g1"
        ],
        "rating": 2167,
        "themes": [
            "crushing",
            "endgame",
            "exposedKing",
            "long",
            "skewer"
        ],
        "description": "Black to move — find the winning skewer!"
    },
    {
        "lichessId": "002LF",
        "id": "lichess_002LF",
        "fen": "7r/p2q1pk1/1pp3p1/8/6P1/4Q3/PP1R1P1r/5KN1 b - - 0 38",
        "moves": [
            "d7g4",
            "e3e5",
            "f7f6",
            "e5c7",
            "g7h6",
            "c7h2"
        ],
        "rating": 2185,
        "themes": [
            "advantage",
            "endgame",
            "interference",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "001u3",
        "id": "lichess_001u3",
        "fen": "2r3k1/p1q2pp1/Q3p2p/b1Np4/2nP1P2/4P1P1/5K1P/2B1N3 b - - 3 33",
        "moves": [
            "c7b6",
            "a6c8",
            "g8h7",
            "c8b7"
        ],
        "rating": 2190,
        "themes": [
            "advantage",
            "hangingPiece",
            "middlegame",
            "short"
        ],
        "description": "White to move — punish the undefended piece!"
    },
    {
        "lichessId": "004sY",
        "id": "lichess_004sY",
        "fen": "8/2k3n1/3p2p1/1KpP2Pp/2P4P/7B/8/8 w - - 0 57",
        "moves": [
            "b5a6",
            "c7d8",
            "a6b5",
            "g7f5"
        ],
        "rating": 2191,
        "themes": [
            "crushing",
            "endgame",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "007gO",
        "id": "lichess_007gO",
        "fen": "2r3rk/5p2/4p2p/4q3/1Q6/8/1P3PPP/R4RK1 w - - 0 31",
        "moves": [
            "a1c1",
            "e5g5",
            "g2g3",
            "c8c1"
        ],
        "rating": 2197,
        "themes": [
            "crushing",
            "endgame",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "003Ec",
        "id": "lichess_003Ec",
        "fen": "3r4/p4R2/1pb2Pp1/n1p1Q1kp/8/P2q4/1P4PP/6RK b - - 2 32",
        "moves": [
            "d3f5",
            "e5e3",
            "f5f4",
            "h2h4",
            "g5f5",
            "e3h3"
        ],
        "rating": 2245,
        "themes": [
            "crushing",
            "long",
            "middlegame",
            "pin"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "0078T",
        "id": "lichess_0078T",
        "fen": "rk5r/1b3R2/pp2p2q/4P2p/B2p3B/4R2P/PP4P1/5Q1K b - - 0 27",
        "moves": [
            "d4e3",
            "f7b7",
            "b8b7",
            "f1f7",
            "b7b8",
            "h4e7"
        ],
        "rating": 2248,
        "themes": [
            "attraction",
            "crushing",
            "defensiveMove",
            "exposedKing",
            "long",
            "middlegame",
            "queensideAttack",
            "sacrifice"
        ],
        "description": "White to move — lure the enemy piece into danger!"
    },
    {
        "lichessId": "00347",
        "id": "lichess_00347",
        "fen": "8/2p5/8/2pPk2p/8/4K2P/6P1/8 w - - 1 42",
        "moves": [
            "e3d3",
            "h5h4",
            "d3c4",
            "e5d6"
        ],
        "rating": 2264,
        "themes": [
            "crushing",
            "endgame",
            "pawnEndgame",
            "quietMove",
            "short"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "00KYC",
        "id": "lichess_00KYC",
        "fen": "5rk1/p6p/2r1pBp1/4P3/2b5/3p4/P4PPP/1R2R1K1 w - - 0 27",
        "moves": [
            "b1b7",
            "f8f6",
            "e5f6",
            "d3d2",
            "e1d1",
            "c4e2"
        ],
        "rating": 2272,
        "themes": [
            "advancedPawn",
            "clearance",
            "crushing",
            "endgame",
            "long",
            "master",
            "sacrifice"
        ],
        "description": "Black to move — sacrifice for a winning attack!"
    },
    {
        "lichessId": "004Op",
        "id": "lichess_004Op",
        "fen": "2kr2r1/1bp4n/1pq1p2p/p1P5/1P3B2/P6P/5RP1/RB2Q1K1 w - - 3 26",
        "moves": [
            "e1f1",
            "d8d1",
            "f1d1",
            "g8g2",
            "g1f1",
            "g2g1",
            "f1e2",
            "g1d1"
        ],
        "rating": 2280,
        "themes": [
            "crushing",
            "deflection",
            "kingsideAttack",
            "middlegame",
            "pin",
            "sacrifice",
            "skewer",
            "veryLong"
        ],
        "description": "Black to move — exploit the pin!"
    },
    {
        "lichessId": "0072T",
        "id": "lichess_0072T",
        "fen": "3q1nk1/1bN2rpp/pp1P4/1N6/4n2b/8/PPP2PPP/R1BQ1RK1 w - - 1 16",
        "moves": [
            "b5d4",
            "h4f2",
            "f1f2",
            "e4f2"
        ],
        "rating": 2304,
        "themes": [
            "advantage",
            "kingsideAttack",
            "master",
            "middlegame",
            "short"
        ],
        "description": "Black to move — break through on the kingside!"
    },
    {
        "lichessId": "005qG",
        "id": "lichess_005qG",
        "fen": "8/8/1p1k1p1p/3npp2/2B5/PP1K1PP1/7P/8 b - - 0 36",
        "moves": [
            "f5f4",
            "c4d5",
            "f4g3",
            "h2g3",
            "d6d5",
            "g3g4"
        ],
        "rating": 2310,
        "themes": [
            "crushing",
            "defensiveMove",
            "endgame",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "00Ksk",
        "id": "lichess_00Ksk",
        "fen": "6B1/ppp3p1/7k/7p/6q1/8/Pb1Q1P1P/5K2 b - - 7 34",
        "moves": [
            "g7g5",
            "d2d3",
            "h6g7",
            "d3h7",
            "g7f6",
            "h7f7"
        ],
        "rating": 2355,
        "themes": [
            "crushing",
            "endgame",
            "long",
            "quietMove"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "004b0",
        "id": "lichess_004b0",
        "fen": "5kB1/4b3/4P3/2p2P2/2b5/8/p7/B6K w - - 4 48",
        "moves": [
            "g8f7",
            "e7g5",
            "f5f6",
            "g5e3",
            "a1e5",
            "e3f4",
            "e5f4",
            "a2a1q"
        ],
        "rating": 2368,
        "themes": [
            "advancedPawn",
            "bishopEndgame",
            "crushing",
            "deflection",
            "endgame",
            "promotion",
            "quietMove",
            "veryLong"
        ],
        "description": "Black to move — deflect the key defender!"
    },
    {
        "lichessId": "006XF",
        "id": "lichess_006XF",
        "fen": "r5kr/pp1qb1p1/2p4p/3pPb1Q/3P4/2P1B3/PP4PP/R4RK1 b - - 1 17",
        "moves": [
            "f5e4",
            "h5f7",
            "g8h7",
            "f1f6",
            "e7f6",
            "f7d7"
        ],
        "rating": 2372,
        "themes": [
            "advantage",
            "long",
            "middlegame",
            "pin"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "002mG",
        "id": "lichess_002mG",
        "fen": "5r1k/B1p3pp/2Qb1p2/3Pq3/P6P/8/2P3K1/3R1R2 w - - 1 36",
        "moves": [
            "g2f2",
            "f8e8",
            "c6e8",
            "e5e8"
        ],
        "rating": 2377,
        "themes": [
            "advantage",
            "middlegame",
            "quietMove",
            "short"
        ],
        "description": "Black to move — find the best tactical combination!"
    },
    {
        "lichessId": "001Hi",
        "id": "lichess_001Hi",
        "fen": "6k1/pp1r1pp1/1qp1p2p/4P2P/5Q2/1P4R1/P1Pr1PP1/R5K1 b - - 4 23",
        "moves": [
            "b6d4",
            "f4f6",
            "d4f2",
            "f6f2",
            "d2f2",
            "g1f2"
        ],
        "rating": 2391,
        "themes": [
            "advantage",
            "endgame",
            "long",
            "pin"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "004sg",
        "id": "lichess_004sg",
        "fen": "6k1/p3b2p/1p1pP3/2p3P1/1Pnp3B/P6P/3Q3K/8 w - - 0 38",
        "moves": [
            "b4c5",
            "c4d2",
            "c5c6",
            "d6d5",
            "g5g6",
            "e7d6"
        ],
        "rating": 2439,
        "themes": [
            "advantage",
            "clearance",
            "endgame",
            "hangingPiece",
            "long",
            "quietMove"
        ],
        "description": "Black to move — punish the undefended piece!"
    },
    {
        "lichessId": "005ws",
        "id": "lichess_005ws",
        "fen": "8/8/5pp1/3K3p/3N2kP/8/8/8 w - - 2 62",
        "moves": [
            "d5e6",
            "g6g5",
            "h4g5",
            "f6g5",
            "e6d5",
            "h5h4",
            "d5e4",
            "h4h3",
            "d4f3",
            "g4g3"
        ],
        "rating": 2448,
        "themes": [
            "crushing",
            "endgame",
            "knightEndgame",
            "master",
            "masterVsMaster",
            "quietMove",
            "veryLong"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "00KNB",
        "id": "lichess_00KNB",
        "fen": "2rr2k1/5p2/4p2p/4N1pQ/1p3P2/4P3/np3P1P/2q2BRK b - - 1 32",
        "moves": [
            "c8c7",
            "h5h6",
            "b2b1q",
            "h6g5"
        ],
        "rating": 2499,
        "themes": [
            "crushing",
            "kingsideAttack",
            "master",
            "middlegame",
            "pin",
            "short"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "00Kip",
        "id": "lichess_00Kip",
        "fen": "8/6pp/8/3k4/2p2PPP/2K5/8/8 w - - 1 50",
        "moves": [
            "f4f5",
            "d5e5",
            "h4h5",
            "h7h6",
            "g4g5",
            "h6g5"
        ],
        "rating": 2531,
        "themes": [
            "crushing",
            "endgame",
            "long",
            "pawnEndgame",
            "quietMove"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "00L53",
        "id": "lichess_00L53",
        "fen": "3q2k1/Qp4pp/3r4/P7/8/1P6/3p1PPP/3R2K1 w - - 0 35",
        "moves": [
            "a7b7",
            "d6e6",
            "b7b4",
            "d8d4",
            "b4b8",
            "g8f7",
            "b8b7",
            "f7g6",
            "g2g3",
            "e6e1"
        ],
        "rating": 2536,
        "themes": [
            "clearance",
            "crushing",
            "defensiveMove",
            "endgame",
            "quietMove",
            "veryLong"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "006NL",
        "id": "lichess_006NL",
        "fen": "1r6/k2qn1b1/p1b1p1p1/2PpPpN1/2nN1P1P/p4B2/1PP2Q2/1K1R3R w - - 0 32",
        "moves": [
            "d4c6",
            "e7c6",
            "b2b3",
            "a3a2",
            "b1a1",
            "c4e5",
            "f4e5",
            "g7e5",
            "a1a2",
            "b8b5"
        ],
        "rating": 2545,
        "themes": [
            "advancedPawn",
            "advantage",
            "middlegame",
            "pin",
            "veryLong"
        ],
        "description": "Black to move — exploit the pin!"
    },
    {
        "lichessId": "002e8",
        "id": "lichess_002e8",
        "fen": "r3nrk1/1b3pp1/4pb2/p3q3/1p1N4/3B2R1/PPPQN2P/1K4R1 b - - 1 23",
        "moves": [
            "a8d8",
            "d2h6",
            "g7g6",
            "g3h3"
        ],
        "rating": 2554,
        "themes": [
            "crushing",
            "defensiveMove",
            "master",
            "middlegame",
            "pin",
            "short"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "00KgF",
        "id": "lichess_00KgF",
        "fen": "4r3/p5k1/1p5P/1P2P1K1/8/5N2/8/8 b - - 0 42",
        "moves": [
            "g7h7",
            "g5h5",
            "h7g8",
            "f3g5",
            "e8e5",
            "h5g6",
            "e5b5",
            "h6h7"
        ],
        "rating": 2589,
        "themes": [
            "advancedPawn",
            "crushing",
            "endgame",
            "quietMove",
            "sacrifice",
            "veryLong"
        ],
        "description": "White to move — sacrifice for a winning attack!"
    },
    {
        "lichessId": "0018S",
        "id": "lichess_0018S",
        "fen": "2kr3r/pp3p2/4p2p/1N1p2p1/3Q4/1P1P4/2q2PPP/5RK1 b - - 1 20",
        "moves": [
            "b7b6",
            "d4a1",
            "a7a5",
            "f1c1"
        ],
        "rating": 2608,
        "themes": [
            "advantage",
            "endgame",
            "pin",
            "short"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "006of",
        "id": "lichess_006of",
        "fen": "r2qr2k/1pp2pp1/1b4np/pP2P3/P4n2/BQN2N1P/5PP1/R3R1K1 w - - 3 20",
        "moves": [
            "b3f7",
            "d8d3",
            "c3e2",
            "f4e2",
            "e1e2",
            "d3e2"
        ],
        "rating": 2615,
        "themes": [
            "advantage",
            "kingsideAttack",
            "long",
            "middlegame"
        ],
        "description": "Black to move — break through on the kingside!"
    },
    {
        "lichessId": "004zh",
        "id": "lichess_004zh",
        "fen": "4b1k1/4Pr2/3R2pp/1ppBP1q1/8/PP4P1/2P4P/3R3K b - - 2 38",
        "moves": [
            "g5h5",
            "d1f1",
            "g8g7",
            "d5f7",
            "e8f7",
            "d6d8",
            "h5e5",
            "f1f7",
            "g7f7",
            "e7e8q",
            "e5e8",
            "d8e8"
        ],
        "rating": 2624,
        "themes": [
            "advancedPawn",
            "attraction",
            "crushing",
            "endgame",
            "exposedKing",
            "intermezzo",
            "pin",
            "promotion",
            "quietMove",
            "veryLong"
        ],
        "description": "White to move — exploit the pin!"
    },
    {
        "lichessId": "002e5",
        "id": "lichess_002e5",
        "fen": "r2q4/pp1n1kbp/3P2b1/6N1/6Q1/P3P3/6P1/4K2R b K - 1 21",
        "moves": [
            "f7g8",
            "g4c4",
            "g8h8",
            "h1h7",
            "g6h7",
            "g5f7"
        ],
        "rating": 2632,
        "themes": [
            "crushing",
            "long",
            "middlegame",
            "sacrifice"
        ],
        "description": "White to move — sacrifice for a winning attack!"
    },
    {
        "lichessId": "005jR",
        "id": "lichess_005jR",
        "fen": "8/5p1k/1P4pp/3Qn3/4BP2/6P1/1p2P2P/2q3K1 w - - 1 34",
        "moves": [
            "g1f2",
            "b2b1q",
            "e4b1",
            "e5g4",
            "f2f3",
            "c1h1"
        ],
        "rating": 2772,
        "themes": [
            "advancedPawn",
            "crushing",
            "endgame",
            "long",
            "promotion"
        ],
        "description": "Black to move — find the precise endgame win!"
    },
    {
        "lichessId": "000VW",
        "id": "lichess_000VW",
        "fen": "r4r2/1p3pkp/p5p1/3R1N1Q/3P4/8/P1q2P2/3R2K1 b - - 3 25",
        "moves": [
            "g6f5",
            "d5c5",
            "c2e4",
            "h5g5",
            "g7h8",
            "g5f6"
        ],
        "rating": 2873,
        "themes": [
            "crushing",
            "endgame",
            "long"
        ],
        "description": "White to move — find the precise endgame win!"
    },
    {
        "lichessId": "005yO",
        "id": "lichess_005yO",
        "fen": "r1r3k1/ppq3bQ/4p2p/4n3/3p4/2P5/PBB2PPP/4R1K1 b - - 2 24",
        "moves": [
            "g8f8",
            "b2a3",
            "f8f7",
            "c2d1",
            "c8h8",
            "d1h5",
            "f7f6",
            "h7e4"
        ],
        "rating": 3050,
        "themes": [
            "advantage",
            "exposedKing",
            "middlegame",
            "quietMove",
            "veryLong"
        ],
        "description": "White to move — find the best tactical combination!"
    }
];

const THEME_LABELS = {
    'mixed':            'Mixed / Healthy Mix',
    'mateIn1':          'Mate in 1',
    'mateIn2':          'Mate in 2',
    'mateIn3':          'Mate in 3',
    'mate':             'Checkmate (all)',
    'fork':             'Fork',
    'pin':              'Pin',
    'skewer':           'Skewer',
    'discoveredAttack': 'Discovered Attack',
    'discoveredCheck':  'Discovered Check',
    'deflection':       'Deflection',
    'sacrifice':        'Sacrifice',
    'backRankMate':     'Back Rank Mate',
    'kingsideAttack':   'Kingside Attack',
    'queensideAttack':  'Queenside Attack',
    'endgame':          'Endgame',
    'promotion':        'Promotion',
    'underPromotion':   'Underpromotion',
    'attraction':       'Attraction',
    'hangingPiece':     'Hanging Piece',
    'doubleCheck':      'Double Check',
    'zugzwang':         'Zugzwang',
    'quietMove':        'Quiet Move',
    'exposedKing':      'Exposed King',
    'clearance':        'Clearance',
    'intermezzo':       'Intermezzo',
    'defensiveMove':    'Defensive Move',
    'trappedPiece':     'Trapped Piece',
    'xRayAttack':       'X-Ray Attack',
    'smotheredMate':    'Smothered Mate',
    'arabianMate':      'Arabian Mate',
    'bodenMate':        "Boden's Mate",
    'cornerMate':       'Corner Mate',
    'enPassant':        'En Passant',
    'castling':         'Castling',
    'opening':          'Opening',
    'advancedPawn':     'Advanced Pawn',
    'pawnEndgame':      'Pawn Endgame',
    'rookEndgame':      'Rook Endgame',
    'knightEndgame':    'Knight Endgame',
    'queenEndgame':     'Queen Endgame',
    'middlegame':       'Middlegame',
    'crushing':         'Crushing Advantage',
    'advantage':        'Advantage',
    'short':            'Short (2 moves)',
    'long':             'Long (3 moves)',
    'veryLong':         'Very Long (4+ moves)'
};

// =============================================================
// PuzzleManager Class
// =============================================================
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

    /**
     * Filter puzzles by theme and max rating.
     * @param {string} theme - Lichess theme key or 'mixed'
     * @param {number} maxRating - Upper rating bound
     * @param {number} minRating - Lower rating bound (optional)
     */
    getPuzzlesByTheme(theme = 'mixed', maxRating = 3000, minRating = 0) {
        let filtered = this.puzzles;

        if (theme !== 'mixed') {
            filtered = filtered.filter(p => p.themes && p.themes.includes(theme));
        }

        filtered = filtered.filter(p => p.rating >= minRating && p.rating <= maxRating);

        // Fallback to full list if no matches
        if (filtered.length === 0) filtered = this.puzzles;
        return filtered;
    }

    // Legacy compatibility
    getPuzzlesByCategory(theme = 'mixed', maxRating = 3000) {
        return this.getPuzzlesByTheme(theme, maxRating);
    }

    getRandomPuzzle(theme = 'mixed', maxRating = 3000, minRating = 0) {
        const list = this.getPuzzlesByTheme(theme, maxRating, minRating);
        const idx = Math.floor(Math.random() * list.length);
        this.currentPuzzle = list[idx];
        this.currentIndex = this.puzzles.findIndex(p => p.id === list[idx].id);
        this.moveIndex = 0;
        return this.currentPuzzle;
    }

    getNextPuzzleInSequence(theme = 'mixed', maxRating = 3000, minRating = 0) {
        const list = this.getPuzzlesByTheme(theme, maxRating, minRating);
        const currentFilteredIdx = list.findIndex(p => p.id === (this.currentPuzzle ? this.currentPuzzle.id : ''));
        const nextFilteredIdx = (currentFilteredIdx + 1) % list.length;
        this.currentPuzzle = list[nextFilteredIdx];
        this.currentIndex = this.puzzles.findIndex(p => p.id === this.currentPuzzle.id);
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
        const expectedTo   = expectedMove.length >= 4 ? expectedMove.substring(2, 4).toLowerCase() : '';

        const sanClean      = san.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const expectedClean = expectedMove.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        const isSquareMatch = (from.toLowerCase() === expectedFrom && to.toLowerCase() === expectedTo);
        const isUciMatch    = (userUci === expectedUci);
        const isSanMatch    = (sanClean !== '' && sanClean === expectedClean);

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

    getAllThemes() {
        const themeSet = new Set();
        this.puzzles.forEach(p => {
            if (p.themes) p.themes.forEach(t => themeSet.add(t));
        });
        return [...themeSet].sort();
    }

    static getRatingLabel(rating) {
        if (rating < 1000) return 'Beginner';
        if (rating < 1300) return 'Intermediate';
        if (rating < 1600) return 'Advanced';
        if (rating < 2000) return 'Expert';
        return 'Master';
    }
}

