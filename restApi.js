const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json())

// GET all users
app.get('/users', (req, res) => {
    res.status(200).json({ message: "Returning all users." });
});

// POST a new user
app.post('/users', (req, res) => {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Enter username, email and password." });
    }

    res.status(201).json({ message: "New user created successfully" });
});

// PUT (update) an existing user by ID
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const newUser = req.body;

    res.status(200).json({
        message: `User with ID ${userId} updated successfully.`,
        updatedUser: newUser
    });
});

// DELETE a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User with ID ${userId} deleted successfully.` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
