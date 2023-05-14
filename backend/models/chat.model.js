const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    latestMessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true});

const ChatModel = mongoose.model("chat", chatSchema);

module.exports = ChatModel;








// chatName
// isGroupChat? 
//          ==> yes, Admin ?
// users
// latesMessage

