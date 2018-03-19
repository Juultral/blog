const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");

exports.getAllUser = (req, res, next) => {
  User.find()
    .exec()
    .then(docs => res.json(docs))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.getSingleUser = (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .exec()
    .then(doc => {
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

exports.createUser = (req, res, next) => {
  const user = {
    login: req.body.login,
    password: req.body.password,
    nickname: req.body.nickname
  };
  const newUser = new User(user);
  newUser
    .save()
    .then(result => console.log("Post created"))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  User.remove({ _id: id })
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

exports.updateUser = (req, res, next) => {
  const id = req.params.id;
  User.update({ _id: id }, { $set: req.body })
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
