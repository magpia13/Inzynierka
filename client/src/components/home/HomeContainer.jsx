import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import userAction from 'store/actions/userAction';
import loginAction from 'store/actions/loginAction';


class HomeContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null
		} 
	};    

componentDidMount(){
	if(this.props.token){
		this.props.getCurrentUser()
	}
	this.props.getUsersList();

}



	render() { 
		const {users} = this.props; 
		return (
			<Fragment>
				<Home locations={users.length>0 ? 
				users.filter(e =>e.location!==undefined).map((e,index) => (e.location.slice(1, -1).split(',')).concat(index))
				: []} logout={this.props.logout}/>
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

export default (connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
 