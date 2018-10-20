const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const passport = require('passport');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const db = require('./config/keys').mongoURI;
mongoose.connect(db)
	.then(() => console.log("success"))
	.catch(err => console.log(err))

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users',users);

const port = 5000;

app.listen(port, () => console.log(`port ${port}`));