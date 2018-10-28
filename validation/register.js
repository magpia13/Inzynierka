const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterData(data){
	let errors = {};

	if(!Validator.isLength(data.name, {min:2, max:50})){
		errors.name = 'Name must be between 2 and 50 characters';
	}

	if(!Validator.isLength(data.password, {min:2, max:50})){
		errors.password = 'Password must be between 2 and 50 characters';
	}
	if(Validator.isEmpty(data.name)){
		errors.name = 'Name field is required';
	}
	if(Validator.isEmpty(data.email)){
		errors.email = 'Email field is required';
	}
	if(Validator.isEmpty(data.location)){
		errors.location = 'Location field is required';
	}
	if(!Validator.isEmail(data.email)){
		errors.email = 'Email is incorrect';
	}
	if(Validator.isEmpty(data.password)){
		errors.password = 'Password field is required';
	}
	if(!Validator.equals(data.password, data.password2)){
		errors.password2 = 'Passwords must be the same';
	}

	return {   
		errors,
		isValid:isEmpty(errors)
	}
}  