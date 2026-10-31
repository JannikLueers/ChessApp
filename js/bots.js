// Single Player Bot Roadmap & Personalities System
// Jannik's Chess Coach - Bot Campaign Engine

const BOT_ROSTER = [
    {
        id: 'pete',
        name: 'Pawn Stormer Pete',
        tier: 1,
        tierName: 'Novice Playground',
        elo: 600,
        avatar: '🤪',
        accentColor: '#f97316',
        styleTag: '🔥 Ultra-Aggressive',
        quote: 'Attack first, think about defense never! Forward march!',
        description: 'Recklessly charges pawns forward and attacks with his queen early. Often leaves pieces completely undefended.',
        tipOnLoss: "Pete attacks blindly! Keep your pieces guarded and wait for him to overextend, then capture his hanging pieces.",
        engineSettings: {
            depth: 1,
            skillLevel: 0,
            targetElo: 600,
            blunderChance: 0.38,
            blunderType: 'aggressive',
            multiPv: 3
        },
        preferredMoves: {
            w: ['e2e4', 'f2f4', 'g2g4'],
            b: ['e7e5', 'c7c5', 'f7f5']
        },
        styleWeights: {
            checkBonus: 35,
            captureBonus: 30,
            forwardPawnBonus: 25,
            kingAttackBonus: 20,
            castleBonus: -10,
            centerControlBonus: 5,
            defendBonus: -15
        }
    },
    {
        id: 'clara',
        name: 'Cautious Clara',
        tier: 1,
        tierName: 'Novice Playground',
        elo: 800,
        avatar: '🐢',
        accentColor: '#10b981',
        styleTag: '🛡️ Ultra-Passive / Defensive',
        quote: "Slow and steady... please don't hurt my pieces!",
        description: 'Hides behind a solid pawn fortress, avoids trades, retreats pieces at the first sign of trouble, and castles immediately.',
        tipOnLoss: "Clara plays very passively and gives up space. Control the center, build up your pieces, and break through her pawn shield.",
        engineSettings: {
            depth: 2,
            skillLevel: 1,
            targetElo: 800,
            blunderChance: 0.28,
            blunderType: 'passive',
            multiPv: 3
        },
        preferredMoves: {
            w: ['e2e3', 'd2d3', 'g1f3'],
            b: ['e7e6', 'd7d6', 'g8f6']
        },
        styleWeights: {
            checkBonus: 5,
            captureBonus: 5,
            forwardPawnBonus: -10,
            kingAttackBonus: 5,
            castleBonus: 40,
            centerControlBonus: 10,
            defendBonus: 30
        }
    },
    {
        id: 'gary',
        name: 'Gambit Gary',
        tier: 1,
        tierName: 'Novice Playground',
        elo: 1000,
        avatar: '🎲',
        accentColor: '#eab308',
        styleTag: '⚡ Sacrificial Trickster',
        quote: 'A pawn sacrifice today is a checkmate tomorrow!',
        description: 'Loves open lines and sharp gambits. Happy to sacrifice material for rapid development and direct king threats.',
        tipOnLoss: "Gary loves sacrificing pawns for activity. Accept his gambits only when you can hold a solid defense, or decline and develop normally.",
        engineSettings: {
            depth: 3,
            skillLevel: 3,
            targetElo: 1000,
            blunderChance: 0.20,
            blunderType: 'tactical',
            multiPv: 3
        },
        preferredMoves: {
            w: ['e2e4', 'd2d4', 'f2f4'],
            b: ['c7c5', 'e7e5', 'd7d5']
        },
        styleWeights: {
            checkBonus: 30,
            captureBonus: 25,
            forwardPawnBonus: 15,
            kingAttackBonus: 25,
            castleBonus: 10,
            centerControlBonus: 15,
            defendBonus: -5
        }
    },
    {
        id: 'fiona',
        name: 'Fortress Fiona',
        tier: 2,
        tierName: 'Club Contenders',
        elo: 1200,
        avatar: '🏰',
        accentColor: '#06b6d4',
        styleTag: '🧱 Rock-Solid Positional',
        quote: 'Break my wall if you can. Every square is guarded.',
        description: 'Plays rock-solid setups like the London and Caro-Kann. Rarely makes obvious mistakes and grinds you down in endgames.',
        tipOnLoss: "Fiona doesn't give you free gifts. Look for subtle piece maneuvers, trade off her active defenders, and penetrate along open files.",
        engineSettings: {
            depth: 4,
            skillLevel: 6,
            targetElo: 1200,
            blunderChance: 0.12,
            blunderType: 'passive',
            multiPv: 3
        },
        preferredMoves: {
            w: ['d2d4', 'c1f4', 'e2e3'],
            b: ['c7c6', 'd7d5', 'g8f6']
        },
        styleWeights: {
            checkBonus: 10,
            captureBonus: 15,
            forwardPawnBonus: 5,
            kingAttackBonus: 10,
            castleBonus: 30,
            centerControlBonus: 25,
            defendBonus: 25
        }
    },
    {
        id: 'boris',
        name: 'Blitzing Boris',
        tier: 2,
        tierName: 'Club Contenders',
        elo: 1400,
        avatar: '🌪️',
        accentColor: '#ef4444',
        styleTag: '⚔️ Kingside Attacker',
        quote: 'The fastest route between two squares is a direct check!',
        description: 'Loves attacking chess. Swarms your king with knights and bishops, creates pin threats, and seeks rapid checkmates.',
        tipOnLoss: "Boris focuses all his fire on your king. Ensure your king is castled safely and trade down pieces to defuse his aggressive onslaught.",
        engineSettings: {
            depth: 5,
            skillLevel: 8,
            targetElo: 1400,
            blunderChance: 0.08,
            blunderType: 'aggressive',
            multiPv: 3
        },
        preferredMoves: {
            w: ['e2e4', 'g1f3', 'f1c4'],
            b: ['c7c5', 'g8f6', 'd7d6']
        },
        styleWeights: {
            checkBonus: 35,
            captureBonus: 25,
            forwardPawnBonus: 20,
            kingAttackBonus: 35,
            castleBonus: 15,
            centerControlBonus: 15,
            defendBonus: 5
        }
    },
    {
        id: 'maya',
        name: 'Tactician Maya',
        tier: 2,
        tierName: 'Club Contenders',
        elo: 1600,
        avatar: '🎯',
        accentColor: '#8b5cf6',
        styleTag: '🧩 Tactical Opportunist',
        quote: 'Two targets at once are always better than one.',
        description: 'Constantly hunts for forks, pins, skewers, and discovered attacks. Punishes any unprotected piece instantly.',
        tipOnLoss: "Maya thrives on tactical tricks. Always ask yourself after every move: 'Is any of my pieces undefended?' and guard them proactively.",
        engineSettings: {
            depth: 7,
            skillLevel: 10,
            targetElo: 1600,
            blunderChance: 0.05,
            blunderType: 'tactical',
            multiPv: 3
        },
        preferredMoves: {
            w: ['e2e4', 'g1f3', 'd2d4'],
            b: ['e7e5', 'g8f6', 'b8c6']
        },
        styleWeights: {
            checkBonus: 25,
            captureBonus: 25,
            forwardPawnBonus: 10,
            kingAttackBonus: 20,
            castleBonus: 15,
            centerControlBonus: 20,
            defendBonus: 20
        }
    },
    {
        id: 'priya',
        name: 'Positional Priya',
        tier: 3,
        tierName: 'Master Class',
        elo: 1800,
        avatar: '🦉',
        accentColor: '#3b82f6',
        styleTag: '🧭 Strategic Outpost Master',
        quote: 'Chess is won in the quiet squares you neglect.',
        description: 'Master of space and outposts. Squeezes opponents patiently, controls the center, and dominates open files with rooks.',
        tipOnLoss: "Priya restricts your piece activity before delivering the final blow. Fight hard for central squares (d4/d5/e4/e5) and challenge open files.",
        engineSettings: {
            depth: 9,
            skillLevel: 13,
            targetElo: 1800,
            blunderChance: 0.02,
            blunderType: 'none',
            multiPv: 3
        },
        preferredMoves: {
            w: ['d2d4', 'c2c4', 'g1f3'],
            b: ['d7d5', 'g8f6', 'e7e6']
        },
        styleWeights: {
            checkBonus: 10,
            captureBonus: 15,
            forwardPawnBonus: 15,
            kingAttackBonus: 15,
            castleBonus: 25,
            centerControlBonus: 35,
            defendBonus: 25
        }
    },
    {
        id: 'igor',
        name: 'Ironclad Igor',
        tier: 3,
        tierName: 'Master Class',
        elo: 2000,
        avatar: '🛡️',
        accentColor: '#6366f1',
        styleTag: '⚡ Counter-Puncher',
        quote: 'Your attack will shatter against my defense, then I strike.',
        description: 'Absorbs pressure calmly, keeps king safety absolute, and strikes back with venomous counter-tactics the moment you overextend.',
        tipOnLoss: "Igor lures you into over-committing your attack. Keep your structure sound and don't push pawns forward without adequate piece support.",
        engineSettings: {
            depth: 10,
            skillLevel: 16,
            targetElo: 2000,
            blunderChance: 0.01,
            blunderType: 'none',
            multiPv: 3
        },
        preferredMoves: {
            w: ['e2e4', 'd2d4', 'c2c4'],
            b: ['c7c5', 'e7e6', 'g8f6']
        },
        styleWeights: {
            checkBonus: 15,
            captureBonus: 20,
            forwardPawnBonus: 10,
            kingAttackBonus: 20,
            castleBonus: 30,
            centerControlBonus: 25,
            defendBonus: 30
        }
    },
    {
        id: 'viktor',
        name: 'Grandmaster Viktor',
        tier: 3,
        tierName: 'Master Class',
        elo: 2250,
        avatar: '🦅',
        accentColor: '#a855f7',
        styleTag: '👑 Dynamic Master',
        quote: 'Precision in every phase. No mistake goes unpunished.',
        description: 'Complete master of classical chess. Flawless opening knowledge, dynamic middlegame calculation, and razor-sharp endgame conversion.',
        tipOnLoss: "Playing Viktor requires championship consistency. Review your game in Game Analysis to discover where the slight inaccuracies accumulated.",
        engineSettings: {
            depth: 12,
            skillLevel: 19,
            targetElo: 2300,
            blunderChance: 0.0,
            blunderType: 'none',
            multiPv: 2
        },
        preferredMoves: {
            w: ['d2d4', 'e2e4', 'c2c4'],
            b: ['g8f6', 'c7c5', 'e7e6']
        },
        styleWeights: {
            checkBonus: 20,
            captureBonus: 20,
            forwardPawnBonus: 15,
            kingAttackBonus: 20,
            castleBonus: 20,
            centerControlBonus: 30,
            defendBonus: 25
        }
    },
    {
        id: 'atlas',
        name: 'Grandmaster Atlas (Stockfish Core)',
        tier: 4,
        tierName: 'The Apex Boss',
        elo: 2600,
        avatar: '🤖',
        accentColor: '#10b981',
        styleTag: '💎 Supreme Engine',
        quote: 'Pure calculation. Zero human fallibility.',
        description: 'Maximum strength Stockfish engine. Infallible endgame technique, deep tactical vision, and superhuman precision.',
        tipOnLoss: "Atlas plays near-perfect chess. Surviving against him is already a huge achievement — keep training your tactical accuracy!",
        engineSettings: {
            depth: 14,
            skillLevel: 20,
            targetElo: 2850,
            blunderChance: 0.0,
            blunderType: 'none',
            multiPv: 1
        },
        preferredMoves: {
            w: ['e2e4', 'd2d4', 'c2c4'],
            b: ['c7c5', 'e7e5', 'd7d5']
        },
        styleWeights: {
            checkBonus: 20,
            captureBonus: 20,
            forwardPawnBonus: 20,
            kingAttackBonus: 20,
            castleBonus: 20,
            centerControlBonus: 25,
            defendBonus: 25
        }
    }
];

