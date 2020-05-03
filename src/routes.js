import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Main from './main';
import EventsPage from './pages/eventoPage';
import Verification from './pages/verification'


const Routes =() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/main" component={Main}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
