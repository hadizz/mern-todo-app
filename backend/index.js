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
  res.send("hello😍, welcome to todo API");
});

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

// start listening to the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));
