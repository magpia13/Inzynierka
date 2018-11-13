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
const Channel = require('../../models/Channel');
const http = require('http').Server(express);
const io = require('socket.io')(http);
const Message = require('../../models/Message');

module.exports = router;

  router.post('/new_channel', function(req, res) {
    console.log(req);
    var newChannel = new Channel(req.body);
    newChannel.save(function (err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  });  


  router.get('/list', (req, res) => {
  const errors = {};

  Channel.find()
    .then(channels => {
      if (!channels) {
        errors.noprofile = 'There are no channels';
        return res.status(404).json(errors);
      }

      res.json(channels);
    })
    .catch(err => res.status(404).json({ profile: 'There are no channels' }));
});