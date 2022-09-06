"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const validateNumber = require("./middlewares/validate-number.js");
const errorHandler = require("./error-handlers/500.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/square", validateNumber, (req, res) => {
  res.status(200).json({ num: req.query.num ** 2 });
});

app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Server up on ${port}`));
}

module.exports = {
  app: app,
  start: start,
};
