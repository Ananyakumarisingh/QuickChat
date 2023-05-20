const express = require("express");
const { registerUser, authUser } = require("../controller/user.controller");
const router = express.Router();

// ! REGISTER
router.route("/register").post(registerUser);

// router.route("/").get(protect, allUsers);

// ! LOGIN
router.post("/login", authUser);

// ! FORGOT PASSWORD
// userRouter.post("/register", controller.forgetPassword);

module.exports = router;
