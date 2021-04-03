import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to='/'><li>Home</li></Link>
          <Link to='/users'><li>Users</li></Link>
          <Link to='/about'><li>About</li></Link>
        </nav>

        <Switch>
          <Route path='/users'> <Users greetingMessage='Good Morning'/> </Route>
          <Route path='/about'> <About /> </Route>
          <Route path='/'> <Home /> </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
