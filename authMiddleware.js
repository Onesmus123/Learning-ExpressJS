const express = require('express');
const app = express();
const port = 3000;

// Middleware function
const authenticate = (req, res, next) => {
    console.log('Auth middleware has been called.')

    // Get the Authorization header from the request
    const authHeader = req.headers.authorization;

    // If no Authorization header is present, reject the request with 401 (Unauthorized)
    if (!authHeader){
        return res.status(401).send('Authorization required');
    }

    const token = authHeader.split(' ')[1];

    if(token === 'secret-token'){
        req.user = {id:5613, username:'Onesmus'};
        next();
    } else {
        res.status(403).send('Invalid token');
    }
}

app.get('/api/protected',authenticate, (req, res) => {
    res.json({message: 'Protected data', user:req.user});
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})