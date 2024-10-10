const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("simple todo app");
});

app.listen(5555, () => console.log("http://localhost:5555"));
