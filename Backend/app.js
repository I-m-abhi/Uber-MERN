// setting dotenv variable
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
// connect to MongoDB Database
const connectToDb = require("./db/db");
connectToDb();

const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/home", (req, res) => {
  res.send("hello world");
});

app.use("/users", userRoutes);

module.exports = app;