const asyncHandler = require("express-async-handler");
const ChatModel = require("../models/chat.model");
const UserModel = require("../models/user.model");


const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
      console.log("UserId param not sent with request");
      return res.sendStatus(400);
    }

    var isChat = await ChatModel.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");

    isChat = await UserModel.populate(isChat, {
      path: "latestMessage.sender",
      select: "name pic email",
    });

    if (isChat.length > 0) {
      res.send(isChat[0]);
    } else {
      var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user._id, userId],
      };

      try {
        const createdChat = await ChatModel.create(chatData);
        const FullChat = await ChatModel.findOne({
          _id: createdChat._id,
        }).populate("users", "-password");
        res.status(200).json(FullChat);
      } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
});


const fetchChats = asyncHandler( async(req, res) => {
    try {
        ChatModel.find({ users: { $elemMatch: { $eq: req.user._id } } }).populate("users", "-password").populate("groupAdmin", "-password").populate("latestMessage").sort({updatedAT: -1}).then( async (result) => {
            result = await UserModel.populate(isChat, {
                path: "latestMessage.sender",
                select: "name pic email"
            });
            res.status(200).send(result);
        }) ;
    } catch (error) {
        res.status(400);
        throw new Error(error.message)
    }
});


const createGroupChat = asyncHandler( async(req, res) => {
    if ( !req.body.users || !req.body.name ) {
        return res.status(400).send({message: "Please fill all the feilds"});
    }
    
    var users = JSON.parse(req.body.users);
    if (users.length < 2) {
        res.status(400).send("More than 2 users are required to form a group chat");
    }
    users.push(req.user);

    try {
        const groupChat = await ChatModel.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.user,
        });
        const FullGroupChat = await ChatModel.findOne({
            _id: groupChat._id,
        })
        .populate("users", "-password")
        .populate("groupAdmin", "-password");
        res.status(201).json(FullGroupChat);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});


const renameGroup = asyncHandler( async(req, res) => {

});


const removeFromGroup = asyncHandler(async (req, res) => {});



const addToGroup = asyncHandler(async (req, res) => {});





module.exports = { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup }