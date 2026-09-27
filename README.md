# ♟ Antigravity Web Chess & Analysis Suite

A feature-rich, client-side Web Chess application featuring **Play vs Stockfish AI**, **Real-Time Position Evaluation Bar**, **Chess.com PGN Game Importer & Analysis Suite**, and an **Interactive Master Puzzles Engine**.

---

## 🎮 Play Live
Play directly in your browser:
👉 **[https://JannikLueers.github.io/ChessApp/](https://JannikLueers.github.io/ChessApp/)**

---

## ✨ Features

### 1. 🤖 Play vs Stockfish AI
* Selectable difficulty levels: **Beginner (~800)**, **Intermediate (~1400)**, **Advanced (~1800)**, and **Grandmaster (2500+)**.
* Configurable side (White / Black) and Flip Board view.
* Interactive drag-and-drop piece movement with legal move highlight dots.
* Optional **💡 Engine Best Move Hint Arrows** drawn directly on the board during your turn.

### 2. 📊 Real-Time Vertical Evaluation Bar & Badges
* Live Stockfish advantage meter updating after every move.
* Numerical score display (`+1.8`, `-0.5`, `#3` mate in 3).
* Instant Move Quality Badges: 🌟 **Best Move**, 👍 **Good**, ⚠️ **Inaccuracy**, ❌ **Mistake**, 💥 **Blunder**.

### 3. 🔍 Chess.com Game Analysis & Saved Games Library
* Import PGN notation from downloaded Chess.com or Lichess games.
* Step-by-step game scrubber with keyboard `←` / `→` arrow key navigation.
* Floating move quality badges rendered directly on the destination square.
* Stockfish player accuracy score calculations (e.g. White: **94.5%** | Black: **82.1%**).
* LocalStorage game library to store and switch between multiple analyzed games.

### 4. 🧩 30 Documented Historical Master Puzzles
* **Categories:** Checkmate in 1, Checkmate in 2, Checkmate in 3, Material Wins, Endgame Tactics, and Mixed Mode.
* **Automatic Progression:** Seamless transition to the next puzzle upon solving.
* **Stockfish Refutation Engine:** When an incorrect move is played, Stockfish executes the refutation move on the board with a red arrow showing how the mistake is punished!

---

## 🚀 How to Enable GitHub Pages (Free Web Hosting)

1. Go to your repository settings on GitHub: **`Settings` -> `Pages`**.
2. Under **Build and deployment**:
   * **Source**: Choose `Deploy from a branch`.
   * **Branch**: Select `master` (or `main`) / folder `/ (root)`.
3. Click **Save**. Within 1-2 minutes, your game will be live at:
   `https://JannikLueers.github.io/ChessApp/`
