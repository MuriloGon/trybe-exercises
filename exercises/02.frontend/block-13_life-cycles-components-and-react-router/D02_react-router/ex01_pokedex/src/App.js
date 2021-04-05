import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { PokemonDetails } from './PokemonDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Switch>

          <Route path='/pokemons/:pokemonId' render={props => <PokemonDetails {...props} pokemons={pokemons} />} />

          <Route path='/' render={() => <Pokedex pokemons={pokemons} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;