import React from 'react';
import Pokemon from './Pokemon';

export class Favorites extends React.Component {
  render() {
    const { favoritePokemons } = this.props;
    return (
      <>
        {favoritePokemons.map((pokemon, i) => <Pokemon key={i} pokemon={pokemon} />)}
      </>
    );
  }
}