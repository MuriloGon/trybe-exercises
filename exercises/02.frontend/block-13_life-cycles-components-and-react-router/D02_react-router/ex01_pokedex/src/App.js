import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { PokemonDetails } from './PokemonDetails';
import { About } from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='main-nav'>
          <nav>
            <Link to='/'><li>Pokedex</li></Link>
            <Link to='/about'><li>Sobre</li></Link>
          </nav>
        </div>
        <Switch>
          <Route path='/about' render={() => <About />} />
          <Route path='/pokemons/:pokemonId' render={props => <PokemonDetails {...props} pokemons={pokemons} />} />

          <Route path='/' render={() => <Pokedex pokemons={pokemons} />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;