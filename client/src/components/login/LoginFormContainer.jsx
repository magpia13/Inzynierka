import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import login from 'store/actions/loginAction';
import { withRouter } from 'react-router'

class LoginFormContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			email: '', 
			password: '',

		} 
	};    


	login = () => {
		this.props.login(this.state);

	}
componentDidUpdate(prevProps) {
  if (this.props.token !== prevProps.token) {
          this.props.history.push('/');

  }
}
	render() {

		return (
			<Fragment>
				<LoginForm 
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
  }
}


function mapDispatchToProps(dispatch) {
	return {
		login: (registrationInfo) => dispatch(login(registrationInfo))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
 