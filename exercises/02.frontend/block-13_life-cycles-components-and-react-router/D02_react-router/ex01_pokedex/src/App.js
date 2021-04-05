import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { PokemonDetails } from './PokemonDetails';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='main-nav'>
          <nav>
            <Link to='/'><li>Pokedex</li></Link>
          </nav>
        </div>
        <Switch>

          <Route path='/pokemons/:pokemonId' render={props => <PokemonDetails {...props} pokemons={pokemons} />} />

          <Route path='/' render={() => <Pokedex pokemons={pokemons} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;