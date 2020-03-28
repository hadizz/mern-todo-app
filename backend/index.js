const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// midlleWares
app.use(cors());
app.use(bodyParser.json());

// import routes

// routes
app.get("/", (req, res) => {
  res.send("hello😍, welcome to api");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

// connect to db

// start listening to the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));
