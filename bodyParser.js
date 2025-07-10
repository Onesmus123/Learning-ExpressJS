const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3001;

// Parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON data
app.use(bodyParser.json());

// POST route for handling JSON data
app.post("/json-data", (req, res) => {
  console.log("Received JSON data:", req.body); // Log the received JSON data
  res.json({
    message: "JSON data received successfully!",
    receivedData: req.body
  });
});

// POST route for handling URL-encoded data
app.post("/urlencoded-data", (req, res) => {
  console.log("Received URL-encoded data:", req.body); // Log the received data
  res.json({
    message: "URL-encoded data received successfully!",
    receivedData: req.body
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
