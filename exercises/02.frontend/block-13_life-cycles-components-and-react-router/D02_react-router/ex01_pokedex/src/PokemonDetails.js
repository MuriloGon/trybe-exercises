import React from 'react';

export class PokemonDetails extends React.Component {
  render() {
    const { pokemonId } = this.props.match.params;
    const pokemon = this.props.pokemons.find(x => x.id === parseInt(pokemonId))
    const { name, type, image } = pokemon;
    const { averageWeight, summary, foundAt, moreInfo } = pokemon;
    const weight = `${averageWeight.value} ${averageWeight.measurementUnit}`

    return (
      <div>
        <h2>{name}<span><a href={moreInfo} target='_blank' rel="noopener noreferrer">(?)</a></span></h2>

        <img src={image} alt={name} />

        <h3>Resumo:</h3>
        <p>{summary}</p>

        <h3>Tipo:</h3>
        <p>{type}</p>

        <h3>Peso médio:</h3>
        <p>{weight}</p>

        <div className='locations'>
          <h3>Locations</h3>
          {foundAt.map(loc => (
            <>
              <p>{loc.location}</p>
              <img src={loc.map} alt={loc.location} />
            </>
          ))}
        </div>
      </div>
    );
  }
}