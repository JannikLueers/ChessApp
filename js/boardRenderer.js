// Board Renderer, Drag & Drop Handler, SVG Arrow Overlay & Quality Badges
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

        this.setupBoardDOM();
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
    }

    setFlipped(isFlipped) {
        this.flipped = isFlipped;
        this.setupBoardDOM();
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

    // SVG Recommendation Arrow Generator
    drawArrow(fromSq, toSq, color = '#10b981', width = 10) {
        this.clearArrows();

        if (!fromSq || !toSq || fromSq === toSq) return;

        const sqSize = 70;
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

        const headLen = 22;
        const arrowDist = dist - headLen / 2;

        const endX = start.x + arrowDist * Math.cos(angle);
        const endY = start.y + arrowDist * Math.sin(angle);

        let defs = this.svgOverlay.querySelector('defs');
        if (!defs) {
            defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            this.svgOverlay.appendChild(defs);
        }

        const markerId = `arrowhead-${color.replace('#', '')}`;
        if (!defs.querySelector(`#${markerId}`)) {
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', markerId);
            marker.setAttribute('viewBox', '0 0 10 10');
            marker.setAttribute('refX', '6');
            marker.setAttribute('refY', '5');
            marker.setAttribute('markerWidth', '6');
            marker.setAttribute('markerHeight', '6');
            marker.setAttribute('orient', 'auto-start-reverse');

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
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
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('opacity', '0.85');
        line.setAttribute('marker-end', `url(#${markerId})`);

        this.svgOverlay.appendChild(line);
    }

    clearArrows() {
        const arrows = this.svgOverlay.querySelectorAll('line, marker');
        arrows.forEach(a => a.remove());
    }
}
