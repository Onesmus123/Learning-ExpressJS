const express = require('express');
const app = express();
const port = 3000;

// Middleware function
const logger = (req, res, next) => {
    const time = new Date().toISOString();
    console.log(`${time} - ${req.method} ${req.url}`) // Log the current timestamp, HTTP method and requested URL
    next()
}

// Register the logger middleware for all incoming requests
app.use(logger)

app.get('/', (req, res) => {
    res.send('Hello, I am Onesmus Mutyauvyu!')
})

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})