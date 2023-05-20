const express = require("express");
const chatRouter = express.Router();
const { protect } = require("../middlewares/auth.middleware");


// ! CHAT
chatRouter.route("/").post(protect, accessChat);


// ! GET CHATS
chatRouter.route("/").get(protect, fetchChats);


// ! CREATE GROUP
chatRouter.route("/group").post(protect, createGroupChat);


// ! RENAME GROUP
chatRouter.route("/rename").put(protect, renameGroup);


// ! REMOVE FROM GROUP
chatRouter.route("/groupremove").put(protect, removeFromGroup);


// ! ADD TO GROUP
chatRouter.route("/groupadd").put(protect, addToGroup);

module.exports = chatRouter;