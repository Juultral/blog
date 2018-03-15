const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Post");

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .exec()
    .then(docs => res.json(docs))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.getSinglePost = (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.createPost = (req, res, next) => {
  const post = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };
  const newPost = new Post(post);
  newPost
    .save()
    .then(result => console.log("Post created"))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  Post.remove({ _id: id })
    .exec()
    .then(result => {
      console.log("Post deleted");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.updatePost = (req, res, next) => {
  const id = req.params.id;
  Post.update({ _id: id }, { $set: req.body })
    .exec()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
