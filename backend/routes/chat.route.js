const express = require("express");
const chatRouter = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require("../controller/chat.controller");


// ! CHAT
chatRouter.route("/").post(protect, accessChat);


// ! GET CHATS
chatRouter.route("/").get(protect, fetchChats);


// ! CREATE GROUP
chatRouter.route("/group").post(protect, createGroupChat);


// ! RENAME GROUP
chatRouter.route("/rename").put(protect, renameGroup);


// ! ADD TO GROUP
chatRouter.route("/groupadd").put(protect, addToGroup);


// ! REMOVE FROM GROUP
chatRouter.route("/groupremove").put(protect, removeFromGroup);

module.exports = chatRouter;