const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ status: "server running", message: "Node.js application is up and running!" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
