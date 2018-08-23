import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from "./components/Login/LoginContainer";
import AdminContainer from "./components/Admin/AdminMenu/AdminContainer";

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={LoginContainer} />
    <Route path='/admin' component={AdminContainer} />
  </Switch>
);