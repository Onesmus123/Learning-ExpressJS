// Route parameters are named URL segments that capture values at specific positions in the URL.

// They are specified in the path with a colon : prefix.

const express = require('express');
const app = express();
const port = 3000;

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(`userId: ${req.params.userId} bookId: ${req.params.bookId}`);
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});