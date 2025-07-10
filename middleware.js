const express = require("express");
const app = express();
const port = 3001;

// Global middleware: logs every request
app.use((req, res, next) => {
  console.log('A new request received at ' + new Date().toISOString());
  next();
});

// Specific middleware for /go-there route
app.use("/go-there", (req, res, next) => {
  console.log("Specific Middleware for /go-there");
  next(); // Continue to the next matching route
});

// Route handler for /go-there
app.get("/go-there", (req, res) => {
  res.send("You have reached /go-there");
});

// Route handler for /home
app.get("/home", (req, res) => {
  res.send("Welcome to Homepage");
});

// Route handler for /about
app.get("/about", (req, res) => {
  res.send("Our about page");
});

// Route handler for dynamic member ID
app.get("/members/:memberId", (req, res) => {
  res.send(req.params);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
