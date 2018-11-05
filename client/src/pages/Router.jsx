import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegistrationPage from './common/registration/RegistrationPage';
import LoginPage from './common/login/LoginPage';
import UserIndex from './user/UserIndex';


class Router extends Component { 
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/registration/" component={RegistrationPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/" component={UserIndex} />
        </Switch>
      </BrowserRouter>
    );
  } 
}  

export default Router;
            