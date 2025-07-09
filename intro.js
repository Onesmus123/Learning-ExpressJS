const express = require("express"); // Import the express module
const app = express(); // Create an instance of express application
const port = 3000;

app.get("/", (req, res) => {res.send("Hello world!")});
app.listen(port, () => {console.log(`Server  running on: http://localhost:${port}`);});