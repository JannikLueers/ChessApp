// Board Renderer, Drag & Drop Handler, SVG Arrow Overlay & Right-Click Marking System
class BoardRenderer {
    constructor(boardElement, svgOverlayElement, options = {}) {
        this.boardEl = boardElement;
        this.svgOverlay = svgOverlayElement;
        this.flipped = false;
        this.selectedSquare = null;
        this.legalMoves = [];
        this.lastMove = null;
        this.inCheckSquare = null;
        this.onSquareClick = options.onSquareClick || null;
        this.onPieceDrop = options.onPieceDrop || null;

        this.draggedPiece = null;
        this.draggedFrom = null;

        // Custom Right-Click Field Marking & Arrow State
        this.markedSquares = new Set();
        this.userArrows = new Map();
        this.engineArrow = null;
        this.previewArrow = null;

        this.rightClickStartSq = null;
        this.isRightClickDragging = false;

        this.setupBoardDOM();
        this.setupRightClickHandlers();
    }

    setupBoardDOM() {
        this.boardEl.innerHTML = '';
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

        const currentFiles = this.flipped ? [...files].reverse() : files;
        const currentRanks = this.flipped ? [...ranks].reverse() : ranks;

        for (let r = 0; r < 8; r++) {
            for (let f = 0; f < 8; f++) {
                const sqName = currentFiles[f] + currentRanks[r];
                const isLight = (r + f) % 2 === 0;

                const sqEl = document.createElement('div');
                sqEl.className = `square ${isLight ? 'light' : 'dark'}`;
                sqEl.dataset.square = sqName;

                // Rank / File Labels
                if (f === 0) {
                    const rLabel = document.createElement('span');
                    rLabel.className = 'square-label rank-label';
                    rLabel.textContent = currentRanks[r];
                    sqEl.appendChild(rLabel);
                }
                if (r === 7) {
                    const fLabel = document.createElement('span');
                    fLabel.className = 'square-label file-label';
                    fLabel.textContent = currentFiles[f];
                    sqEl.appendChild(fLabel);
                }

                // Event Listeners
                sqEl.addEventListener('click', (e) => this.handleSquareClick(sqName));
                sqEl.addEventListener('dragover', (e) => e.preventDefault());
                sqEl.addEventListener('drop', (e) => this.handleDrop(e, sqName));

                this.boardEl.appendChild(sqEl);
            }
        }
        this.updateMarkedSquareDOM();
    }

