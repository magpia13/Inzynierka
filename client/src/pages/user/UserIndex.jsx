import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../common/home/HomePage';
import UserPage from './userPage/UserPage';
import MyBooksPage from './myBooks/MyBooksPage';
import ProfilePage from '../common/profile/ProfilePage';



class UserIndex extends Component { 
  render() {
    const {path} = this.props.match;
  
    return (
      <div> 
      <UserPage> 
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/myBooks" component={MyBooksPage} />
          <Route path="/:user" component={ProfilePage} />

        </Switch>
      </UserPage>
      </div>
    );
  } 
}

export default UserIndex;
 