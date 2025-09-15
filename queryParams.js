// Query parameters are key-value pairs that appear after the ? in a URL.

// They are automatically parsed by Express and available in req.query.

const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
    const {name, age} = req.query;
    res.send(`name: ${name} age: ${age}`);
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});