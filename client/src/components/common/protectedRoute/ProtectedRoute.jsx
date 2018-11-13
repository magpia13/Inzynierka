import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  constructor(props){
    super(props);
    this.validateRole=this.validateRole.bind(this);
  }

  render() {
    const { component: Component, userType, ...rest } = this.props;
    console.log(userType);
    return (
      <Route
        {...rest}
        render = {props => 
          this.validateRole(userType) ?
          (<Component {...props} />) :
          (<Redirect to="/" />)}
      />
    );
  } 

  validateRole(userType){
    const { user } = this.props;
    console.log(user);
    return user && user.userType === userType; 
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ProtectedRoute) 