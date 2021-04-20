import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './pages/Form';
import Omega from './pages/Omega';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Form } />
        <Route exact path="/omega" component={ Omega } />
      </Switch>
    );
  }
}

export default Routes;
