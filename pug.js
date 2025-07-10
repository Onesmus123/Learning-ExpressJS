const express = require("express");
const app = express();
const port = 3001;

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/hello", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});