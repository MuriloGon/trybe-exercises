import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { PokemonDetails } from './PokemonDetails';
import { About } from './About';
import { NotFound } from './NotFound';

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

          <Route exact path='/'
            render={() => <Pokedex pokemons={pokemons} />} />

          <Route path='/about'
            render={() => <About />} />

          <Route path='/pokemons/:pokemonId(\d{1,})'
            render={props => {
              const id = Number(props.match.params['pokemonId']);
              const thereIsId = pokemons.some(pok => pok.id === id);

              if (!thereIsId) return <Redirect to='/404' />
              return <PokemonDetails {...props} pokemons={pokemons} />
            }} />

          <Route path='/404' render={() => <NotFound />} />

          <Route path='*'
            render={() => <Redirect to='/404' />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;