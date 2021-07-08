import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/search/search.component';
import Show from './pages/show/show.component'

const Routes = () => (
  <Switch>
    <Route exact path='/' />
    <Route exact path='/items' component={ Search } />
    <Route path='/items/:id' component={ Show } />
  </Switch>
);

export default Routes;