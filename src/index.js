const express = require("express");
const { MongoClient } = require("mongodb");
const morgan = require("morgan");
const PostController = require("./app/controllers/PostController");
const app = express();
const port = 3000;

const db = require("./config/db");

// connect db
db.connect();

app.use(morgan("combined"));

app.get("/", PostController.index);

app.get("/home", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello home ddsá!");
});

app.get("/product", (req, res) => {
  res.send("Hello product!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
