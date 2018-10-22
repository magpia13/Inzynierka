import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import registerAction from 'store/actions/registerAction';

class RegistrationFormContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			email: '', 
			password: '',
			password2:''

		} 
	};    


	register = () => {
		this.props.registerAction(this.state);

	}

	render() {

		return (
			<Fragment>
				<RegistrationForm 
				formData={this.state} 
				onChange={v=>this.setState(v)} 
				action={this.register} />
			</Fragment>
			);
	}
}


function mapDispatchToProps(dispatch) {
	return {
		registerAction: (registrationInfo) => dispatch(registerAction(registrationInfo))
	}
}

export default connect(null, mapDispatchToProps)(RegistrationFormContainer);
 