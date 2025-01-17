// Setting dotenv variable
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/home", (req, res)=> {
  res.send("hello world");
});

module.exports = app;