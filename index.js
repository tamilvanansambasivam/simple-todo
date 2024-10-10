const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
require("./src/config/db");

const app = express();

app.get("/", (req, res) => {
  res.send("simple todo app");
});

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
