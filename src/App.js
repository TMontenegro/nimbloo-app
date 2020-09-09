import React from 'react';
import {
  BrowserRouter, Switch,
  Route
} from 'react-router-dom';
import './App.css';

import Nav from './loggedIn/components/Nav/index';
import Authenticate from './loggedIn/pages/authenticate/index';
import Dashboard from './loggedIn/pages/dashboard/index';
import Inspection from './loggedIn/pages/inspection/index';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact component={Authenticate} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/inspection:id' component={Inspection} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
