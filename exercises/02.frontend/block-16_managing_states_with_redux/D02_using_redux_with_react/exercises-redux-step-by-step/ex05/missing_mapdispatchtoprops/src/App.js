import React from 'react';
import './App.css';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="omega-background">
        <Routes />
      </div>
    );
  }
}

export default App;