// Campaign Progression Manager with LocalStorage Persistence
class BotCampaignManager {
    constructor() {
        this.storageKey = 'chess_bot_campaign_v1';
        this.state = this.loadState();
    }

    loadState() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && Array.isArray(parsed.unlockedBots) && parsed.unlockedBots.length > 0) {
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Failed to read bot campaign state from localStorage:', e);
        }

        // Default initial state: Pete is unlocked, active by default
        return {
            unlockedBots: ['pete'],
            defeatedBots: [],
            activeBotId: 'pete',
            stats: {
                pete: { wins: 0, losses: 0, draws: 0, bestMoves: null }
            }
        };
    }

    saveState() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.state));
        } catch (e) {
            console.warn('Failed to save bot campaign state to localStorage:', e);
        }
    }

    getAllBots() {
        return BOT_ROSTER;
    }

    getBot(botId) {
        return BOT_ROSTER.find(b => b.id === botId) || BOT_ROSTER[0];
    }

    getActiveBot() {
        return this.getBot(this.state.activeBotId);
    }

    setActiveBot(botId) {
        if (this.isUnlocked(botId)) {
            this.state.activeBotId = botId;
            this.saveState();
            return true;
        }
        return false;
    }

    isUnlocked(botId) {
        return this.state.unlockedBots.includes(botId);
    }

    isDefeated(botId) {
        return this.state.defeatedBots.includes(botId);
    }

    getBotStats(botId) {
        if (!this.state.stats[botId]) {
            this.state.stats[botId] = { wins: 0, losses: 0, draws: 0, bestMoves: null };
        }
        return this.state.stats[botId];
    }

    recordWin(botId, movesCount = null) {
        const stats = this.getBotStats(botId);
        stats.wins = (stats.wins || 0) + 1;
        if (movesCount && (!stats.bestMoves || movesCount < stats.bestMoves)) {
            stats.bestMoves = movesCount;
        }

        if (!this.state.defeatedBots.includes(botId)) {
            this.state.defeatedBots.push(botId);
        }

        // Unlock next bot in line
        const currentIndex = BOT_ROSTER.findIndex(b => b.id === botId);
        let newlyUnlockedBot = null;
        if (currentIndex !== -1 && currentIndex + 1 < BOT_ROSTER.length) {
            const nextBot = BOT_ROSTER[currentIndex + 1];
            if (!this.state.unlockedBots.includes(nextBot.id)) {
                this.state.unlockedBots.push(nextBot.id);
                newlyUnlockedBot = nextBot;
            }
        }

        this.saveState();
        return {
            newlyUnlockedBot,
            allCompleted: this.state.defeatedBots.length === BOT_ROSTER.length
        };
    }

    recordLoss(botId) {
        const stats = this.getBotStats(botId);
        stats.losses = (stats.losses || 0) + 1;
        this.saveState();
    }

    recordDraw(botId) {
        const stats = this.getBotStats(botId);
        stats.draws = (stats.draws || 0) + 1;
        this.saveState();
    }

    resetCampaign() {
        this.state = {
            unlockedBots: ['pete'],
            defeatedBots: [],
            activeBotId: 'pete',
            stats: {
                pete: { wins: 0, losses: 0, draws: 0, bestMoves: null }
            }
        };
        this.saveState();
    }

    unlockAllBots() {
        this.state.unlockedBots = BOT_ROSTER.map(b => b.id);
        this.saveState();
    }
}

