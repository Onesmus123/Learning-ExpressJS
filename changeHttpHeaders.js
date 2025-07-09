// Import the Express framework
const express = require("express");

// Create an instance of the Express application
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // Set the Content-Type header to application/json
    res.set('Content-Type', 'application/json');

    // Send a JSON response as a string
    res.send(JSON.stringify({ message: "Hello World" }));
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
