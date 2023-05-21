const express = require("express");
const { registerUser, authUser, allUsers } = require("../controller/user.controller");
// const { protect } = require("../middlewares/auth.middleware");
const router = express.Router();

// ! REGISTER
router.route("/register").post(registerUser).get( allUsers);

// ! Search other users
// router.route("/").get(protect, allUsers);

// ! LOGIN
router.post("/login", authUser);

// ! FORGOT PASSWORD
// userRouter.post("/forgotpassword", controller.forgetPassword);

module.exports = router;
