const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const routes = require("./src/routes/routes");
require("dotenv").config();
require("./src/config/db/mysqlConn");

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1/", routes);

module.exports = app;
