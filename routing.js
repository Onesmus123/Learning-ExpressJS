const express = require("express");
const app = express();
const port = 3001;

app.get("/uppercase/:theValue", (req, res) => {
    res.status(200)
  res.send(req.params.theValue.toUpperCase()); // ✅ Now calling the method
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});


/*
If you go to http://localhost:3001/uppercase/hello, the server will respond with: HELLO
*/