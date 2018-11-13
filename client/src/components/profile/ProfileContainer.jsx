import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';

class ProfileContainer extends Component {

  render() {
  	const {user} = this.props;
  	console.log(user);
    return (
        <Profile user={user} />
    );
  } 
}


function mapStateToProps (state,ownProps) {
	return {
		user:state.users.find(e => e._id === ownProps.userId),
	}
}


function mapDispatchToProps(dispatch) {
	return {
	


	} 
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
     