    setupRightClickHandlers() {
        this.boardEl.addEventListener('contextmenu', (e) => e.preventDefault());
        if (this.svgOverlay) {
            this.svgOverlay.addEventListener('contextmenu', (e) => e.preventDefault());
        }

        const getSquareFromPoint = (clientX, clientY) => {
            const el = document.elementFromPoint(clientX, clientY);
            if (!el) return null;
            const sqEl = el.closest('.square');
            return sqEl ? sqEl.dataset.square : null;
        };

        this.boardEl.addEventListener('mousedown', (e) => {
            if (e.button === 2) { // Right Click
                e.preventDefault();
                const sq = getSquareFromPoint(e.clientX, e.clientY);
                if (sq) {
                    this.rightClickStartSq = sq;
                    this.isRightClickDragging = false;
                }
            } else if (e.button === 0) { // Left Click clears markings unless clicking to make a move
                this.clearUserMarkings();
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (this.rightClickStartSq) {
                const currentSq = getSquareFromPoint(e.clientX, e.clientY);
                if (currentSq && currentSq !== this.rightClickStartSq) {
                    this.isRightClickDragging = true;
                    this.previewArrow = { fromSq: this.rightClickStartSq, toSq: currentSq, color: 'rgba(245, 158, 11, 0.65)' };
                    this.renderAllOverlayArrows();
                }
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 2 && this.rightClickStartSq) {
                e.preventDefault();
                const endSq = getSquareFromPoint(e.clientX, e.clientY);
                
                this.previewArrow = null;

                if (!this.isRightClickDragging || !endSq || this.rightClickStartSq === endSq) {
                    // Right Click Single Tap: Toggle Marked Square Highlight
                    const targetSq = this.rightClickStartSq;
                    if (this.markedSquares.has(targetSq)) {
                        this.markedSquares.delete(targetSq);
                    } else {
                        this.markedSquares.add(targetSq);
                    }
                    this.updateMarkedSquareDOM();
                } else if (endSq && this.rightClickStartSq !== endSq) {
                    // Right Click Drag: Toggle Arrow
                    const arrowKey = `${this.rightClickStartSq}->${endSq}`;
                    if (this.userArrows.has(arrowKey)) {
                        this.userArrows.delete(arrowKey);
                    } else {
                        this.userArrows.set(arrowKey, {
                            fromSq: this.rightClickStartSq,
                            toSq: endSq,
                            color: '#f59e0b',
                            width: 12
                        });
                    }
                }

                this.rightClickStartSq = null;
                this.isRightClickDragging = false;
                this.renderAllOverlayArrows();
            }
        });
    }

    clearUserMarkings() {
        this.markedSquares.clear();
        this.userArrows.clear();
        this.previewArrow = null;
        this.updateMarkedSquareDOM();
        this.renderAllOverlayArrows();
    }

    updateMarkedSquareDOM() {
        const squares = this.boardEl.querySelectorAll('.square');
        squares.forEach(sqEl => {
            const sqName = sqEl.dataset.square;
            if (this.markedSquares.has(sqName)) {
                sqEl.classList.add('marked-right-click');
            } else {
                sqEl.classList.remove('marked-right-click');
            }
        });
    }

    setFlipped(isFlipped) {
        this.flipped = isFlipped;
        this.setupBoardDOM();
        this.renderAllOverlayArrows();
    }

    clearHighlights() {
        this.selectedSquare = null;
        this.legalMoves = [];
        this.lastMove = null;
        this.inCheckSquare = null;
        this.clearUserMarkings();

        const squares = this.boardEl.querySelectorAll('.square');
        squares.forEach(sqEl => {
            sqEl.classList.remove('selected', 'last-move', 'in-check', 'marked-right-click');
            const dot = sqEl.querySelector('.move-dot, .capture-ring');
            if (dot) dot.remove();
            const badge = sqEl.querySelector('.on-piece-badge');
            if (badge) badge.remove();
        });
    }

    renderBoard(chessInstance, highlights = {}) {
        const board = chessInstance.board();
        this.lastMove = highlights.lastMove || null;
        this.inCheckSquare = highlights.inCheckSquare || null;
        this.selectedSquare = highlights.selectedSquare || null;
        this.legalMoves = highlights.legalMoves || [];
        const onPieceQuality = highlights.onPieceQuality || null;

        const currentFiles = this.flipped ? ['h','g','f','e','d','c','b','a'] : ['a','b','c','d','e','f','g','h'];
        const currentRanks = this.flipped ? ['1','2','3','4','5','6','7','8'] : ['8','7','6','5','4','3','2','1'];

        for (let r = 0; r < 8; r++) {
            for (let f = 0; f < 8; f++) {
                const sqName = currentFiles[f] + currentRanks[r];
                const sqEl = this.boardEl.querySelector(`[data-square="${sqName}"]`);
                if (!sqEl) continue;

                // Reset class list
                const isLight = (r + f) % 2 === 0;
                sqEl.className = `square ${isLight ? 'light' : 'dark'}`;
                if (this.markedSquares.has(sqName)) {
                    sqEl.classList.add('marked-right-click');
                }

                // Clear piece, overlays, badges
                const existingPiece = sqEl.querySelector('.piece-svg');
                if (existingPiece) existingPiece.remove();
                const existingDot = sqEl.querySelector('.move-dot, .capture-ring');
                if (existingDot) existingDot.remove();
                const existingBadge = sqEl.querySelector('.on-piece-badge');
                if (existingBadge) existingBadge.remove();

                // Highlights
                if (this.selectedSquare === sqName) sqEl.classList.add('selected');
                if (this.lastMove && (this.lastMove.from === sqName || this.lastMove.to === sqName)) {
                    sqEl.classList.add('last-move');
                }
                if (this.inCheckSquare === sqName) sqEl.classList.add('in-check');

                // Piece Rendering
                const rowIdx = this.flipped ? (7 - r) : r;
                const colIdx = this.flipped ? (7 - f) : f;
                const piece = board[rowIdx][colIdx];

                if (piece) {
                    const svgHtml = getPieceSVG(piece.color, piece.type);
                    const pieceContainer = document.createElement('div');
                    pieceContainer.className = 'piece-svg';
                    pieceContainer.innerHTML = svgHtml;
                    pieceContainer.draggable = true;

                    pieceContainer.addEventListener('dragstart', (e) => {
                        this.draggedPiece = piece;
                        this.draggedFrom = sqName;
                        e.dataTransfer.setData('text/plain', sqName);
                        if (this.onSquareClick) this.onSquareClick(sqName);
                    });

                    sqEl.appendChild(pieceContainer);
                }

                // Render Floating On-Piece Quality Badge on Destination Square
                if (this.lastMove && this.lastMove.to === sqName && onPieceQuality) {
                    const badgeEl = document.createElement('div');
                    badgeEl.className = 'on-piece-badge';
                    badgeEl.textContent = onPieceQuality.icon;
                    badgeEl.title = `${onPieceQuality.label}`;
                    sqEl.appendChild(badgeEl);
                }

                // Move Highlight Dots
                const isLegalMove = this.legalMoves.find(m => m.to === sqName);
                if (isLegalMove) {
                    if (piece) {
                        const ring = document.createElement('div');
                        ring.className = 'capture-ring';
                        sqEl.appendChild(ring);
                    } else {
                        const dot = document.createElement('div');
                        dot.className = 'move-dot';
                        sqEl.appendChild(dot);
                    }
                }
            }
        }
    }

    handleSquareClick(sqName) {
        if (this.onSquareClick) this.onSquareClick(sqName);
    }

    handleDrop(e, toSquare) {
        e.preventDefault();
        const fromSquare = e.dataTransfer.getData('text/plain') || this.draggedFrom;
        if (fromSquare && this.onPieceDrop) {
            this.onPieceDrop(fromSquare, toSquare);
        }
        this.draggedPiece = null;
        this.draggedFrom = null;
    }

    // Engine / Hint Recommendation Arrow Setter
    drawArrow(fromSq, toSq, color = '#10b981', width = 12) {
        if (!fromSq || !toSq || fromSq === toSq) {
            this.engineArrow = null;
        } else {
            this.engineArrow = { fromSq, toSq, color, width };
        }
        this.renderAllOverlayArrows();
    }

    clearArrows() {
        this.engineArrow = null;
        this.renderAllOverlayArrows();
    }

    renderAllOverlayArrows() {
        if (!this.svgOverlay) return;
        const existing = this.svgOverlay.querySelectorAll('line, marker');
        existing.forEach(a => a.remove());

        // 1. Render engine recommendation / hint arrow
        if (this.engineArrow) {
            this.renderSingleArrow(
                this.engineArrow.fromSq,
                this.engineArrow.toSq,
                this.engineArrow.color,
                this.engineArrow.width || 12
            );
        }

        // 2. Render user-drawn custom arrows
        this.userArrows.forEach(arr => {
            this.renderSingleArrow(arr.fromSq, arr.toSq, arr.color || '#f59e0b', arr.width || 12);
        });

        // 3. Render live preview drag arrow
        if (this.previewArrow) {
            this.renderSingleArrow(
                this.previewArrow.fromSq,
                this.previewArrow.toSq,
                this.previewArrow.color || 'rgba(245, 158, 11, 0.65)',
                10
            );
        }
    }

    renderSingleArrow(fromSq, toSq, color = '#10b981', width = 12) {
        if (!fromSq || !toSq || fromSq === toSq) return;

        this.svgOverlay.setAttribute('viewBox', '0 0 800 800');

        const sqSize = 100;
        const getCoords = (sq) => {
            const file = sq.charCodeAt(0) - 97;
            const rank = parseInt(sq[1], 10) - 1;
            
            const col = this.flipped ? (7 - file) : file;
            const row = this.flipped ? rank : (7 - rank);

            return {
                x: col * sqSize + sqSize / 2,
                y: row * sqSize + sqSize / 2
            };
        };

        const start = getCoords(fromSq);
        const end = getCoords(toSq);

        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const angle = Math.atan2(dy, dx);
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Arrowhead geometry: Head width is 3x tail width, head length is 2.5x tail width
        const headWidth = width * 3;
        const headLength = width * 2.5;

        // Line shaft stops at base of arrowhead so arrowhead tip touches target square center
        const lineDist = Math.max(0, dist - headLength);

        const endX = start.x + lineDist * Math.cos(angle);
        const endY = start.y + lineDist * Math.sin(angle);

        let defs = this.svgOverlay.querySelector('defs');
        if (!defs) {
            defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            this.svgOverlay.appendChild(defs);
        }

        const markerId = `arrowhead-${color.replace(/[^a-zA-Z0-9]/g, '')}-${width}`;
        if (!defs.querySelector(`#${markerId}`)) {
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', markerId);
            marker.setAttribute('markerUnits', 'userSpaceOnUse');
            marker.setAttribute('markerWidth', `${headLength}`);
            marker.setAttribute('markerHeight', `${headWidth}`);
            marker.setAttribute('viewBox', `0 0 ${headLength} ${headWidth}`);
            marker.setAttribute('refX', '0');
            marker.setAttribute('refY', `${headWidth / 2}`);
            marker.setAttribute('orient', 'auto-start-reverse');

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M 0 0 L ${headLength} ${headWidth / 2} L 0 ${headWidth} Z`);
            path.setAttribute('fill', color);
            marker.appendChild(path);
            defs.appendChild(marker);
        }

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', start.x);
        line.setAttribute('y1', start.y);
        line.setAttribute('x2', endX);
        line.setAttribute('y2', endY);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', width);
        line.setAttribute('stroke-linecap', 'butt');
        line.setAttribute('opacity', '0.85');
        line.setAttribute('marker-end', `url(#${markerId})`);

        this.svgOverlay.appendChild(line);
    }
}
