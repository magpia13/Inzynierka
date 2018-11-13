const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterData= require('../../validation/register');
const validateLoginData= require('../../validation/login');
const Chat = require('../../models/Chat');
const ChatDetail = require('../../models/ChatDetail');
const http = require('http').Server(express);
const io = require('socket.io')(http);
const Message = require('../../models/Message');
const Channel = require('../../models/Channel');

module.exports = router;

// export const r = (f) => dispatch => {
//  axios.post
// }
router.get('/list', (req, res, next) => {
    Chat.find()
        .sort({ date: -1 })
        .then(chats => res.json(chats));
});
router.post('/create', (req, res) => {
    let newChat = new Chat({
        roomName: req.body.roomName,
    });
    console.log(req.body);
    Chat.addChatRoom(newChat, (err, chat) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Can not create Chat room'
            });
        }
        else {
            res.json ({
                success: true,
                msg: 'Successfully created a chat room'
            });
        }
    });
});

  router.post('/newmessage', (req, res) => {
    var newMessage = new Message(req.body);
    newMessage.save(function (err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });

router.get('/messages', (req, res) => {
  Message.find()
    .then(m => {
      if (!m) {
        errors.noprofile = 'There are no messages';
        return res.status(404).json(errors);
      }

      res.json(m);
    })
    .catch(err => res.status(404).json({ profile: 'There are no users' }));
});

router.get('/messages/:channelID', (req, res) => {
  Message.find({channelID:req.params.channelID}).sort({_id:-1}).limit(10)
    .then(m => {
      if (!m) {
        errors.noprofile = 'There are no messages';
        return res.status(404).json(errors);
      }

      res.json(m);
    })
    .catch(err => res.status(404).json({ profile: 'There are no users' }));
});


router.post('/addMsg/:id', (req, res, next) => {
    const chatId = req.params.id;
    let newMsg = new ChatDetail({
        chatId: chatId,
        chatMsg: req.body.chatMsg,
        msgBy: req.body.msgBy,
    });
    ChatDetail.addChatMsg(newMsg, (err, chatMsgs) => {
        if (err) {
            res.json({
                success: false,
                msg: 'No msg send'
            });
        }
        else {

            // res.json ({success: true, msg: 'Successfully Send a msg'});
            // io.on('connection', function (socket) {
            //     socket.on('getMsgBy', function(data) {
            //                               console.log("lslslsl",chatMsgs);

            //         socket.emit('msgData', {msgBy: data});
            //     });

            //     socket.on('msgToAll', function(data) {
            //         //Send message to everyone
            //         io.sockets.emit('newmsg', data);
            //     });
            // });
            io.emit('message', req.body);
        }
    });

});

module.exports = router;