// Bot Personality Move Evaluator
class BotMoveSelector {
    /**
     * Choose the best move among Stockfish candidates matching the bot's unique personality.
     * @param {Object} bot - Bot definition from BOT_ROSTER
     * @param {Chess} chessInstance - Current chess.js instance
     * @param {Array<string>} candidateMoves - Array of UCI move strings (e.g. ['e2e4', 'd2d4'])
     * @param {string} engineBestMove - The primary best move recommended by Stockfish
     * @returns {string} UCI move string
     */
    static selectBotMove(bot, chessInstance, candidateMoves = [], engineBestMove = null) {
        if (!bot) return engineBestMove;

        const legalMoves = chessInstance.moves({ verbose: true });
        if (legalMoves.length === 0) return null;

        const moveCount = chessInstance.history().length;
        const turnColor = chessInstance.turn(); // 'w' or 'b'

        // 1. Opening Book Flavor (First 2 full moves)
        if (moveCount < 4 && bot.preferredMoves && bot.preferredMoves[turnColor]) {
            const preferred = bot.preferredMoves[turnColor];
            for (const prefMove of preferred) {
                const match = legalMoves.find(m => (m.from + m.to) === prefMove);
                if (match) {
                    // 70% chance to follow favorite opening
                    if (Math.random() < 0.70) {
                        return prefMove;
                    }
                }
            }
        }

        // 2. Personality-Tailored Blunder Injection for Novices/Club Players
        const settings = bot.engineSettings || {};
        const blunderChance = settings.blunderChance || 0;
        if (blunderChance > 0 && Math.random() < blunderChance) {
            const blunderedMove = this.selectPersonalityBlunder(bot, legalMoves, chessInstance);
            if (blunderedMove) {
                return blunderedMove.from + blunderedMove.to + (blunderedMove.promotion || '');
            }
        }

        // 3. Multi-PV Candidate Move Scoring
        const candidates = (candidateMoves && candidateMoves.length > 0)
            ? candidateMoves
            : (engineBestMove ? [engineBestMove] : []);

        if (candidates.length <= 1) {
            return engineBestMove || (legalMoves[0].from + legalMoves[0].to);
        }

        // Score each candidate move based on bot style weights
        let highestScore = -Infinity;
        let bestCandidate = candidates[0];

        for (let i = 0; i < candidates.length; i++) {
            const uciMove = candidates[i];
            const moveObj = legalMoves.find(m => (m.from + m.to) === uciMove.substring(0, 4));
            if (!moveObj) continue;

            // Engine quality bonus: earlier MultiPV ranks get a modest baseline score
            const rankPenalty = i * 15; // 0 for PV1, -15 for PV2, -30 for PV3
            const styleScore = this.scoreMoveByStyle(bot, moveObj, chessInstance) - rankPenalty;

            if (styleScore > highestScore) {
                highestScore = styleScore;
                bestCandidate = uciMove;
            }
        }

        return bestCandidate || engineBestMove || (legalMoves[0].from + legalMoves[0].to);
    }

