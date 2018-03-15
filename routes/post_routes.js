const express = require("express");
const router = express.Router();
const PostsController = require("../controllers/post_controller");

router.get("/", PostsController.getAllPosts);
router.get("/:id", PostsController.getSinglePost);
router.post("/", PostsController.createPost);
router.patch("/:id", PostsController.updatePost);
router.delete("/:id", PostsController.deletePost);

module.exports = router;
