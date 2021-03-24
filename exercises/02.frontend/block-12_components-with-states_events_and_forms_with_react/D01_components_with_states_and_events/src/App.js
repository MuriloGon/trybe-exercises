import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
    this.filteredPokemons = this.filteredPokemons.bind(this);
    this.handleNextPokemon = this.handleNextPokemon.bind(this)

    this.types = ['All', ...new Set(pokemons.map(x => x.type))].sort();
    this.state = {
      type: 'All',
      pokemons: pokemons,
      filtered: pokemons,
      length: pokemons.length,
      currentIndex: 0
    };
  }

  filteredPokemons(type) {
    let filter = pokemons;
    if (type !== 'All') filter = this.state.pokemons.filter(x => x.type === type);

    const len = filter.length
    let output = {
      type: type,
      filtered: filter,
      length: len,
      currentIndex: 0,
    }
    return output;
  }

  updateState(type) {
    this.setState(this.filteredPokemons(type));
  }

  handleNextPokemon() {
    const index = this.state.currentIndex;
    const len = this.state.length
    if (index < len - 1) this.setState((a, b) => {
      return { currentIndex: a.currentIndex + 1 }
    }); else this.setState({ currentIndex: 0 });
  }

  render() {
    let pokemon = this.state.filtered[this.state.currentIndex]
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <div>
          <h3>{this.state.type}</h3>
          <h4>
            Quantidade Máxima: ({this.state.currentIndex + 1}/{this.state.length})
          </h4>

          <Pokedex pokemon={pokemon} />

          {this.types.map(x =>
          (
            <button key={x} onClick={() => { this.updateState(x) }}>{x}</button>
          ))
          }

        </div>
        <button disabled={this.state.length <= 1 ? true : false}
          onClick={this.handleNextPokemon}>Next Pokemon</button>
      </div>
    );
  }
}

export default App;