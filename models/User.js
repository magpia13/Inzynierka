const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	// surName:{
	// 	type:String,
	// 	required:true
	// },
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	userType:{
	type: String,
    default: '0  '
},
	location:{
	type: String,
    required:true
}, 

}); 
  
module.exports = User = mongoose.model('users',UserSchema);