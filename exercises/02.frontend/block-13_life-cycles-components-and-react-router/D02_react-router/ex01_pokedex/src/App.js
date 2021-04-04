import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Pokedex pokemons={pokemons} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;