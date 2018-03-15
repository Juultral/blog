const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const postsRoutes = require("./routes/post_routes");

mongoose.connect("mongodb://admin:admin@ds213759.mlab.com:13759/blog_database");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
const port = process.env.PORT || 5000;
app.use("/uploads", express.static("uploads"));
app.use("/posts/uploads", express.static("uploads"));
app.use(logger("dev"));
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use("/api/posts", postsRoutes);
