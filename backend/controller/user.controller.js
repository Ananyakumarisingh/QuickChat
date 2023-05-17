// const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = process.env.saltRounds;
const jwt_secret = process.env.JWT_SECRET;


exports.registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;
  try {
    if (!name || !email || !password) {
      res.status(400).send("Please fill all the feilds".red.bold);
    }
    const userexist = await UserModel.findOne({ email });
    if (userexist) {
      res.status(403).send("User already exists".red.under);
    }
    bcrypt.hash(req.body.password, +saltRounds, async (err, hashPass) => {
      if (err) {
        res.status(500).json({ msg: err.message });
      }
      req.body.password = hashPass;
      user = new UserModel(req.body);
      await user.save();
      res.status(201).json({ msg: "User Created Successfully" });
    });
  } catch (error) {
    res.status(400).send(err);
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.find({ email });
    if (user.length) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (err) return res.status(500).json({ msg: err.message });

        if (result) {
          var token = jwt.sign({ data: user[0].id }, jwt_secret, {
            expiresIn: "2 days",
          });
          const name = user[0].name;
          const email = user[0].email;
          const pic = user[0].pic;
          const createdAt = user[0].createdAt;
          res.send({ token, name, email, pic, createdAt });
        } else {
          res.status(400).send({ msg: "Invalid Credentials" });
        }
      });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    return res.status(500).json({ msg: err.message });
    // console.log(error);
  }
};