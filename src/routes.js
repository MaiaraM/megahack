import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Verification from './pages/verification';


const Routes =() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/Verification" component={Verification}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
