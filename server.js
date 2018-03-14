const express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://@ds213759.mlab.com:13759/blog_database");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
