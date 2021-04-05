import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import StrictAccess from './StrictAcess';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/users'><li>Users</li></Link>
            <Link to='/strict-access'><li>Strict Access</li></Link>
          </ul>
        </nav>

        <Switch>
          <Route path='/strict-access'>
            <StrictAccess user={{ username: 'joaos', password: '1234' }} />
          </Route>

          <Route path='/users/:id'>
            <Users greetingMessage='Good Morning' />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
