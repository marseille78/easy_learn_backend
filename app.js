const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "test"
  })
});

module.exports = app;