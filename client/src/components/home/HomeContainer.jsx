import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import userAction from 'store/actions/userAction';
import loginAction from 'store/actions/loginAction';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';


class HomeContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
		} 
	};    

	componentDidMount(){
		if(this.props.token){
			this.props.getCurrentUser()
		}
		this.props.getUsersList();

	}

	click = (i) => {
		this.setState(prevState => ({displayInfo:prevState.displayInfo === i ? null : i}))
	}
	redirectToProfile = (user,userId) => {
		this.props.history.push( {pathname: `${user}`,
			state: { id: userId }});

	}

	render() { 
		const {users,match} = this.props; 
		return (
			<Fragment>
			<Home
			locations={users.length>0 ? 
				users.filter(e =>e.location!==undefined).map((e,index) => (e.location.slice(1, -1).split(',')).concat(e))
				: []} logout={this.props.logout}
				click={this.click} match={match} redirectToProfile={this.redirectToProfile}
				displayInfo={this.state.displayInfo}  />
				</Fragment>
				);
	} 
}

function mapStateToProps (state) {
	return {
		token: state.token,
		user:state.user,
		users:state.users,
		registartionAction:state.registartionAction
	}
}


function mapDispatchToProps(dispatch) {
	return {
		getCurrentUser: () => dispatch(userAction.getCurrentUser()),
		logout: () => dispatch(loginAction.logout()),
		getUsersList: () => dispatch(userAction.getUsersList()),


	} 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
