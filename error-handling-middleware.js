const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    throw new Error ('Test Error')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong')
})

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})