import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { PokemonDetails } from './PokemonDetails';
import { About } from './About';
import { NotFound } from './NotFound';
import { Favorites } from './Favorites';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoritePokemons: []
    }
  }

  setFavorite = (arr) => {
    this.setState({ favoritePokemons: arr })
  }

  render() {
    const { favoritePokemons } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <div className='main-nav'>
            <nav>
              <Link to='/'><li>Pokedex</li></Link>
              <Link to='/favorites'><li>Favoritos</li></Link>
              <Link to='/about'><li>Sobre</li></Link>
            </nav>
          </div>
          <Switch>

            <Route exact path='/'
              render={() => (
                <Pokedex favorites={favoritePokemons} pokemons={pokemons} />
              )}
            />

            <Route path='/about'
              render={() => <About />} />

            <Route path='/favorites'
              render={() => {
                const filteredPokemons = pokemons.filter(pok => favoritePokemons.includes(pok.id))
                console.log(filteredPokemons)
                return (<Favorites favoritePokemons={filteredPokemons} />)
              }}
            />

            <Route path='/pokemons/:pokemonId(\d{1,})'
              render={props => {
                const id = Number(props.match.params['pokemonId']);
                const thereIsId = pokemons.some(pok => pok.id === id);

                if (!thereIsId) return <Redirect to='/404' />
                return <PokemonDetails
                  {...props}
                  changeFavorite={this.setFavorite}
                  favorites={favoritePokemons}
                  pokemons={pokemons} />
              }} />

            <Route path='/404' render={() => <NotFound />} />

            <Route path='*'
              render={() => <Redirect to='/404' />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;