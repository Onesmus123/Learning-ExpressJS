const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // Redirect to an external URL with 302 (Found) status code
    res.redirect(302, 'https://mutyauvyu.netlify.app/');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});

/*
Notes on res.redirect():
1. You can redirect to an absolute path — e.g., "/go-there"
2. You can redirect to a full URL — e.g., "https://mutyauvyu.netlify.app/"
3. You can redirect using a relative path — e.g., "go-there"
4. You can use "../" to go up one directory level
*/