    /**
     * Score an individual move against a bot's personality weights
     */
    static scoreMoveByStyle(bot, moveObj, chessInstance) {
        const weights = bot.styleWeights || {};
        let score = 0;

        const isWhite = (moveObj.color === 'w');
        const toRow = parseInt(moveObj.to[1], 10);
        const toCol = moveObj.to.charCodeAt(0) - 97;

        // A. Check Bonus
        if (moveObj.san && (moveObj.san.includes('+') || moveObj.san.includes('#'))) {
            score += (weights.checkBonus || 0);
        }

        // B. Capture Bonus
        if (moveObj.captured) {
            const pieceVals = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
            const capturedVal = pieceVals[moveObj.captured] || 1;
            score += (weights.captureBonus || 0) * (capturedVal >= 3 ? 1.5 : 1.0);
        }

        // C. Forward Pawn Moves
        if (moveObj.piece === 'p') {
            const advancedRank = isWhite ? toRow : (9 - toRow);
            if (advancedRank >= 4) {
                score += (weights.forwardPawnBonus || 0) * (advancedRank - 3);
            }
        }

        // D. Castling (Kingside / Queenside)
        if (moveObj.san && (moveObj.san === 'O-O' || moveObj.san === 'O-O-O')) {
            score += (weights.castleBonus || 0);
        }

        // E. Center Control (e4, d4, e5, d5, c4, c5)
        const centerSquares = ['e4', 'd4', 'e5', 'd5', 'c4', 'c5', 'f4', 'f5'];
        if (centerSquares.includes(moveObj.to)) {
            score += (weights.centerControlBonus || 0);
        }

        // F. King Attack Distance (landing near enemy king)
        try {
            // Find enemy king square
            const board = chessInstance.board();
            let enemyKingSq = null;
            const enemyColor = isWhite ? 'b' : 'w';
            for (let r = 0; r < 8; r++) {
                for (let c = 0; c < 8; c++) {
                    const sq = board[r][c];
                    if (sq && sq.type === 'k' && sq.color === enemyColor) {
                        enemyKingSq = { row: 8 - r, col: c };
                        break;
                    }
                }
                if (enemyKingSq) break;
            }

            if (enemyKingSq && weights.kingAttackBonus) {
                const dist = Math.abs(toRow - enemyKingSq.row) + Math.abs(toCol - enemyKingSq.col);
                if (dist <= 3) {
                    score += weights.kingAttackBonus * (4 - dist);
                }
            }
        } catch (_) {}

        return score;
    }

