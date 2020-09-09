import React from 'react';
import {
  BrowserRouter, Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Authenticate from './loggedIn/pages/Authenticate/index';
import Dashboard from './loggedIn/pages/Dashboard/components/addInspection/index';
import Inspection from './loggedIn/pages/Inspection/index';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Authenticate} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/inspection:id' component={Inspection} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
