import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import loginAction from 'store/actions/loginAction';
import userAction from 'store/actions/userAction';
import { withRouter } from 'react-router-dom'

class TopBarContainer extends Component {

  componentDidMount(){
    if ((this.props.user||{}).isAuthenticated === true) {
     this.props.getCurrentUser();
    }
  } 

  render() {
    console.log(this.props.user);
    return (
      <TopBar currentUser={this.props.currentUser} 
      userName={(this.props.user||{}).user} logout={()=>this.props.logout(this.props.history)}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    currentUser:state.currentUser
  };
}

function mapDispatchToProps(dispatch){
  return {
    logout: (history)=>dispatch(loginAction.logout(history)),
    getCurrentUser: ()=>dispatch(userAction.getCurrentUser())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBarContainer));
