import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
import Score from './components/Score';

class App extends React.Component {
  render() {
    return (
      <div className="garfield-background row">
        <div className="col newForm">
          <Quiz />
        </div>
        <div className="col newScore">
          <Score />
        </div>
      </div>
    );
  }
}

export default App;
