import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path='/' />
    <Route exact path='/items' />
    <Route path='/items/:id' />
  </Switch>
);

export default Routes;