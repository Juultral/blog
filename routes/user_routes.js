const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user_controller");

router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getSingleUser);
router.post("/", UserController.createUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
