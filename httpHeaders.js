// Import the Express module
const express = require("express");
const app = express();
const port = 3000;

// Define the root route
app.get('/', (req, res) => {
    // Log all request headers
    console.log("All Headers:", req.headers);

    // Log a specific header: 'User-Agent'
    console.log("User-Agent:", req.header('User-Agent'));

    // Send a JSON response
    res.send({ name: "Onesmus Mutyauvyu" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
