const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const keys = require('../../config/keys');
const passport = require('passport');

router.get('/test', (req,res) => res.json({msg:"ss"}));


router.post('/register',(req,res) => {
	User.findOne({email: req.body.email})
	.then(r => {
		if(r){
			return res.status(400).json({email:'Exists'})
		}
		else{
			const newUser = new User({
				name:req.body.name,
				email:req.body.email,
				password:req.body.password
			})

			bcryptjs.genSalt(10, (err,salt) => {
				bcryptjs.hash(newUser.password,salt, (err,hash) => {
					if(err) throw err;
					newUser.password = hash;
					newUser.save()
					.then(r => res.json(r))
					.catch(err => console.log(err))
				})
			} )
		}
	})
});

router.post('/login',(req,res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({email})
	.then(u => {
		if(!u){
			return res.status(404).json({email:'User does not exist'});
		}

		bcryptjs.compare(password, u.password).then(r => {
			if(r) {
				const payload = {id: u.id, name:u.name};
				jwt.sign(payload, keys.secret, { expiresIn: 3600}, (err, token) => {
					res.json({
						token: 'Bearer ' + token
					})
				});
			}
			else{
				return res.status(400).json({password:'Incorrect'});
			}
		});
	});
});

router.get('/current', passport.authenticate('jwt', {session:false}), (req,res) => {
	res.json({msg:'Success'})
})
module.exports = router;