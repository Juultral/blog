const express = require("express");
const router = express.Router();
const multer = require("multer");
const PostsController = require("../controllers/post_controller");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./images");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", PostsController.getAllPosts);
router.get("/:id", PostsController.getSinglePost);
router.post("/", upload.single("image"), PostsController.createPost);
router.patch("/:id", upload.single("image"), PostsController.updatePost);
router.delete("/:id", PostsController.deletePost);

module.exports = router;
