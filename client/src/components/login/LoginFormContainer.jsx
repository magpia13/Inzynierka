import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import loginAction from 'store/actions/loginAction';
import { withRouter } from 'react-router'

class LoginFormContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			email: '', 
			password: '',
			errors:{}

		} 
	};    

	login = () => {
		this.props.login(this.state,this.props.history);

	}
	componentDidUpdate(prevProps) {
		if (this.props.token !== prevProps.token) {
			this.props.history.push('/');

		}
		if (this.props.errors !== prevProps.errors) {
			this.setState({errors:this.props.errors});
		}
	}
	
	render() {
		return ( 
			<Fragment>
				<LoginForm 
				errors={this.state.errors}
				formData={this.state} 
				onChange={v=>this.setState(v)} 
				action={this.login} />
			</Fragment>
			);
	}
}
function mapStateToProps (state) {
	return {
		token: state.token,
		errors:state.error
	}
}


function mapDispatchToProps(dispatch) {
	return {
		login: (state,history) => dispatch(loginAction.login(state,history))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
