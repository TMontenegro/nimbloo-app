import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './logged-in/components/Nav/index';
import Authenticate from './logged-in/pages/Authenticate/index';
import Dashboard from './logged-in/pages/Dashboard/index';
import Inspection from './logged-in/pages/Inspection/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={Authenticate} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/inspection:id' component={Inspection} />
      </Switch>
    </BrowserRouter>
  );
}