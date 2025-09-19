const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const authenticateUser = (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || username.length < 3) {
        return res.status(400).json({ error: "Username MUST have at least 3 characters" });
    }

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: "Enter a valid email." });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ error: "Password MUST be at least 6 characters." });
    }

    next(); // All validations passed
};

app.post('/api/users', authenticateUser, (req, res) => {
    res.status(201).json({ message: "Successfully created new user." });
});

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
