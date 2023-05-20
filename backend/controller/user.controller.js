const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const UserModel = require("../models/user.model");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  try {
    if (!name || !email || !password) {
      res.status(400).send("Please Enter all the Feilds");
    }

    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400).send("User already exists");
    }

    const user = await UserModel.create({
      name,
      email,
      password,
      pic,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Something went wrong while registration");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  
    const user = await UserModel.findOne({email});
    if (user && (await user.matchPassword(password))) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.send(401).status("Invalid Email or Password");
    }
});


const allUser = asyncHandler(async (req, res) => {
  const payload = req.query.search ? {
    $or: [
      {name: { $regex: req.query.search, $option: "i"}},
      {email: { $regex: req.query.search, $option: "i"}},
    ],
  } : {};
  const users = (await UserModel.find(keyword)).find({_id: { $ne: req.user._id }});
  res.status(200).send(users)
});



module.exports = {registerUser, authUser};