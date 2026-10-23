# ♟ Jannik's Chess Coach & Analysis Suite

A feature-rich, high-performance Web & Mobile Chess platform and coach built with **Stockfish 10 (WebAssembly / Web Worker)**, **Chess.com Game Importer**, **Sigmoid Win-Probability Move Valuation Engine**, **Opening Theory Recognition**, **Interactive Tactical Puzzles Suite**, and **Native Android App Support (Capacitor)**.

---

## 🎮 Play Live
Play directly in your browser without installation:  
👉 **[https://JannikLueers.github.io/ChessApp/](https://JannikLueers.github.io/ChessApp/)**

---

## 📱 Mobile App (Android)
The app is engineered with a single unified codebase that runs as a high-performance web app and a standalone native Android application using **Capacitor**:
* **Mobile-First Responsive Layout**: Scaled edge-to-edge board centered on portrait screens, with the vertical Stockfish evaluation bar pinned to the left edge.
* **Hamburger Drawer Menu (☰)**: Safe mode switching between *Play*, *Analysis*, *Puzzles*, and *Practice* via a slide-out drawer, preventing accidental tab presses during gameplay.
* **Ergonomic Touch Controls**: Touch-friendly move navigation buttons (`|<<`, `<`, `>`, `>>`), interactive evaluation graph, and move lists positioned comfortably below the board.
* **Haptics & Vibration**: Native vibration feedback on piece moves, captures, checks, and blunders.
* **Offline-Ready**: Full Stockfish chess engine runs locally on-device without needing an internet connection.

> 📖 **Building the APK**: See [MOBILE_GUIDE.md](MOBILE_GUIDE.md) for step-by-step instructions to build `app-debug.apk` in Android Studio or install directly to your device via USB.

---

## ✨ Features & Capabilities

### 1. 🤖 Play vs Stockfish AI
* **Adjustable Skill Levels**: Choose from **Beginner (~800 ELO)**, **Intermediate (~1400 ELO)**, **Advanced (~1800 ELO)**, and **Grandmaster (2500+ ELO)**.
* **Side Selection & Board Flipping**: Play as White or Black with automatic board orientation flipping.
* **Fluid Drag-and-Drop & Click-to-Move**: Ultra-smooth custom pointer & touch physics, legal move highlight dots, and check indicators.
* **💡 Best Move Hint Arrows**: Toggle live visual Stockfish arrow suggestions on your turn.
* **Captured Pieces & Material Advantage**: Real-time captured piece icons and running material tally.
* **Interactive Right-Click Markings**: Right-click to highlight squares or drag between squares to draw custom arrows.
* **Clean Promotion Selection**: Intuitive piece selection modal when pawns reach the final rank.
* **Dynamic Audio Engine**: High-fidelity sound effects for moves, captures, checks, and blunders.

---

### 2. 🧠 Empirical Move Valuation & Accuracy Engine
Evaluates move quality using a **Sigmoid Win-Probability Model** ($W = \frac{1}{1 + 10^{-\text{eval} / 4}}$), eliminating false pessimism in winning conversions.

| Classification | Badge | Description |
| :--- | :---: | :--- |
| **Brilliant Move** | 💎 | Awarded for sound **piece sacrifices** (Queen, Rook, or minor pieces) that maintain a winning advantage or lead to forced checkmate. Displays glowing cyan board badges. |
| **Great Move** | 🎯 | Critical tactical turning point or single saving move in a complex position. |
| **Opening Theory** | 📖 | Automatically identifies moves matching master opening lines (e.g. `Theory - The London`, `Theory - Italian Game`, `Theory - Sicilian Defense`). |
| **Best Move** | 🌟 | Top Stockfish engine recommendation ($\Delta W \le 2\%$). |
| **Excellent Move** | ✨ | Nearly optimal move maintaining the full advantage ($\Delta W \le 5\%$). |
| **Good Move** | 👍 | Solid, sensible move ($\Delta W \le 10\%$). |
| **Inaccuracy** | ⚠️ | Sub-optimal move slightly conceding advantage. |
| **Mistake** | ❌ | Noticeable tactical or positional error. |
| **Blunder** | 💥 | Severe mistake causing a major evaluation drop. |
| **Missed Win** | ⚡ | Overlooking an immediate checkmate or decisive tactical win. |
| **Player Accuracy Rating** | `0-100%` | CAPS2-standard move-by-move accuracy score for both White and Black. |

---

### 3. 🔍 Game Analysis & Review Suite
* **Chess.com Direct Account Fetcher**: Enter any public Chess.com username to directly fetch and analyze recent Bullet, Blitz, Rapid, and Daily games via the Chess.com REST API.
* **PGN Import & LocalStorage Library**: Paste any PGN with automatic sanitization and persistent browser storage across sessions.
* **Interactive Evaluation Graph**: Live Canvas timeline chart displaying evaluation swings, equality reference line, move cursor, and click-to-jump scrubbing.
* **⚡ Best Move Simulation**: Press `S` or click *Best Move Simulation* to scrub through Stockfish's optimal continuation line with step-by-step tactical explanations.
* **🎮 Free Mode / Custom Variations**: Freely play any alternative move on the board during analysis to test custom "what if" branches with dedicated purple variation graphs and real-time engine evaluation, without losing original game state.
* **Keyboard Navigation**: Scrub games using `←` / `→` arrow keys, `Home` / `End`, or `Spacebar`.

---

### 4. 🧩 Tactical Puzzles Engine
* **Curated Tactical Categories**: *Checkmate in 1*, *Checkmate in 2*, *Checkmate in 3*, *Material Wins*, and *Endgame Tactics*.
* **Stockfish Refutation Demonstrator**: When an incorrect move is played, Stockfish physically executes the punishing refutation on the board with red arrows showing why the move failed.
* **Progress Overview Modal**: Track solved, failed, and unattempted puzzles with quick category filters and direct *Play* access.
* **Integrated Hints & Retry**: Step-by-step hint arrows and instant reset buttons.

---

### 5. 🎨 Design & Technology Stack
* **UI/UX**: Antigravity Glassmorphism design system with responsive viewport-fit layout (no page scrolling required).
* **Chess Engine**: Stockfish WebAssembly Web Worker running asynchronously on background threads.
* **Rules & Validation**: `chess.js` integration for full FIDE legal move validation and FEN/PGN state handling.
* **Zero External Dependencies**: 100% pure vanilla JavaScript, HTML5 Canvas, and modern CSS.
