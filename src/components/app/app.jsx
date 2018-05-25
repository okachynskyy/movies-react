import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SearchLayout } from '../../layouts/search';
import { DetailsLayout } from '../../layouts/details';


export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchLayout} />
        <Route path="/film/:id" component={DetailsLayout} />
      </Switch>
    </Router>
  );
}
