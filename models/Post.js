const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  date: String,
  idUser: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
