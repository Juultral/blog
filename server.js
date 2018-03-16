const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const postsRoutes = require("./routes/post_routes");
const userRoutes = require("./routes/user_routes");
const bodyParser = require("body-parser");
const path = require("path");

mongoose.connect("mongodb://admin:admin@ds213759.mlab.com:13759/blog_database");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
const port = process.env.PORT || 5000;

app.use("/images", express.static("images"));
app.use("/posts/images", express.static("images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(logger("dev"));
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use("/api/posts", postsRoutes);
app.use("/api/users", userRoutes);
