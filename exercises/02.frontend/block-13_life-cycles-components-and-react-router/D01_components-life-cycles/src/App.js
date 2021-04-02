import React from 'react';
import './App.css';
import DogCard from './DogCard';

class App extends React.Component {
  state = {
    dogKey: false
  }

  newDog = () => {
    this.setState((st) => ({ dogKey: !st.dogKey }))
  }

  render() {
    return (
      <div className='container'>
        <div className='card'>
          <div className='newDog'>
            <button onClick={this.newDog}>New Dog</button>
          </div>
          <DogCard key={Number(this.state.dogKey)} />
        </div>
      </div>
    )
  }
}

export default App;
