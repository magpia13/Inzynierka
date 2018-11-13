const mongoose = require('mongoose');

// Chat Schema
const ChatSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
});

const Chat =  module.exports = mongoose.model('Chat', ChatSchema);

module.exports.addChatRoom = function (newChat, callback) {
    newChat.save(callback);
};