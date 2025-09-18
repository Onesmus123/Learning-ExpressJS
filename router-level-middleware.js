const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.use((req, res, next) => {
    console.log("My middleware!");
    next(); // pass to the next route
});

router.get('/', (req, res) => {
    res.send("I am Onesmus Mutyauvyu!");
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
