const express = require("express");
const logger = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
  );

  // Server static assets
  app.use(express.static(path.join(__dirname, "..", "build")));

  

  module.exports = app;
