const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.cookie('username', 'Onesmus Mutyauvyu', {
    expires: new Date(Date.now() + 900000), // 15 minutes
    httpOnly: true
  });
  res.send('Cookie has been set'); // Send a response
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
