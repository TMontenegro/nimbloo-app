import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/index';
import Authenticate from './pages/Authenticate/index';
import Dashboard from './pages/Dashboard/index';
import Inspection from './pages/Inspection/index';

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