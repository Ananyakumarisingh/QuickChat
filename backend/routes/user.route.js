const express = require("express");
const controller = require("../controller/user.controller");
const userRouter = express.Router();

// ! REGISTER
userRouter.post("/register", controller.registerUser);

// ! LOGIN
userRouter.post("/login", controller.loginUser);

// ! FORGOT PASSWORD
// userRouter.post("/register", controller.forgetPassword);

module.exports = userRouter;
