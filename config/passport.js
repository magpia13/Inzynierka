const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

const obj = {};
obj.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
obj.secretOrKey = keys.secret;

module.exports = passport => {
	passport.use(
		new JwtStrategy(obj, (jwt_payload, done) => {
			User.findById(jwt_payload.id)
			.then(u => {
				if(u){
					return done(null,u);
					console.log(u);
				}
				return done(null,false);
			})
			.catch(err => console.log(err))
		})
	)
}