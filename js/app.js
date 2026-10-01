// Main Application Controller with Empirical Move-by-Move Stockfish Accuracy & Analysis Flip Support
document.addEventListener('DOMContentLoaded', () => {
    // Core Engine Instances
    const chess = new Chess();
    const evalEngine = new StockfishEngine();
    const botEngine = new StockfishEngine();
    const graphEngine = new StockfishEngine();
    const puzzleManager = new PuzzleManager();

    // DOM Elements
    const boardEl = document.getElementById('chessboard');
    const svgOverlayEl = document.getElementById('board-svg-overlay');
    const evalBarWhite = document.getElementById('eval-bar-white');
    const evalBarBlack = document.getElementById('eval-bar-black');
    const evalTextEl = document.getElementById('eval-text');
    const moveTableBody = document.getElementById('move-table-body');
    const moveCountText = document.getElementById('move-count-text');
    const turnIndicator = document.getElementById('turn-indicator');

    // Promotion Modal DOM
    const promotionModal = document.getElementById('promotion-modal');
    const promotionPiecesGrid = document.getElementById('promotion-pieces-grid');

    // Captured Pieces DOM
    const whiteCapturedEl = document.getElementById('white-captured');
    const blackCapturedEl = document.getElementById('black-captured');

    // Evaluation Graph Canvas
    const evalGraphCanvas = document.getElementById('eval-graph-canvas');

    // Nav Tabs & Cards DOM
    const tabPlay = document.getElementById('tab-play');
    const tabAnalysis = document.getElementById('tab-analysis');
    const tabPuzzles = document.getElementById('tab-puzzles');
    const playControlsCard = document.getElementById('play-controls-card');
    const analysisControlsCard = document.getElementById('analysis-controls-card');
    const puzzlesControlsCard = document.getElementById('puzzles-controls-card');
    const moveHistoryCard = document.getElementById('move-history-card');

    // Controls DOM
    const selectDifficulty = document.getElementById('select-difficulty');
    const selectSide = document.getElementById('select-side');
    const btnNewGame = document.getElementById('btn-new-game');
    const btnUndo = document.getElementById('btn-undo');
    const btnFlip = document.getElementById('btn-flip');
    const chkShowHints = document.getElementById('chk-show-hints');

    // Analysis DOM
    const btnOpenImport = document.getElementById('btn-open-import');
    const btnFlipAnalysis = document.getElementById('btn-flip-analysis');
    const pgnModal = document.getElementById('pgn-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnSubmitPgn = document.getElementById('btn-submit-pgn');
    const pgnTextarea = document.getElementById('pgn-textarea');

    const selectSavedGames = document.getElementById('select-saved-games');
    const whiteAccuracyVal = document.getElementById('white-accuracy-val');
    const blackAccuracyVal = document.getElementById('black-accuracy-val');

    const btnFirstMove = document.getElementById('btn-first-move');
    const btnPrevMove = document.getElementById('btn-prev-move');
    const btnNextMove = document.getElementById('btn-next-move');
    const btnLastMove = document.getElementById('btn-last-move');
    const recTextEl = document.getElementById('recommendation-text');
    const btnBestMoveSim = document.getElementById('btn-best-move-sim');

    // Puzzles DOM
    const selectPuzzleCategory = document.getElementById('select-puzzle-category');
    const selectPuzzleRating = document.getElementById('select-puzzle-rating');
    const btnNextPuzzle = document.getElementById('btn-next-puzzle');
    const btnPuzzleHint = document.getElementById('btn-puzzle-hint');
    const puzzleScoreBadge = document.getElementById('puzzle-score-badge');
    const puzzleDescription = document.getElementById('puzzle-description');

    // App State
    let currentMode = 'play'; // 'play', 'analysis', or 'puzzles'
    let playerColor = 'w';
    let isFlipped = false;
    let selectedSquare = null;
    let moveHistory = [];
    let prevEvalScore = 0;

    // Default Historical Masterpiece for Analysis Tab Fallback
    const DEFAULT_MASTER_GAME = PgnGameParser.parsePGN(`[Event "Opera House Masterpiece"]
[Site "Paris FRA"]
[Date "1858.11.02"]
[Result "1-0"]
[White "Paul Morphy"]
[Black "Duke Karl / Count Isouard"]
[ECO "C41"]
[WhiteElo "2600"]
[BlackElo "2000"]

1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0`);

    // --- Saved Games Library & LocalStorage Auto-Sanitization ---
    function loadSavedGamesFromStorage() {
        try {
            const raw = localStorage.getItem('chessapp_saved_games');
            if (!raw) return [DEFAULT_MASTER_GAME];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [DEFAULT_MASTER_GAME];
            const validGames = parsed.filter(g => g && Array.isArray(g.moves) && g.moves.length > 0 && g.headers && g.headers.white);
            return validGames.length > 0 ? validGames : [DEFAULT_MASTER_GAME];
        } catch (e) {
            console.warn('Corrupt localStorage data auto-purged:', e);
            try { localStorage.removeItem('chessapp_saved_games'); } catch (err) {}
            return [DEFAULT_MASTER_GAME];
        }
    }

    function saveGamesToStorage(games) {
        try {
            localStorage.setItem('chessapp_saved_games', JSON.stringify(games));
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    }

    // Analysis State
    let analyzedGame = null;
    let analysisStep = 0;
    let gameEvalScores = []; // Array of numerical scores per move for graph
    let savedGames = loadSavedGamesFromStorage();
    let simulationState = {
        active: false,
        startAnalysisStep: 0,
        currentIndex: 0,
        line: []
    };
    let freeModeState = {
        active: false,
        startStep: 0,
        currentIndex: 0,
        branch: []
    };

    // Puzzle & Promotion Lock State
    let isPuzzleLocked = false;
    let autoNextTimeout = null;

    // Board Renderer Initialization
    const boardRenderer = new BoardRenderer(boardEl, svgOverlayEl, {
        onSquareClick: handleSquareClick,
        onPieceDrop: handlePieceDrop
    });

    evalEngine.setSkillLevel(20, 3000);
    populateSavedGamesDropdown();
    initGame();

    function initGame() {
        chess.reset();
        moveHistory = [];
        prevEvalScore = 0;
        gameEvalScores = [0];
        selectedSquare = null;
        isPuzzleLocked = false;
        if (autoNextTimeout) clearTimeout(autoNextTimeout);
        boardRenderer.clearHighlights();
        updateUI();
        triggerEngineEvaluation();
    }

    // --- Tab Mode Switcher ---
    tabPlay.addEventListener('click', () => {
        currentMode = 'play';
        setActiveTab(tabPlay);
        boardRenderer.clearHighlights();
        playControlsCard.style.display = 'block';
        analysisControlsCard.style.display = 'none';
        puzzlesControlsCard.style.display = 'none';
        moveHistoryCard.style.display = 'flex';
        initGame();
    });

    tabAnalysis.addEventListener('click', () => {
        currentMode = 'analysis';
        setActiveTab(tabAnalysis);
        boardRenderer.clearHighlights();
        playControlsCard.style.display = 'none';
        analysisControlsCard.style.display = 'block';
        puzzlesControlsCard.style.display = 'none';
        moveHistoryCard.style.display = 'flex';

        if (analyzedGame) {
            if (analyzedGame.evalScores && analyzedGame.evalScores.length > 0) {
                gameEvalScores = [...analyzedGame.evalScores];
            }
            if (analyzedGame.accuracy) {
                if (whiteAccuracyVal) whiteAccuracyVal.textContent = `${analyzedGame.accuracy.white}%`;
                if (blackAccuracyVal) blackAccuracyVal.textContent = `${analyzedGame.accuracy.black}%`;
            }
            jumpToAnalysisStep(analysisStep);
        } else if (savedGames.length > 0) {
            loadAnalyzedGame(savedGames[0]);
        } else {
            recTextEl.textContent = "Click 'Import PGN' above to load a game for step-by-step Stockfish analysis.";
            drawEvalGraph();
        }
        setTimeout(drawEvalGraph, 50);
    });

    tabPuzzles.addEventListener('click', () => {
        currentMode = 'puzzles';
        setActiveTab(tabPuzzles);
        boardRenderer.clearHighlights();
        playControlsCard.style.display = 'none';
        analysisControlsCard.style.display = 'none';
        puzzlesControlsCard.style.display = 'block';
        moveHistoryCard.style.display = 'none';
        loadNextPuzzle();
    });

    function setActiveTab(activeBtn) {
        [tabPlay, tabAnalysis, tabPuzzles].forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    // --- Play & Analysis Controls ---
    selectSide.addEventListener('change', (e) => {
        playerColor = e.target.value;
        isFlipped = (playerColor === 'b');
        boardRenderer.setFlipped(isFlipped);
        initGame();
        if (playerColor === 'b') {
            makeAIMove();
        }
    });

    btnNewGame.addEventListener('click', initGame);

    btnUndo.addEventListener('click', () => {
        if (currentMode !== 'play') return;
        chess.undo();
        chess.undo();
        moveHistory.pop();
        moveHistory.pop();
        if (gameEvalScores.length > 2) {
            gameEvalScores.pop();
            gameEvalScores.pop();
        }
        selectedSquare = null;
        updateUI();
        triggerEngineEvaluation();
    });

    btnFlip.addEventListener('click', () => {
        isFlipped = !isFlipped;
        boardRenderer.setFlipped(isFlipped);
        updateUI();
    });

    if (btnFlipAnalysis) {
        btnFlipAnalysis.addEventListener('click', () => {
            isFlipped = !isFlipped;
            boardRenderer.setFlipped(isFlipped);
            updateUI();
            if (currentMode === 'analysis' && analyzedGame) {
                drawEvalGraph();
            }
        });
    }

    chkShowHints.addEventListener('change', () => {
        if (!chkShowHints.checked) {
            boardRenderer.clearArrows();
        } else if (currentMode === 'play') {
            triggerEngineEvaluation();
        }
    });

    // --- Pawn Promotion Choice Interceptor ---
    function checkIsPromotionMove(from, to) {
        const piece = chess.get(from);
        if (!piece || piece.type !== 'p') return false;
        if (piece.color === 'w' && to[1] !== '8') return false;
        if (piece.color === 'b' && to[1] !== '1') return false;

        const legalMoves = chess.moves({ square: from, verbose: true });
        return legalMoves.some(m => m.to === to);
    }

    function promptPawnPromotion(from, to, color, callback) {
        promotionPiecesGrid.innerHTML = '';
        const choices = ['q', 'r', 'b', 'n'];

        choices.forEach(type => {
            const btn = document.createElement('button');
            btn.className = 'promo-btn';
            btn.innerHTML = getPieceSVG(color, type);

            btn.addEventListener('click', () => {
                promotionModal.classList.remove('active');
                callback(type);
            });

            promotionPiecesGrid.appendChild(btn);
        });

        promotionModal.classList.add('active');
    }

    // --- Square & Drag Interactions ---
    function handleSquareClick(sqName) {
        if (currentMode === 'analysis') {
            handleAnalysisSquareClick(sqName);
            return;
        }

        if (currentMode === 'puzzles') {
            if (isPuzzleLocked) return;
            handlePuzzleSquareClick(sqName);
            return;
        }

        if (chess.turn() !== playerColor) return;

        if (selectedSquare === sqName) {
            selectedSquare = null;
            updateUI();
            return;
        }

        if (selectedSquare) {
            const isPromo = checkIsPromotionMove(selectedSquare, sqName);
            if (isPromo) {
                promptPawnPromotion(selectedSquare, sqName, playerColor, (chosenPiece) => {
                    executeMoveWithPromotion(selectedSquare, sqName, chosenPiece);
                    selectedSquare = null;
                });
                return;
            }

            const move = attemptMove(selectedSquare, sqName);
            if (move) {
                selectedSquare = null;
                return;
            }
        }

        const piece = chess.get(sqName);
        if (piece && piece.color === playerColor) {
            selectedSquare = sqName;
            updateUI();
        } else {
            selectedSquare = null;
            updateUI();
        }
    }

    function handleAnalysisSquareClick(sqName) {
        if (!analyzedGame) return;

        if (selectedSquare === sqName) {
            selectedSquare = null;
            updateAnalysisBoardView();
            return;
        }

        if (selectedSquare) {
            const sideColor = chess.turn();
            const isPromo = checkIsPromotionMove(selectedSquare, sqName);
            if (isPromo) {
                promptPawnPromotion(selectedSquare, sqName, sideColor, (chosenPiece) => {
                    executeAnalysisFreeMove(selectedSquare, sqName, chosenPiece);
                    selectedSquare = null;
                });
                return;
            }

            const moved = executeAnalysisFreeMove(selectedSquare, sqName, 'q');
            if (moved) {
                selectedSquare = null;
                return;
            }
        }

        const piece = chess.get(sqName);
        if (piece && piece.color === chess.turn()) {
            selectedSquare = sqName;
            updateAnalysisBoardView();
        } else {
            selectedSquare = null;
            updateAnalysisBoardView();
        }
    }

    function handlePieceDrop(fromSq, toSq) {
        if (currentMode === 'analysis') {
            handleAnalysisPieceDrop(fromSq, toSq);
            return;
        }
        
        if (currentMode === 'puzzles') {
            if (isPuzzleLocked) return;
            attemptPuzzleMove(fromSq, toSq);
            return;
        }

        if (chess.turn() !== playerColor) return;

        const isPromo = checkIsPromotionMove(fromSq, toSq);
        if (isPromo) {
            promptPawnPromotion(fromSq, toSq, playerColor, (chosenPiece) => {
                executeMoveWithPromotion(fromSq, toSq, chosenPiece);
                selectedSquare = null;
            });
            return;
        }

        attemptMove(fromSq, toSq);
        selectedSquare = null;
    }

    function handleAnalysisPieceDrop(fromSq, toSq) {
        if (!analyzedGame) return;
        const sideColor = chess.turn();
        const isPromo = checkIsPromotionMove(fromSq, toSq);
        if (isPromo) {
            promptPawnPromotion(fromSq, toSq, sideColor, (chosenPiece) => {
                executeAnalysisFreeMove(fromSq, toSq, chosenPiece);
                selectedSquare = null;
            });
            return;
        }

        executeAnalysisFreeMove(fromSq, toSq, 'q');
        selectedSquare = null;
    }

    function attemptMove(from, to) {
        return executeMoveWithPromotion(from, to, 'q');
    }

    function executeMoveWithPromotion(from, to, promoPiece = 'q') {
        const legalMoves = chess.moves({ square: from, verbose: true });
        const targetMove = legalMoves.find(m => m.to === to);
        if (!targetMove) return false;

        const moveObj = chess.move({ from: from, to: to, promotion: promoPiece });
        if (moveObj) {
            if (chess.in_check()) sounds.playCheck();
            else if (moveObj.captured) sounds.playCapture();
            else sounds.playMove();

            moveHistory.push(moveObj);
            updateUI();
            triggerEngineEvaluation(moveObj);

            if (!chess.game_over() && chess.turn() !== playerColor) {
                setTimeout(makeAIMove, 400);
            }
            return true;
        }
        return false;
    }

    // AI Bot Move Logic (Bulletproof Execution with Fallback Timer)
    function makeAIMove() {
        if (chess.game_over() || chess.turn() === playerColor) return;

        const diffLevel = parseInt(selectDifficulty.value, 10);
        let depth = 4;
        let skillLevel = 6;
        let targetElo = 1400;

        if (diffLevel === 1) { // Beginner (~800 ELO)
            depth = 1; skillLevel = 0; targetElo = 700;
        } else if (diffLevel === 4) { // Intermediate (~1400 ELO)
            depth = 4; skillLevel = 6; targetElo = 1400;
        } else if (diffLevel === 8) { // Advanced (~1800 ELO)
            depth = 8; skillLevel = 12; targetElo = 1800;
        } else { // Grandmaster (2500+ ELO)
            depth = 12; skillLevel = 20; targetElo = 2800;
        }

        let botMoved = false;

        function executeBotMove(from, to, promo = 'q') {
            if (botMoved || chess.turn() === playerColor) return;
            const moveObj = chess.move({ from, to, promotion: promo || 'q' });
            if (moveObj) {
                botMoved = true;
                if (chess.in_check()) sounds.playCheck();
                else if (moveObj.captured) sounds.playCapture();
                else sounds.playMove();

                moveHistory.push(moveObj);
                updateUI();
                triggerEngineEvaluation(moveObj);
            }
        }

        // Safety fallback timer: Ensure bot always moves within 900ms
        const fallbackTimer = setTimeout(() => {
            if (botMoved || chess.turn() === playerColor) return;
            const legalMoves = chess.moves({ verbose: true });
            if (legalMoves.length > 0) {
                const choice = legalMoves[Math.floor(Math.random() * legalMoves.length)];
                executeBotMove(choice.from, choice.to, choice.promotion || 'q');
            }
        }, 900);

        botEngine.setSkillLevel(skillLevel, targetElo);

        botEngine.getBestMove(chess.fen(), depth, (bestMoveStr) => {
            clearTimeout(fallbackTimer);
            if (botMoved || !bestMoveStr || chess.turn() === playerColor) return;

            let chosenMove = bestMoveStr;
            const legalMoves = chess.moves({ verbose: true });

            if (diffLevel === 1 && Math.random() < 0.35 && legalMoves.length > 0) {
                const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];
                chosenMove = randomMove.from + randomMove.to;
            }

            if (chosenMove && chosenMove.length >= 4) {
                const from = chosenMove.substring(0, 2);
                const to = chosenMove.substring(2, 4);
                const promo = chosenMove.substring(4, 5);

                executeBotMove(from, to, promo);
            }

            if (!botMoved && legalMoves.length > 0) {
                const choice = legalMoves[Math.floor(Math.random() * legalMoves.length)];
                executeBotMove(choice.from, choice.to, choice.promotion || 'q');
            }
        });
    }

    // Evaluation Bar Buffering & Real-Time Depth 14 Analysis Tracking
    function triggerEngineEvaluation(lastMoveObj = null) {
        evalTextEl.classList.add('calculating');
        
        const isWhiteTurn = (chess.turn() === 'w');
        evalEngine.evaluatePosition(chess.fen(), 14, (evalRes) => {
            evalTextEl.classList.remove('calculating');
            updateEvalBar(evalRes.score, evalRes.isMate);

            let numScore = parseFloat(evalRes.score) || 0;
            if (evalRes.isMate) numScore = evalRes.score.includes('-') ? -10 : 10;

            if (currentMode === 'analysis' && analyzedGame) {
                gameEvalScores[analysisStep] = numScore;
                if (!analyzedGame.evalScores) analyzedGame.evalScores = [];
                analyzedGame.evalScores[analysisStep] = numScore;
            } else {
                gameEvalScores[moveHistory.length] = numScore;
            }

            if (lastMoveObj && currentMode === 'play') {
                const classification = StockfishEngine.classifyMove(prevEvalScore, evalRes.score, !isWhiteTurn);
                lastMoveObj.quality = classification;
                renderMoveTable();
            }
            prevEvalScore = evalRes.score;

            if (currentMode === 'play' && chkShowHints.checked && evalRes.bestMove && chess.turn() === playerColor) {
                const from = evalRes.bestMove.substring(0, 2);
                const to = evalRes.bestMove.substring(2, 4);
                boardRenderer.drawArrow(from, to, '#10b981', 10);
            }

            if (currentMode === 'analysis' && evalRes.bestMove) {
                const from = evalRes.bestMove.substring(0, 2);
                const to = evalRes.bestMove.substring(2, 4);
                const turnName = chess.turn() === 'w' ? "White" : "Black";
                const arrowColor = chess.turn() === 'w' ? '#10b981' : '#38bdf8';
                boardRenderer.drawArrow(from, to, arrowColor, 14);

                recTextEl.innerHTML = `
                    <span style="font-size: 0.725rem; color: var(--text-muted);">Stockfish Eval: <strong>${evalRes.score}</strong> (${turnName} to move)</span><br>
                    Best Move for ${turnName}: <strong style="color: ${arrowColor}; font-size: 0.95rem;">${from.toUpperCase()} ➔ ${to.toUpperCase()}</strong>
                `;
            }

            if (currentMode === 'analysis') {
                drawEvalGraph();
            }
        });
    }

    function updateEvalBar(scoreStr, isMate) {
        evalTextEl.textContent = scoreStr;
        let numScore = parseFloat(scoreStr) || 0;
        if (isMate) {
            numScore = scoreStr.includes('-') ? -10 : 10;
        }

        let effectiveScore = isFlipped ? -numScore : numScore;
        const winProb = 1 / (1 + Math.pow(10, -effectiveScore / 4));
        const whitePct = Math.min(Math.max(winProb * 100, 5), 95);
        const blackPct = 100 - whitePct;

        evalBarBlack.style.height = `${blackPct}%`;
    }

    // --- Interactive Evaluation Line Graph Drawing ---
    function drawEvalGraph() {
        if (!evalGraphCanvas) return;
        const ctx = evalGraphCanvas.getContext('2d');
        const parent = evalGraphCanvas.parentElement;
        const rect = parent.getBoundingClientRect();

        if (rect.width === 0) return;

        evalGraphCanvas.width = rect.width;
        evalGraphCanvas.height = 50;

        const w = evalGraphCanvas.width;
        const h = 50;

        ctx.clearRect(0, 0, w, h);

        const totalMoves = analyzedGame ? analyzedGame.moves.length : moveHistory.length;
        const zeroY = h / 2;

        // Zero line (Equality 0.0)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, zeroY);
        ctx.lineTo(w, zeroY);
        ctx.stroke();
        ctx.setLineDash([]);

        if (totalMoves === 0) return;

        // Fill area under line (Soft Emerald Tint)
        ctx.beginPath();
        for (let i = 0; i <= totalMoves; i++) {
            const x = (i / totalMoves) * w;
            let val = (gameEvalScores && gameEvalScores[i] !== undefined) ? gameEvalScores[i] : 0;
            if (isFlipped) val = -val;

            const clampedVal = Math.min(Math.max(val, -8), 8);
            const y = zeroY - (clampedVal / 8) * (h / 2 - 6);

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.lineTo(w, zeroY);
        ctx.lineTo(0, zeroY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.fill();

        // Plot main evaluation line
        ctx.beginPath();
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;

        for (let i = 0; i <= totalMoves; i++) {
            const x = (i / totalMoves) * w;
            let val = (gameEvalScores && gameEvalScores[i] !== undefined) ? gameEvalScores[i] : 0;
            if (isFlipped) val = -val;

            const clampedVal = Math.min(Math.max(val, -8), 8);
            const y = zeroY - (clampedVal / 8) * (h / 2 - 6);

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Cursor Indicator for current analysisStep
        const currentStep = Math.min(analysisStep, totalMoves);
        const cursorX = (currentStep / totalMoves) * w;
        ctx.strokeStyle = freeModeState.active ? 'rgba(59, 130, 246, 0.35)' : '#3b82f6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cursorX, 0);
        ctx.lineTo(cursorX, h);
        ctx.stroke();

        // Cursor Dot
        let currentVal = (gameEvalScores && gameEvalScores[currentStep] !== undefined) ? gameEvalScores[currentStep] : 0;
        if (isFlipped) currentVal = -currentVal;
        const currentClamped = Math.min(Math.max(currentVal, -8), 8);
        const cursorY = zeroY - (currentClamped / 8) * (h / 2 - 6);

        ctx.fillStyle = freeModeState.active ? 'rgba(59, 130, 246, 0.35)' : '#3b82f6';
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Additional Free Mode Graph Line (Custom Variation Branch)
        if (freeModeState.active && freeModeState.branch.length > 0) {
            ctx.beginPath();
            ctx.strokeStyle = '#c084fc'; // Vibrant purple
            ctx.lineWidth = 2.5;

            for (let k = 0; k < freeModeState.branch.length; k++) {
                const stepIdx = freeModeState.startStep + k;
                const x = (stepIdx / totalMoves) * w;
                let val = (freeModeState.branch[k] && freeModeState.branch[k].score !== undefined) ? freeModeState.branch[k].score : 0;
                if (isFlipped) val = -val;

                const clampedVal = Math.min(Math.max(val, -8), 8);
                const y = zeroY - (clampedVal / 8) * (h / 2 - 6);

                if (k === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Free Mode Active Step Dot Indicator
            const activeBranchIdx = freeModeState.currentIndex;
            const activeStepIdx = freeModeState.startStep + activeBranchIdx;
            const freeX = (activeStepIdx / totalMoves) * w;
            let activeVal = (freeModeState.branch[activeBranchIdx] && freeModeState.branch[activeBranchIdx].score !== undefined) ? freeModeState.branch[activeBranchIdx].score : 0;
            if (isFlipped) activeVal = -activeVal;
            const activeClamped = Math.min(Math.max(activeVal, -8), 8);
            const freeY = zeroY - (activeClamped / 8) * (h / 2 - 6);

            ctx.fillStyle = '#c084fc';
            ctx.beginPath();
            ctx.arc(freeX, freeY, 5.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    // Click on Graph to Jump to Move
    if (evalGraphCanvas) {
        evalGraphCanvas.parentElement.addEventListener('click', (e) => {
            if (currentMode !== 'analysis' || !analyzedGame) return;
            const rect = evalGraphCanvas.parentElement.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const ratio = clickX / rect.width;
            const targetStep = Math.round(ratio * analyzedGame.moves.length);
            jumpToAnalysisStep(targetMoveStep(targetStep));
        });
    }

    function targetMoveStep(step) {
        return Math.max(0, Math.min(step, analyzedGame ? analyzedGame.moves.length : 0));
    }

    // --- Captured Pieces Summary Tracker (Fixed 14px Icons) ---
    function updateCapturedPiecesTracker() {
        const board = chess.board();
        const initialCounts = { p: 8, n: 2, b: 2, r: 2, q: 1 };

        const currentCounts = {
            w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
            b: { p: 0, n: 0, b: 0, r: 0, q: 0 }
        };

        for (let r = 0; r < 8; r++) {
            for (let f = 0; f < 8; f++) {
                const piece = board[r][f];
                if (piece && piece.type !== 'k') {
                    currentCounts[piece.color][piece.type]++;
                }
            }
        }

        const whiteCaptured = [];
        let whiteAdvantage = 0;
        const blackCaptured = [];
        let blackAdvantage = 0;

        const pieceValues = { p: 1, n: 3, b: 3, r: 5, q: 9 };

        ['q', 'r', 'b', 'n', 'p'].forEach(type => {
            const blackLost = initialCounts[type] - currentCounts.b[type];
            for (let i = 0; i < blackLost; i++) {
                whiteCaptured.push(getPieceSVG('b', type));
                whiteAdvantage += pieceValues[type];
            }

            const whiteLost = initialCounts[type] - currentCounts.w[type];
            for (let i = 0; i < whiteLost; i++) {
                blackCaptured.push(getPieceSVG('w', type));
                blackAdvantage += pieceValues[type];
            }
        });

        whiteCapturedEl.innerHTML = whiteCaptured.map(svg => `<span class="captured-icon">${svg}</span>`).join('');
        if (whiteAdvantage > blackAdvantage) {
            whiteCapturedEl.innerHTML += `<span class="captured-score">+${whiteAdvantage - blackAdvantage}</span>`;
        }

        blackCapturedEl.innerHTML = blackCaptured.map(svg => `<span class="captured-icon">${svg}</span>`).join('');
        if (blackAdvantage > whiteAdvantage) {
            blackCapturedEl.innerHTML += `<span class="captured-score">+${blackAdvantage - whiteAdvantage}</span>`;
        }
    }

    function populateSavedGamesDropdown() {
        selectSavedGames.innerHTML = '<option value="">-- Select Saved Game --</option>';
        savedGames.forEach((g, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = `${g.headers.white} vs ${g.headers.black} (${g.headers.result || '*'})`;
            selectSavedGames.appendChild(opt);
        });
    }

    selectSavedGames.addEventListener('change', (e) => {
        const idx = e.target.value;
        if (idx !== '') {
            loadAnalyzedGame(savedGames[parseInt(idx, 10)]);
        }
    });

    const btnResetStorage = document.getElementById('btn-reset-storage');
    if (btnResetStorage) {
        btnResetStorage.addEventListener('click', () => {
            if (confirm('Clear local browser storage and restore default master games?')) {
                try {
                    localStorage.removeItem('chessapp_saved_games');
                } catch (e) {}
                savedGames = [DEFAULT_MASTER_GAME];
                populateSavedGamesDropdown();
                loadAnalyzedGame(DEFAULT_MASTER_GAME);
            }
        });
    }

    // --- Modal Sub-Tab Switching & Chess.com Game Importer ---
    const tabImportChesscom = document.getElementById('tab-import-chesscom');
    const tabImportPgn = document.getElementById('tab-import-pgn');
    const sectionChesscomImport = document.getElementById('section-chesscom-import');
    const sectionPgnImport = document.getElementById('section-pgn-import');

    if (tabImportChesscom && tabImportPgn) {
        tabImportChesscom.addEventListener('click', () => {
            tabImportChesscom.classList.add('active');
            tabImportPgn.classList.remove('active');
            sectionChesscomImport.style.display = 'block';
            sectionPgnImport.style.display = 'none';
        });

        tabImportPgn.addEventListener('click', () => {
            tabImportPgn.classList.add('active');
            tabImportChesscom.classList.remove('active');
            sectionPgnImport.style.display = 'block';
            sectionChesscomImport.style.display = 'none';
        });
    }

    btnOpenImport.addEventListener('click', () => pgnModal.classList.add('active'));
    btnCloseModal.addEventListener('click', () => pgnModal.classList.remove('active'));

    btnSubmitPgn.addEventListener('click', () => {
        const pgnText = pgnTextarea.value.trim();
        if (!pgnText) return;

        const parsed = PgnGameParser.parsePGN(pgnText);
        if (parsed && parsed.moves.length > 0) {
            parsed.evalScores = new Array(parsed.moves.length + 1).fill(0);
            parsed.accuracy = { white: "100.0", black: "100.0" };
            savedGames.unshift(parsed);
            if (savedGames.length > 15) savedGames.pop();
            saveGamesToStorage(savedGames);
            populateSavedGamesDropdown();

            pgnModal.classList.remove('active');
            loadAnalyzedGame(parsed);
        } else {
            alert('Could not parse PGN. Please check the notation format.');
        }
    });

    // Chess.com Public REST API User Games Fetcher
    const chesscomUsernameInput = document.getElementById('chesscom-username-input');
    const btnFetchChesscom = document.getElementById('btn-fetch-chesscom');
    const chesscomStatus = document.getElementById('chesscom-status');
    const chesscomGamesList = document.getElementById('chesscom-games-list');

    if (btnFetchChesscom && chesscomUsernameInput) {
        btnFetchChesscom.addEventListener('click', () => handleChesscomFetch());
        chesscomUsernameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleChesscomFetch();
        });
    }

    async function handleChesscomFetch() {
        const username = chesscomUsernameInput.value.trim();
        if (!username) {
            chesscomStatus.textContent = '❌ Please enter a Chess.com username.';
            chesscomStatus.style.color = '#f87171';
            return;
        }

        chesscomStatus.textContent = `⏳ Fetching archives for "${username}"...`;
        chesscomStatus.style.color = 'var(--accent-blue)';
        chesscomGamesList.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 1.5rem 0; font-size: 0.8rem;">
                Loading games from Chess.com API...
            </div>
        `;
        btnFetchChesscom.disabled = true;

        try {
            const games = await fetchChessComUserGames(username, 10);
            btnFetchChesscom.disabled = false;

            if (!games || games.length === 0) {
                chesscomStatus.textContent = `⚠️ No recent games found for "${username}".`;
                chesscomStatus.style.color = '#fbbf24';
                chesscomGamesList.innerHTML = `
                    <div style="text-align: center; color: var(--text-muted); padding: 1.5rem 0; font-size: 0.8rem;">
                        No games played recently or account has no public archives.
                    </div>
                `;
                return;
            }

            chesscomStatus.textContent = `✅ Found ${games.length} games for "${username}":`;
            chesscomStatus.style.color = 'var(--accent-emerald)';
            renderChessComGamesList(games);

        } catch (err) {
            btnFetchChesscom.disabled = false;
            chesscomStatus.textContent = `❌ ${err.message}`;
            chesscomStatus.style.color = '#f87171';
            chesscomGamesList.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 1.5rem 0; font-size: 0.8rem;">
                    Failed to load games. Verify the username and internet connection.
                </div>
            `;
        }
    }

    async function fetchChessComUserGames(username, limit = 10) {
        const cleanUser = username.trim().toLowerCase();
        const archivesUrl = `https://api.chess.com/pub/player/${encodeURIComponent(cleanUser)}/games/archives`;

        const archivesRes = await fetch(archivesUrl);
        if (archivesRes.status === 404) {
            throw new Error(`User "${username}" not found on Chess.com.`);
        }
        if (!archivesRes.ok) {
            throw new Error(`Chess.com API error (HTTP ${archivesRes.status}).`);
        }

        const archivesData = await archivesRes.json();
        const archiveUrls = archivesData.archives || [];
        if (archiveUrls.length === 0) return [];

        const collectedGames = [];
        // Traverse recent monthly archives backwards to get the most recent games
        for (let i = archiveUrls.length - 1; i >= 0 && collectedGames.length < limit; i--) {
            const monthUrl = archiveUrls[i];
            try {
                const monthRes = await fetch(monthUrl);
                if (!monthRes.ok) continue;
                const monthData = await monthRes.json();
                const monthGames = monthData.games || [];

                for (let j = monthGames.length - 1; j >= 0 && collectedGames.length < limit; j--) {
                    const g = monthGames[j];
                    if (g.pgn && (g.rules === 'chess' || !g.rules)) {
                        collectedGames.push(g);
                    }
                }
            } catch (e) {
                console.warn('Failed fetching archive month:', monthUrl, e);
            }
        }
        return collectedGames;
    }

    function renderChessComGamesList(games) {
        chesscomGamesList.innerHTML = '';
        games.forEach((game) => {
            const whiteUser = game.white?.username || 'White';
            const whiteRating = game.white?.rating || '?';
            const blackUser = game.black?.username || 'Black';
            const blackRating = game.black?.rating || '?';
            const timeClass = (game.time_class || 'game').toLowerCase();
            const dateStr = game.end_time ? new Date(game.end_time * 1000).toLocaleDateString() : '';

            let badgeClass = 'game-badge-blitz';
            if (timeClass === 'bullet') badgeClass = 'game-badge-bullet';
            else if (timeClass === 'rapid') badgeClass = 'game-badge-rapid';
            else if (timeClass === 'daily') badgeClass = 'game-badge-daily';

            const card = document.createElement('div');
            card.className = 'chesscom-game-card';
            card.innerHTML = `
                <div class="chesscom-game-main">
                    <div class="chesscom-game-players">
                        ⚪ ${whiteUser} (${whiteRating}) vs ⚫ ${blackUser} (${blackRating})
                    </div>
                    <div class="chesscom-game-meta">
                        <span class="badge ${badgeClass}">${timeClass.toUpperCase()}</span>
                        <span>📅 ${dateStr}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-sm btn-load-chesscom-game" style="padding: 0.25rem 0.6rem; font-size: 0.72rem; white-space: nowrap;">
                    🔍 Analyze
                </button>
            `;

            const btnLoad = card.querySelector('.btn-load-chesscom-game');
            btnLoad.addEventListener('click', () => {
                const parsed = PgnGameParser.parsePGN(game.pgn);
                if (parsed && parsed.moves.length > 0) {
                    parsed.evalScores = new Array(parsed.moves.length + 1).fill(0);
                    parsed.accuracy = { white: "100.0", black: "100.0" };
                    savedGames.unshift(parsed);
                    if (savedGames.length > 15) savedGames.pop();
                    saveGamesToStorage(savedGames);
                    populateSavedGamesDropdown();

                    pgnModal.classList.remove('active');
                    loadAnalyzedGame(parsed);
                } else {
                    alert('Could not parse game PGN from Chess.com.');
                }
            });

            chesscomGamesList.appendChild(card);
        });
    }

    // Move-by-Move Empirical Stockfish Accuracy Rating Algorithm (Chess.com / Lichess Standard)
    function calculateAccuracyFromEvalScores(gameObj) {
        if (!gameObj || !gameObj.moves || !gameObj.evalScores || gameObj.evalScores.length <= 1) {
            return { white: "100.0", black: "100.0" };
        }

        let whiteWinProbLossSum = 0;
        let blackWinProbLossSum = 0;
        let whiteCount = 0;
        let blackCount = 0;

        for (let i = 1; i < gameObj.evalScores.length && i - 1 < gameObj.moves.length; i++) {
            const prevScore = gameObj.evalScores[i - 1];
            const currScore = gameObj.evalScores[i];
            const moveObj = gameObj.moves[i - 1];

            const prevWinProb = 1 / (1 + Math.pow(10, -prevScore / 4));
            const currWinProb = 1 / (1 + Math.pow(10, -currScore / 4));

            const isWhiteMove = (i % 2 !== 0);

            if (isWhiteMove) {
                const drop = Math.max(0, prevWinProb - currWinProb);
                whiteWinProbLossSum += drop;
                whiteCount++;

                if (drop <= 0.02) moveObj.quality = { label: 'Best Move', badgeClass: 'badge-best', icon: '🌟' };
                else if (drop <= 0.06) moveObj.quality = { label: 'Good Move', badgeClass: 'badge-good', icon: '👍' };
                else if (drop <= 0.14) moveObj.quality = { label: 'Inaccuracy', badgeClass: 'badge-inaccuracy', icon: '⚠️' };
                else if (drop <= 0.28) moveObj.quality = { label: 'Mistake', badgeClass: 'badge-mistake', icon: '❌' };
                else moveObj.quality = { label: 'Blunder', badgeClass: 'badge-blunder', icon: '💥' };
            } else {
                const drop = Math.max(0, (1 - prevWinProb) - (1 - currWinProb));
                blackWinProbLossSum += drop;
                blackCount++;

                if (drop <= 0.02) moveObj.quality = { label: 'Best Move', badgeClass: 'badge-best', icon: '🌟' };
                else if (drop <= 0.06) moveObj.quality = { label: 'Good Move', badgeClass: 'badge-good', icon: '👍' };
                else if (drop <= 0.14) moveObj.quality = { label: 'Inaccuracy', badgeClass: 'badge-inaccuracy', icon: '⚠️' };
                else if (drop <= 0.28) moveObj.quality = { label: 'Mistake', badgeClass: 'badge-mistake', icon: '❌' };
                else moveObj.quality = { label: 'Blunder', badgeClass: 'badge-blunder', icon: '💥' };
            }
        }

        const avgWhiteLoss = whiteCount > 0 ? (whiteWinProbLossSum / whiteCount) : 0;
        const avgBlackLoss = blackCount > 0 ? (blackWinProbLossSum / blackCount) : 0;

        const whiteAcc = Math.min(100, Math.max(30, (103.16 * Math.exp(-0.0435 * avgWhiteLoss * 100) - 3.16))).toFixed(1);
        const blackAcc = Math.min(100, Math.max(30, (103.16 * Math.exp(-0.0435 * avgBlackLoss * 100) - 3.16))).toFixed(1);

        return { white: whiteAcc, black: blackAcc };
    }

    // Batch Stockfish Evaluation across all positions with Real-Time Visual Playback & Auto-Reset
    let currentGraphEvalToken = 0;

    function calculateFullGameStockfishGraph(gameObj) {
        if (!gameObj || !gameObj.moves || gameObj.moves.length === 0) return;

        const myToken = ++currentGraphEvalToken;

        const tempChess = new Chess();
        const fens = [tempChess.fen()];
        gameObj.moves.forEach(m => {
            tempChess.move(m.san);
            fens.push(tempChess.fen());
        });

        gameObj.evalScores = new Array(fens.length).fill(0);
        gameEvalScores = [...gameObj.evalScores];
        drawEvalGraph();

        let idx = 0;
        let isStepEvaluating = false;

        function evaluateNextFen() {
            if (isStepEvaluating) return;
            if (myToken !== currentGraphEvalToken || !analyzedGame || analyzedGame !== gameObj) {
                return;
            }

            if (idx >= fens.length) {
                gameObj.isFullyEvaluated = true;
                const accRes = calculateAccuracyFromEvalScores(gameObj);
                gameObj.accuracy = accRes;
                if (whiteAccuracyVal) whiteAccuracyVal.textContent = `${gameObj.accuracy.white}%`;
                if (blackAccuracyVal) blackAccuracyVal.textContent = `${gameObj.accuracy.black}%`;
                if (analyzedGame === gameObj) {
                    jumpToAnalysisStep(0, false);
                }
                saveGamesToStorage(savedGames);
                drawEvalGraph();
                return;
            }

            isStepEvaluating = true;
            const targetIdx = idx;
            const fen = fens[targetIdx];

            graphEngine.getBestMove(fen, 6, () => {
                if (myToken !== currentGraphEvalToken || analyzedGame !== gameObj) {
                    isStepEvaluating = false;
                    return;
                }

                const scoreStr = graphEngine.currentEval.score;
                let numScore = parseFloat(scoreStr) || 0;
                if (graphEngine.currentEval.isMate) {
                    numScore = scoreStr.includes('-') ? -10 : 10;
                }

                gameObj.evalScores[targetIdx] = numScore;
                if (analyzedGame === gameObj) {
                    gameEvalScores[targetIdx] = numScore;
                    const liveAcc = calculateAccuracyFromEvalScores(gameObj);
                    gameObj.accuracy = liveAcc;
                    if (whiteAccuracyVal) whiteAccuracyVal.textContent = `${liveAcc.white}%`;
                    if (blackAccuracyVal) blackAccuracyVal.textContent = `${liveAcc.black}%`;
                    jumpToAnalysisStep(targetIdx, true);
                }

                idx++;
                isStepEvaluating = false;
                setTimeout(evaluateNextFen, 35);
            });
        }

        evaluateNextFen();
    }

    function loadAnalyzedGame(gameObj) {
        analyzedGame = gameObj;
        document.getElementById('white-name').textContent = gameObj.headers.white;
        document.getElementById('white-rating').textContent = `Rating: ${gameObj.headers.whiteElo}`;
        document.getElementById('black-name').textContent = gameObj.headers.black;
        document.getElementById('black-rating').textContent = `Rating: ${gameObj.headers.blackElo}`;

        gameObj.evalScores = new Array(gameObj.moves.length + 1).fill(0);
        gameEvalScores = [...gameObj.evalScores];

        jumpToAnalysisStep(0, true);
        calculateFullGameStockfishGraph(gameObj);
    }

    // --- Best Move Simulation Mode Handlers ---
    if (btnBestMoveSim) {
        btnBestMoveSim.addEventListener('click', toggleBestMoveSimulation);
    }

    function toggleBestMoveSimulation() {
        if (currentMode !== 'analysis' || !analyzedGame) return;
        if (simulationState.active) {
            exitBestMoveSimulation();
        } else {
            startBestMoveSimulation();
        }
    }

    function startBestMoveSimulation() {
        if (currentMode !== 'analysis' || !analyzedGame) return;

        const startStep = analysisStep;
        
        recTextEl.innerHTML = `
            <div class="sim-banner">
                <div class="sim-banner-header">
                    <span class="sim-banner-title">⚡ Best Move Simulation</span>
                    <button id="btn-exit-sim" class="sim-exit-btn">✕ Cancel (Esc)</button>
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted); padding: 0.2rem 0;">
                    ⏳ Stockfish is calculating the optimal continuation line...
                </div>
            </div>
        `;
        const btnExitLoading = document.getElementById('btn-exit-sim');
        if (btnExitLoading) btnExitLoading.addEventListener('click', exitBestMoveSimulation);

        const tempChess = new Chess();
        for (let i = 0; i < startStep; i++) {
            tempChess.move(analyzedGame.moves[i].san);
        }

        const startFen = tempChess.fen();

        evalEngine.evaluatePosition(startFen, 14, (evalRes) => {
            let pvMoves = (evalRes.pvLine && evalRes.pvLine.length > 0) ? [...evalRes.pvLine] : [];
            if (pvMoves.length === 0 && evalRes.bestMove) {
                pvMoves.push(evalRes.bestMove);
            }

            if (pvMoves.length === 0) {
                recTextEl.innerHTML = `
                    <div style="color: #f87171; font-size: 0.8rem; font-weight: 600;">
                        ⚠️ Stockfish could not find a simulation line for this position.
                    </div>
                `;
                return;
            }

            const simLine = [];
            const simChess = new Chess();
            simChess.load(startFen);

            const playedGameMove = (startStep > 0 && startStep <= analyzedGame.moves.length) ? analyzedGame.moves[startStep - 1] : null;

            // Step 0: Starting position
            simLine.push({
                fen: startFen,
                lastMove: playedGameMove ? { from: playedGameMove.from, to: playedGameMove.to } : null,
                nextMove: pvMoves[0] || null,
                san: "Starting Position",
                evalScore: evalRes.score,
                explanation: playedGameMove && playedGameMove.quality ? 
                    `The move played in game was <strong>${playedGameMove.san}</strong> (${playedGameMove.quality.icon} ${playedGameMove.quality.label}). Stockfish identifies a superior continuation line.` :
                    `Stockfish optimal variation starting from Move ${startStep}.`
            });

            for (let i = 0; i < pvMoves.length && i < 6; i++) {
                const uciMove = pvMoves[i];
                const from = uciMove.substring(0, 2);
                const to = uciMove.substring(2, 4);
                const promo = uciMove.substring(4, 5) || 'q';

                const moveObj = simChess.move({ from, to, promotion: promo });
                if (!moveObj) break;

                const stepFen = simChess.fen();
                const nextUci = pvMoves[i + 1] || null;

                let expText = "";
                if (i === 0) {
                    if (playedGameMove) {
                        expText = `Stockfish recommends <strong>${moveObj.san}</strong> instead of game move <strong>${playedGameMove.san}</strong>, preserving an eval of <strong>${evalRes.score}</strong>.`;
                    } else {
                        expText = `Stockfish top choice <strong>${moveObj.san}</strong> controls key squares and maintains an eval of <strong>${evalRes.score}</strong>.`;
                    }
                } else {
                    expText = `Optimal follow-up <strong>${moveObj.san}</strong> enforces tactical pressure and piece activity.`;
                }

                simLine.push({
                    fen: stepFen,
                    lastMove: { from: moveObj.from, to: moveObj.to },
                    nextMove: nextUci,
                    san: moveObj.san,
                    evalScore: evalRes.score,
                    explanation: expText
                });
            }

            simulationState = {
                active: true,
                startAnalysisStep: startStep,
                currentIndex: 0,
                line: simLine
            };

            renderSimulationStep(0);
        });
    }

    function renderSimulationStep(stepIdx) {
        if (!simulationState.active || simulationState.line.length === 0) return;

        const idx = Math.max(0, Math.min(stepIdx, simulationState.line.length - 1));
        simulationState.currentIndex = idx;
        const stepData = simulationState.line[idx];

        chess.load(stepData.fen);

        let inCheckSq = null;
        if (chess.in_check()) {
            const board = chess.board();
            const turn = chess.turn();
            for (let r = 0; r < 8; r++) {
                for (let f = 0; f < 8; f++) {
                    const p = board[r][f];
                    if (p && p.type === 'k' && p.color === turn) {
                        const files = ['a','b','c','d','e','f','g','h'];
                        const ranks = ['8','7','6','5','4','3','2','1'];
                        inCheckSq = files[f] + ranks[r];
                    }
                }
            }
        }

        boardRenderer.renderBoard(chess, {
            selectedSquare: null,
            legalMoves: [],
            lastMove: stepData.lastMove,
            inCheckSquare: inCheckSq
        });

        boardRenderer.clearArrows();
        if (stepData.nextMove) {
            const from = stepData.nextMove.substring(0, 2);
            const to = stepData.nextMove.substring(2, 4);
            const arrowColor = (chess.turn() === 'w') ? '#10b981' : '#38bdf8';
            boardRenderer.drawArrow(from, to, arrowColor, 14);
        }

        updateEvalBar(stepData.evalScore, false);
        updateCapturedPiecesTracker();

        recTextEl.innerHTML = `
            <div class="sim-banner">
                <div class="sim-banner-header">
                    <span class="sim-banner-title">⚡ Best Move Simulation (${idx} / ${simulationState.line.length - 1})</span>
                    <button id="btn-exit-sim" class="sim-exit-btn">✕ Exit (Esc)</button>
                </div>
                <div style="font-size: 0.8rem; color: var(--text-primary); margin-bottom: 0.35rem;">
                    ${stepData.explanation}
                </div>
                <div style="font-size: 0.72rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center;">
                    <span>Press <strong>&lt; &gt; Arrow Keys</strong> or <strong>S / Space</strong> to scrub</span>
                    <span style="color: var(--accent-emerald); font-weight: 700;">Eval: ${stepData.evalScore}</span>
                </div>
            </div>
        `;

        const btnExit = document.getElementById('btn-exit-sim');
        if (btnExit) {
            btnExit.addEventListener('click', exitBestMoveSimulation);
        }
    }

    function exitBestMoveSimulation() {
        if (!simulationState.active) return;
        const returnStep = simulationState.startAnalysisStep;
        simulationState.active = false;
        simulationState.line = [];
        jumpToAnalysisStep(returnStep);
    }

    // --- Free Analysis Mode Handlers ---
    function executeAnalysisFreeMove(from, to, promoPiece = 'q') {
        const legalMoves = chess.moves({ square: from, verbose: true });
        const targetMove = legalMoves.find(m => m.to === to);
        if (!targetMove) return false;

        if (!freeModeState.active) {
            const startStep = analysisStep;
            const startFen = chess.fen();
            const startScore = (gameEvalScores && gameEvalScores[startStep] !== undefined) ? gameEvalScores[startStep] : 0;

            if (simulationState.active) {
                simulationState.active = false;
                simulationState.line = [];
            }

            freeModeState = {
                active: true,
                startStep: startStep,
                currentIndex: 0,
                branch: [{
                    fen: startFen,
                    san: "Start",
                    moveObj: null,
                    score: startScore,
                    bestMove: null
                }]
            };
        }

        const moveObj = chess.move({ from, to, promotion: promoPiece });
        if (!moveObj) return false;

        if (chess.in_check()) sounds.playCheck();
        else if (moveObj.captured) sounds.playCapture();
        else sounds.playMove();

        const stepData = {
            fen: chess.fen(),
            san: moveObj.san,
            moveObj: moveObj,
            score: 0,
            bestMove: null
        };

        freeModeState.branch.push(stepData);
        freeModeState.currentIndex = freeModeState.branch.length - 1;

        selectedSquare = null;
        renderFreeModeStep(freeModeState.currentIndex);
        return true;
    }

    function renderFreeModeStep(stepIdx) {
        if (!freeModeState.active || freeModeState.branch.length === 0) return;

        const idx = Math.max(0, Math.min(stepIdx, freeModeState.branch.length - 1));
        freeModeState.currentIndex = idx;
        const stepData = freeModeState.branch[idx];

        chess.load(stepData.fen);

        let inCheckSq = null;
        if (chess.in_check()) {
            const board = chess.board();
            const turn = chess.turn();
            for (let r = 0; r < 8; r++) {
                for (let f = 0; f < 8; f++) {
                    const p = board[r][f];
                    if (p && p.type === 'k' && p.color === turn) {
                        const files = ['a','b','c','d','e','f','g','h'];
                        const ranks = ['8','7','6','5','4','3','2','1'];
                        inCheckSq = files[f] + ranks[r];
                    }
                }
            }
        }

        boardRenderer.renderBoard(chess, {
            selectedSquare: selectedSquare,
            legalMoves: selectedSquare ? chess.moves({ square: selectedSquare, verbose: true }) : [],
            lastMove: stepData.moveObj ? { from: stepData.moveObj.from, to: stepData.moveObj.to } : null,
            inCheckSquare: inCheckSq
        });

        boardRenderer.clearArrows();

        evalEngine.evaluatePosition(chess.fen(), 14, (evalRes) => {
            if (!freeModeState.active) return;

            let numScore = parseFloat(evalRes.score) || 0;
            if (evalRes.isMate) numScore = evalRes.score.includes('-') ? -10 : 10;
            stepData.score = numScore;
            stepData.bestMove = evalRes.bestMove;

            updateEvalBar(evalRes.score, evalRes.isMate);
            updateCapturedPiecesTracker();

            if (evalRes.bestMove) {
                const bFrom = evalRes.bestMove.substring(0, 2);
                const bTo = evalRes.bestMove.substring(2, 4);
                const arrowColor = (chess.turn() === 'w') ? '#10b981' : '#38bdf8';
                boardRenderer.drawArrow(bFrom, bTo, arrowColor, 14);
            }

            recTextEl.innerHTML = `
                <div class="sim-banner free-mode-banner" id="btn-exit-free-mode" style="cursor: pointer;" title="Click to exit Free Mode">
                    <div class="sim-banner-header">
                        <span class="sim-banner-title" style="color: #c084fc;">🎮 Free Mode Active (${idx} / ${freeModeState.branch.length - 1})</span>
                        <button class="sim-exit-btn">✕ Exit Free Mode (Esc)</button>
                    </div>
                    <div style="font-size: 0.8rem; color: var(--text-primary); margin-bottom: 0.35rem;">
                        ${stepData.moveObj ? `Custom move played: <strong>${stepData.san}</strong>.` : `Original position.`} Stockfish best move: <strong style="color: #38bdf8;">${evalRes.bestMove ? evalRes.bestMove.toUpperCase() : 'N/A'}</strong>
                    </div>
                    <div style="font-size: 0.72rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center;">
                        <span>Click banner or press <strong>ESC</strong> to exit.</span>
                        <span style="color: #c084fc; font-weight: 700;">Eval: ${evalRes.score}</span>
                    </div>
                </div>
            `;

            const btnExitFree = document.getElementById('btn-exit-free-mode');
            if (btnExitFree) {
                btnExitFree.addEventListener('click', exitFreeMode);
            }

            drawEvalGraph();
        });
    }

    function exitFreeMode() {
        if (!freeModeState.active) return;
        const returnStep = freeModeState.startStep;
        freeModeState.active = false;
        freeModeState.branch = [];
        jumpToAnalysisStep(returnStep);
    }

    function updateAnalysisBoardView() {
        if (freeModeState.active) {
            renderFreeModeStep(freeModeState.currentIndex);
        } else if (simulationState.active) {
            renderSimulationStep(simulationState.currentIndex);
        } else {
            jumpToAnalysisStep(analysisStep);
        }
    }

    btnFirstMove.addEventListener('click', () => {
        if (freeModeState.active) renderFreeModeStep(0);
        else if (simulationState.active) renderSimulationStep(0);
        else jumpToAnalysisStep(0);
    });
    btnPrevMove.addEventListener('click', () => {
        if (freeModeState.active) {
            if (freeModeState.currentIndex > 0) renderFreeModeStep(freeModeState.currentIndex - 1);
            else exitFreeMode();
        } else if (simulationState.active) renderSimulationStep(simulationState.currentIndex - 1);
        else jumpToAnalysisStep(analysisStep - 1);
    });
    btnNextMove.addEventListener('click', () => {
        if (freeModeState.active) {
            if (freeModeState.currentIndex < freeModeState.branch.length - 1) {
                renderFreeModeStep(freeModeState.currentIndex + 1);
            } else {
                const currentStep = freeModeState.branch[freeModeState.currentIndex];
                if (currentStep && currentStep.bestMove) {
                    const from = currentStep.bestMove.substring(0, 2);
                    const to = currentStep.bestMove.substring(2, 4);
                    const promo = currentStep.bestMove.substring(4, 5) || 'q';
                    executeAnalysisFreeMove(from, to, promo);
                }
            }
        } else if (simulationState.active) renderSimulationStep(simulationState.currentIndex + 1);
        else jumpToAnalysisStep(analysisStep + 1);
    });
    btnLastMove.addEventListener('click', () => {
        if (freeModeState.active) renderFreeModeStep(freeModeState.branch.length - 1);
        else if (simulationState.active) renderSimulationStep(simulationState.line.length - 1);
        else if (analyzedGame) jumpToAnalysisStep(analyzedGame.moves.length);
    });

    document.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (currentMode !== 'analysis' || !analyzedGame) return;

        if (e.key === 's' || e.key === 'S') {
            e.preventDefault();
            toggleBestMoveSimulation();
            return;
        }

        if (e.key === 'Escape') {
            if (freeModeState.active) {
                e.preventDefault();
                exitFreeMode();
                return;
            } else if (simulationState.active) {
                e.preventDefault();
                exitBestMoveSimulation();
                return;
            }
        }

        if (freeModeState.active) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                if (freeModeState.currentIndex > 0) renderFreeModeStep(freeModeState.currentIndex - 1);
                else exitFreeMode();
            } else if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                if (freeModeState.currentIndex < freeModeState.branch.length - 1) {
                    renderFreeModeStep(freeModeState.currentIndex + 1);
                } else {
                    const currentStep = freeModeState.branch[freeModeState.currentIndex];
                    if (currentStep && currentStep.bestMove) {
                        const from = currentStep.bestMove.substring(0, 2);
                        const to = currentStep.bestMove.substring(2, 4);
                        const promo = currentStep.bestMove.substring(4, 5) || 'q';
                        executeAnalysisFreeMove(from, to, promo);
                    }
                }
            } else if (e.key === 'ArrowUp' || e.key === 'Home') {
                e.preventDefault();
                renderFreeModeStep(0);
            } else if (e.key === 'ArrowDown' || e.key === 'End') {
                e.preventDefault();
                renderFreeModeStep(freeModeState.branch.length - 1);
            }
            return;
        }

        if (simulationState.active) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                renderSimulationStep(simulationState.currentIndex - 1);
            } else if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                renderSimulationStep(simulationState.currentIndex + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'Home') {
                e.preventDefault();
                renderSimulationStep(0);
            } else if (e.key === 'ArrowDown' || e.key === 'End') {
                e.preventDefault();
                renderSimulationStep(simulationState.line.length - 1);
            }
            return;
        }

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            jumpToAnalysisStep(analysisStep - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            jumpToAnalysisStep(analysisStep + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'Home') {
            e.preventDefault();
            jumpToAnalysisStep(0);
        } else if (e.key === 'ArrowDown' || e.key === 'End') {
            e.preventDefault();
            jumpToAnalysisStep(analyzedGame.moves.length);
        }
    });

    function jumpToAnalysisStep(stepIndex, skipLiveEval = false) {
        if (!analyzedGame) return;

        if (freeModeState.active) {
            freeModeState.active = false;
            freeModeState.branch = [];
        }

        if (simulationState.active) {
            simulationState.active = false;
            simulationState.line = [];
        }

        analysisStep = Math.max(0, Math.min(stepIndex, analyzedGame.moves.length));
        chess.reset();
        for (let i = 0; i < analysisStep; i++) {
            chess.move(analyzedGame.moves[i].san);
        }

        const lastMoveObj = analysisStep > 0 ? analyzedGame.moves[analysisStep - 1] : null;

        boardRenderer.renderBoard(chess, {
            selectedSquare: selectedSquare,
            legalMoves: selectedSquare ? chess.moves({ square: selectedSquare, verbose: true }) : [],
            lastMove: lastMoveObj,
            onPieceQuality: lastMoveObj ? lastMoveObj.quality : null
        });

        renderMoveTable();
        updateCapturedPiecesTracker();
        drawEvalGraph();
        if (!skipLiveEval) {
            triggerEngineEvaluation(lastMoveObj);
        } else {
            boardRenderer.clearArrows();
        }
    }

    // --- Puzzles Engine Mode ---
    function loadNextPuzzle() {
        const cat = selectPuzzleCategory.value;
        const rat = parseInt(selectPuzzleRating.value, 10);

        const p = puzzleManager.getRandomPuzzle(cat, rat);
        displayPuzzle(p);
    }

    function loadNextPuzzleInSequence() {
        const cat = selectPuzzleCategory.value;
        const rat = parseInt(selectPuzzleRating.value, 10);

        const p = puzzleManager.getNextPuzzleInSequence(cat, rat);
        displayPuzzle(p);
    }

    function displayPuzzle(p) {
        chess.load(p.fen);
        selectedSquare = null;
        isPuzzleLocked = false;
        if (autoNextTimeout) clearTimeout(autoNextTimeout);

        isFlipped = (chess.turn() === 'b');
        boardRenderer.setFlipped(isFlipped);
        boardRenderer.clearHighlights();

        puzzleDescription.innerHTML = `<strong>${p.title}</strong>: ${p.description}`;
        puzzleDescription.style.color = "var(--text-primary)";
        puzzleScoreBadge.textContent = `Solved: ${puzzleManager.score.solved} | Failed: ${puzzleManager.score.failed}`;

        updateUI();
    }

    function retryCurrentPuzzle() {
        if (!puzzleManager.currentPuzzle) return;
        const p = puzzleManager.resetCurrentPuzzle();
        displayPuzzle(p);
    }

    selectPuzzleCategory.addEventListener('change', loadNextPuzzle);
    selectPuzzleRating.addEventListener('change', loadNextPuzzle);
    btnNextPuzzle.addEventListener('click', loadNextPuzzleInSequence);

    // --- Tactical Puzzles Progress Overview Modal & Filters ---
    const btnPuzzleHistory = document.getElementById('btn-puzzle-history');
    const puzzleHistoryModal = document.getElementById('puzzle-history-modal');
    const btnClosePuzzleHistory = document.getElementById('btn-close-puzzle-history');
    const puzzleHistoryList = document.getElementById('puzzle-history-list');

    const phSolvedCount = document.getElementById('ph-solved-count');
    const phFailedCount = document.getElementById('ph-failed-count');
    const phUnattemptedCount = document.getElementById('ph-unattempted-count');

    const phFilterAll = document.getElementById('ph-filter-all');
    const phFilterSolved = document.getElementById('ph-filter-solved');
    const phFilterFailed = document.getElementById('ph-filter-failed');
    const phFilterUnattempted = document.getElementById('ph-filter-unattempted');

    let currentPuzzleFilter = 'all';

    if (btnPuzzleHistory && puzzleHistoryModal) {
        btnPuzzleHistory.addEventListener('click', () => {
            currentPuzzleFilter = 'all';
            setActivePuzzleFilterBtn(phFilterAll);
            puzzleHistoryModal.classList.add('active');
            renderPuzzleHistoryModal();
        });

        if (btnClosePuzzleHistory) {
            btnClosePuzzleHistory.addEventListener('click', () => {
                puzzleHistoryModal.classList.remove('active');
            });
        }

        const filterBtns = [
            { btn: phFilterAll, filter: 'all' },
            { btn: phFilterSolved, filter: 'solved' },
            { btn: phFilterFailed, filter: 'failed' },
            { btn: phFilterUnattempted, filter: 'unattempted' }
        ];

        filterBtns.forEach(({ btn, filter }) => {
            if (btn) {
                btn.addEventListener('click', () => {
                    currentPuzzleFilter = filter;
                    setActivePuzzleFilterBtn(btn);
                    renderPuzzleHistoryModal();
                });
            }
        });
    }

    function setActivePuzzleFilterBtn(activeBtn) {
        [phFilterAll, phFilterSolved, phFilterFailed, phFilterUnattempted].forEach(b => {
            if (b) b.classList.remove('active');
        });
        if (activeBtn) activeBtn.classList.add('active');
    }

    function renderPuzzleHistoryModal() {
        if (!puzzleHistoryList) return;

        let solved = 0;
        let failed = 0;
        let unattempted = 0;

        const allPuzzles = puzzleManager.puzzles;
        allPuzzles.forEach(p => {
            const st = puzzleManager.getPuzzleStatus(p.id);
            if (st === 'solved') solved++;
            else if (st === 'failed') failed++;
            else unattempted++;
        });

        if (phSolvedCount) phSolvedCount.textContent = solved;
        if (phFailedCount) phFailedCount.textContent = failed;
        if (phUnattemptedCount) phUnattemptedCount.textContent = unattempted;

        if (phFilterAll) phFilterAll.textContent = `All (${allPuzzles.length})`;
        if (phFilterSolved) phFilterSolved.textContent = `✅ Solved (${solved})`;
        if (phFilterFailed) phFilterFailed.textContent = `❌ Failed (${failed})`;
        if (phFilterUnattempted) phFilterUnattempted.textContent = `⚪ Unattempted (${unattempted})`;

        let displayPuzzles = allPuzzles;
        if (currentPuzzleFilter === 'solved') {
            displayPuzzles = allPuzzles.filter(p => puzzleManager.getPuzzleStatus(p.id) === 'solved');
        } else if (currentPuzzleFilter === 'failed') {
            displayPuzzles = allPuzzles.filter(p => puzzleManager.getPuzzleStatus(p.id) === 'failed');
        } else if (currentPuzzleFilter === 'unattempted') {
            displayPuzzles = allPuzzles.filter(p => puzzleManager.getPuzzleStatus(p.id) === 'unattempted');
        }

        puzzleHistoryList.innerHTML = '';

        if (displayPuzzles.length === 0) {
            puzzleHistoryList.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 1.5rem 0; font-size: 0.8rem;">
                    No puzzles found for category filter "${currentPuzzleFilter}".
                </div>
            `;
            return;
        }

        const categoryNames = {
            'mate1': 'Checkmate in 1',
            'mate2': 'Checkmate in 2',
            'mate3': 'Checkmate in 3',
            'material': 'Material Wins',
            'endgame': 'Endgame Tactics'
        };

        displayPuzzles.forEach(p => {
            const st = puzzleManager.getPuzzleStatus(p.id);
            let statusBadge = '<span class="badge" style="background: rgba(100, 116, 139, 0.2); color: #94a3b8; border: 1px solid rgba(100, 116, 139, 0.3);">⚪ Unattempted</span>';
            let borderClass = 'puzzle-card-unattempted';

            if (st === 'solved') {
                statusBadge = '<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4);">✅ Solved</span>';
                borderClass = 'puzzle-card-solved';
            } else if (st === 'failed') {
                statusBadge = '<span class="badge" style="background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4);">❌ Failed</span>';
                borderClass = 'puzzle-card-failed';
            }

            const card = document.createElement('div');
            card.className = `chesscom-game-card ${borderClass}`;
            card.innerHTML = `
                <div class="chesscom-game-main" style="flex: 1; margin-right: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 2px;">
                        ${statusBadge}
                        <span style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary);">${p.title}</span>
                    </div>
                    <div class="chesscom-game-meta">
                        <span>🏷️ ${categoryNames[p.category] || p.category}</span>
                        <span>⭐ Rating: ${p.rating}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-sm btn-play-puzzle-direct" style="padding: 0.25rem 0.6rem; font-size: 0.72rem; white-space: nowrap;">
                    ▶ Play
                </button>
            `;

            const btnPlay = card.querySelector('.btn-play-puzzle-direct');
            btnPlay.addEventListener('click', () => {
                puzzleManager.currentPuzzle = p;
                puzzleManager.currentIndex = puzzleManager.puzzles.findIndex(item => item.id === p.id);
                puzzleManager.moveIndex = 0;
                displayPuzzle(p);
                puzzleHistoryModal.classList.remove('active');
            });

            puzzleHistoryList.appendChild(card);
        });
    }

    btnPuzzleHint.addEventListener('click', () => {
        if (!puzzleManager.currentPuzzle || isPuzzleLocked) return;
        const expected = puzzleManager.currentPuzzle.moves[puzzleManager.moveIndex];
        if (expected) {
            const from = expected.substring(0, 2);
            const to = expected.substring(2, 4);
            boardRenderer.drawArrow(from, to, '#f59e0b', 10);
            puzzleDescription.innerHTML = `💡 <strong>Hint:</strong> Play move <strong style="color: var(--accent-amber);">${expected.toUpperCase()}</strong>`;
        }
    });

    function handlePuzzleSquareClick(sqName) {
        if (selectedSquare === sqName) {
            selectedSquare = null;
            updateUI();
            return;
        }

        if (selectedSquare) {
            attemptPuzzleMove(selectedSquare, sqName);
            selectedSquare = null;
            return;
        }

        const piece = chess.get(sqName);
        if (piece && piece.color === chess.turn()) {
            selectedSquare = sqName;
            updateUI();
        }
    }

    function attemptPuzzleMove(from, to) {
        const legalMoves = chess.moves({ square: from, verbose: true });
        const targetMove = legalMoves.find(m => m.to === to);
        if (!targetMove) return;

        const moveSan = targetMove.san;
        const promo = targetMove.promotion || 'q';
        const res = puzzleManager.verifyUserMove(from, to, moveSan, promo);

        if (res.valid) {
            const playedMoveObj = chess.move({ from, to, promotion: promo });
            if (chess.in_check()) sounds.playCheck();
            else if (playedMoveObj && playedMoveObj.captured) sounds.playCapture();
            else sounds.playMove();

            updateUI();

            if (res.completed) {
                sounds.playCheck();
                puzzleDescription.innerHTML = `<span style="color: var(--accent-emerald); font-weight: 800;">🎉 EXCELLENT! Puzzle Solved! Loading next puzzle...</span>`;
                puzzleScoreBadge.textContent = `Solved: ${puzzleManager.score.solved} | Failed: ${puzzleManager.score.failed}`;
                
                autoNextTimeout = setTimeout(() => {
                    loadNextPuzzleInSequence();
                }, 1500);

            } else if (res.replyMove) {
                setTimeout(() => {
                    const rFrom = res.replyMove.substring(0, 2);
                    const rTo = res.replyMove.substring(2, 4);
                    const rPromo = res.replyMove.substring(4, 5) || 'q';

                    const replyMoveObj = chess.move({ from: rFrom, to: rTo, promotion: rPromo });
                    if (chess.in_check()) sounds.playCheck();
                    else if (replyMoveObj && replyMoveObj.captured) sounds.playCapture();
                    else sounds.playMove();

                    updateUI();
                }, 400);
            }
        } else {
            isPuzzleLocked = true;
            const playedMoveObj = chess.move({ from, to, promotion: 'q' });
            sounds.playBlunder();
            updateUI();

            evalEngine.evaluatePosition(chess.fen(), 14, (evalRes) => {
                let refutationSan = "punishment move";
                if (evalRes.bestMove) {
                    const rFrom = evalRes.bestMove.substring(0, 2);
                    const rTo = evalRes.bestMove.substring(2, 4);
                    const rPromo = evalRes.bestMove.substring(4, 5);

                    setTimeout(() => {
                        const refMoveObj = chess.move({ from: rFrom, to: rTo, promotion: rPromo || 'q' });
                        if (refMoveObj) refutationSan = refMoveObj.san;

                        boardRenderer.drawArrow(rFrom, rTo, '#ef4444', 12);
                        updateUI();

                        puzzleDescription.innerHTML = `
                            <div style="color: var(--accent-rose); font-weight: 700; margin-bottom: 6px;">
                                ❌ Incorrect Move! Stockfish punishes <strong>${playedMoveObj ? playedMoveObj.san : moveSan}</strong> with <strong style="color: #ef4444;">${refutationSan}</strong> (Eval: ${evalRes.score}).
                            </div>
                            <button id="btn-retry-puzzle" class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">🔄 Try Again</button>
                        `;

                        document.getElementById('btn-retry-puzzle').addEventListener('click', retryCurrentPuzzle);
                    }, 350);
                }
            });

            puzzleScoreBadge.textContent = `Solved: ${puzzleManager.score.solved} | Failed: ${puzzleManager.score.failed}`;
        }
    }

    // --- Render Board & UI State ---
    function updateUI() {
        let legalMoves = [];
        if (selectedSquare) {
            legalMoves = chess.moves({ square: selectedSquare, verbose: true });
        }

        let inCheckSquare = null;
        if (chess.in_check()) {
            const board = chess.board();
            const turn = chess.turn();
            for (let r = 0; r < 8; r++) {
                for (let f = 0; f < 8; f++) {
                    const p = board[r][f];
                    if (p && p.type === 'k' && p.color === turn) {
                        const files = ['a','b','c','d','e','f','g','h'];
                        const ranks = ['8','7','6','5','4','3','2','1'];
                        inCheckSquare = files[f] + ranks[r];
                    }
                }
            }
        }

        const lastMove = moveHistory[moveHistory.length - 1] || null;

        boardRenderer.renderBoard(chess, {
            selectedSquare: selectedSquare,
            legalMoves: legalMoves,
            lastMove: lastMove,
            inCheckSquare: inCheckSquare
        });

        if (turnIndicator) {
            if (chess.game_over()) {
                if (chess.in_checkmate()) {
                    const winner = chess.turn() === 'w' ? "BLACK WINS BY CHECKMATE!" : "WHITE WINS BY CHECKMATE!";
                    turnIndicator.textContent = winner;
                    turnIndicator.style.color = "var(--accent-rose)";
                } else {
                    turnIndicator.textContent = "DRAW / STALEMATE";
                    turnIndicator.style.color = "var(--accent-amber)";
                }
            } else {
                turnIndicator.textContent = chess.turn() === 'w' ? "WHITE'S TURN" : "BLACK'S TURN";
                turnIndicator.style.color = "var(--accent-emerald)";
            }
        }

        renderMoveTable();
        updateCapturedPiecesTracker();
    }

    function renderMoveTable() {
        moveTableBody.innerHTML = '';
        const moves = (currentMode === 'analysis' && analyzedGame) ? analyzedGame.moves : moveHistory;
        moveCountText.textContent = `${moves.length} Moves`;

        for (let i = 0; i < moves.length; i += 2) {
            const moveNum = Math.floor(i / 2) + 1;
            const whiteMove = moves[i];
            const blackMove = moves[i + 1] || null;

            const tr = document.createElement('tr');

            const tdNum = document.createElement('td');
            tdNum.style.color = 'var(--text-muted)';
            tdNum.textContent = `${moveNum}.`;
            tr.appendChild(tdNum);

            const tdWhite = document.createElement('td');
            if (whiteMove) {
                const span = document.createElement('span');
                span.className = `move-cell ${currentMode === 'analysis' && analysisStep === i + 1 ? 'active' : ''}`;
                span.innerHTML = `<span>${whiteMove.san}</span>`;

                if (whiteMove.quality) {
                    const badge = document.createElement('span');
                    badge.className = `badge ${whiteMove.quality.badgeClass}`;
                    badge.textContent = `${whiteMove.quality.icon}`;
                    badge.title = whiteMove.quality.label;
                    span.appendChild(badge);
                }

                if (currentMode === 'analysis') {
                    span.addEventListener('click', () => jumpToAnalysisStep(i + 1));
                }
                tdWhite.appendChild(span);
            }
            tr.appendChild(tdWhite);

            const tdBlack = document.createElement('td');
            if (blackMove) {
                const span = document.createElement('span');
                span.className = `move-cell ${currentMode === 'analysis' && analysisStep === i + 2 ? 'active' : ''}`;
                span.innerHTML = `<span>${blackMove.san}</span>`;

                if (blackMove.quality) {
                    const badge = document.createElement('span');
                    badge.className = `badge ${blackMove.quality.badgeClass}`;
                    badge.textContent = `${blackMove.quality.icon}`;
                    badge.title = blackMove.quality.label;
                    span.appendChild(badge);
                }

                if (currentMode === 'analysis') {
                    span.addEventListener('click', () => jumpToAnalysisStep(i + 2));
                }
                tdBlack.appendChild(span);
            }
            tr.appendChild(tdBlack);

            moveTableBody.appendChild(tr);
        }
    }

    // Dynamic Viewport Resize Redraw
    window.addEventListener('resize', () => {
        if (currentMode === 'analysis' && analyzedGame) {
            drawEvalGraph();
        }
    });
});
