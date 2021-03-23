import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.currentPokemon = this.currentPokemon.bind(this);
    this.handleCurrentPokemon = this.handleCurrentPokemon.bind(this);
    this.handleType = this.handleType.bind(this);
    this.state = {
      currentIndex: 0,
      currentType: '',
    };
    this.types = [...new Set(pokemons.map(x => x.type))];
  }

  currentPokemon(index) {

    return pokemons.filter((_x, i) => i === index);
  }

  handleCurrentPokemon() {
    this.setState((last, _i) => {
      const maxLen = pokemons.length;
      const lastIndex = last.currentIndex
      if (lastIndex < maxLen - 1) return { currentIndex: lastIndex + 1 };
      else return { currentIndex: 0 };
    });
  }

  handleType(text) {
    this.setState({ currentType: text })
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.currentPokemon(this.state.currentIndex)} />
        <div>
          <h3>{this.state.currentType === '' ? 'All' : this.state.currentType}</h3>
          {this.types.map(x =>
          (
            <button key={x} onClick={() => { this.handleType(x) }}>{x}</button>
          ))
          }
        </div>
        <button onClick={this.handleCurrentPokemon}>Next Pokemon</button>
      </div>
    );
  }
}

export default App;