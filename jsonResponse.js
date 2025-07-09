const express = require("express");        // Import the Express framework
const app = express();                     // Create an instance of an Express application
const port = 3000;                         

app.get('/', (req, res) => {               // Define a GET route at the root URL "/"
  res.json({ name: "Onesmus Mutyauvyu" }); // Send a JSON response
});

app.listen(port, () => {                   
  console.log(`Server running on http://localhost:${port}`);
});
