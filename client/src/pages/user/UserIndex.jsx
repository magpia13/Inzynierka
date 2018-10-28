import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../common/home/HomePage';
import UserPage from './userPage/UserPage';



class UserIndex extends Component { 
  render() {
    const {path} = this.props.match;
  
    return (
      <div> 
      <UserPage> 
        <Switch>
          <Route path="/" component={HomePage} />

        </Switch>
      </UserPage>
      </div>
    );
  } 
}

export default UserIndex;
 