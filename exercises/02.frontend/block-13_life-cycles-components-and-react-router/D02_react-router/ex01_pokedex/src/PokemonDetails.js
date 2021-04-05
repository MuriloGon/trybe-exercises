import React from 'react';
import './PokemonDetails.css';

export class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    }
  }

  handleInput = () => {
    this.setState(
      (st) => ({ isFavorite: !st.isFavorite }),
      () => {
        const { pokemonId } = this.props.match.params;
        const { isFavorite } = this.state;
        if (isFavorite) {
          const newArray = this.props.favorites;
          this.props.changeFavorite([...newArray, ...[Number(pokemonId)]])
        } else {
          const rmvFavorites = this.props.favorites.filter(x => x !== Number(pokemonId));
          this.props.changeFavorite(rmvFavorites)
        }
      });
  }

  componentDidMount = () => {
    const { pokemonId } = this.props.match.params;
    const isFavorite = this.props.favorites.includes(Number(pokemonId));
    this.setState(() => ({ isFavorite: isFavorite }));
  }

  render() {
    const { pokemonId } = this.props.match.params;
    const pokemon = this.props.pokemons.find(x => x.id === parseInt(pokemonId))
    const { name, type, image } = pokemon;
    const { averageWeight, summary, foundAt, moreInfo } = pokemon;
    const weight = `${averageWeight.value} ${averageWeight.measurementUnit}`;

    return (
      <div className='pokemon-details'>
        <h2 className='pokemon-title'>{name}<span><a href={moreInfo} target='_blank' rel="noopener noreferrer">(?)</a></span></h2>
        <div className='pokemon-info'>
          <img src={image} alt={name} />

          <h3>Tá favoritado?</h3>
          <input type='checkbox' onChange={this.handleInput} checked={this.state.isFavorite} />

          <h3>Resumo:</h3>
          <p>{summary}</p>

          <h3>Tipo:</h3>
          <p>{type}</p>

          <h3>Peso médio:</h3>
          <p>{weight}</p>
        </div>

        <div className='pokemon-locations'>
          <h3>Locations</h3>
          <div className='submenu-locations'>
            {foundAt.map((loc, index) => (
              <div className='pokemon-location' key={index}>
                <p>{loc.location}</p>
                <img src={loc.map} alt={loc.location} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}