    /**
     * Pick a blunder that mirrors the bot's personality
     */
    static selectPersonalityBlunder(bot, legalMoves, chessInstance) {
        const type = (bot.engineSettings && bot.engineSettings.blunderType) || 'generic';

        if (type === 'aggressive') {
            // Aggressive blunder: pushes pawns into danger or charges with minor pieces/queen
            const aggressiveMoves = legalMoves.filter(m => m.piece === 'p' || m.piece === 'q' || m.captured);
            if (aggressiveMoves.length > 0) {
                return aggressiveMoves[Math.floor(Math.random() * aggressiveMoves.length)];
            }
        } else if (type === 'passive') {
            // Passive blunder: retreats pieces backwards or makes timid pawn moves
            const timidMoves = legalMoves.filter(m => {
                const fromRow = parseInt(m.from[1], 10);
                const toRow = parseInt(m.to[1], 10);
                const isWhite = m.color === 'w';
                return isWhite ? (toRow <= fromRow) : (toRow >= fromRow);
            });
            if (timidMoves.length > 0) {
                return timidMoves[Math.floor(Math.random() * timidMoves.length)];
            }
        } else if (type === 'tactical') {
            // Sacrificial blunder: captures defended pieces or checks
            const checksOrCaptures = legalMoves.filter(m => m.captured || m.san.includes('+'));
            if (checksOrCaptures.length > 0) {
                return checksOrCaptures[Math.floor(Math.random() * checksOrCaptures.length)];
            }
        }

        // Generic fallback: random legal move
        return legalMoves[Math.floor(Math.random() * legalMoves.length)];
    }
}

// Export for browser and node
if (typeof window !== 'undefined') {
    window.BOT_ROSTER = BOT_ROSTER;
    window.BotCampaignManager = BotCampaignManager;
    window.BotMoveSelector = BotMoveSelector;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BOT_ROSTER, BotCampaignManager, BotMoveSelector };
}
