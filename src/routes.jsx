import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search/search';

const Routes = () => (
  <Switch>
    <Route exact path='/' />
    <Route exact path='/items' component={ Search }/>
    <Route path='/items/:id' />
  </Switch>
);

export default Routes;