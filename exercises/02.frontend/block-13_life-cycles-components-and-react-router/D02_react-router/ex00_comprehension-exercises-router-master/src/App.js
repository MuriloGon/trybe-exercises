import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
        <Users />
        <About />
      </BrowserRouter>
    );
  }
}

export default App;
