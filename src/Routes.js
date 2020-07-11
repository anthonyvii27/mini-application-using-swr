import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Cars } />
        <Route path="/profile/:id" component={ CarDetails } />
      </Switch>
    </Router>
  )
}
