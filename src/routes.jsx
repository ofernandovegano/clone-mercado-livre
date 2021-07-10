import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import Search from './pages/search/search.component';
import Show from './pages/show/show.component'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route exact path='/items' component={ Search } />
    <Route path='/items/:id' component={ Show } />
  </Switch>
);

export default Routes;