const express = require('express');
const Chess = require('chess.js').Chess;
const app = express();
const port = 3000;

let game = new Chess();

app.use(express.json());

app.get('/board', (req, res) => {
    res.json({ fen: game.fen() });
});

app.post('/move', (req, res) => {
    const { move } = req.body;
    const result = game.move(move);
    if (result) {
        res.json({ fen: game.fen(), move: result });
    } else {
        res.status(400).json({ error: 'Invalid move' });
    }
});

app.listen(port, () => {
    console.log(`Chess game app listening at http://localhost:${port}`);
});
