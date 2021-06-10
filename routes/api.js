var express = require("express");
var app = express();

var storeRouter = require("./store");
var categoryRouter = require("./category");
var productRouter = require("./product");

app.use("/store", storeRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);

module.exports = app;