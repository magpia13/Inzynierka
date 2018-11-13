import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../common/home/HomePage';
import UserPage from './userPage/UserPage';
import MyBooksPage from './myBooks/MyBooksPage';
import ProfilePage from '../common/profile/ProfilePage';
import ChatPage from './chat/ChatPage';
import ChatDetailPage from './chatDetail/ChatDetailPage';



class UserIndex extends Component { 
  render() {
    const {path} = this.props.match;
  
    return (
      <div> 
      <UserPage> 
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:user" component={HomePage} />
          <Route exact path="/:user/myBooks" component={MyBooksPage} />
          <Route exact path="/:user/chat" component={ChatPage} />
          <Route exact path="/profile/:user" component={ProfilePage} />
          <Route exact path={`/chatDetail/:chatListId`} component={ChatDetailPage} />
        </Switch>
      </UserPage>
      </div>
    );
  } 
}

export default UserIndex;
   