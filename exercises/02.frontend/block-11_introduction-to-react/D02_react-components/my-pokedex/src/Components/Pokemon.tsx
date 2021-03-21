import {Component} from 'react';
import {IPokemon} from './data';
import './Pokemon.css'

interface IProps{
  pokemon: IPokemon
}

export class Pokemon extends Component<IProps> {
  render(){
    const pok: IPokemon = this.props.pokemon;
    return (
      <div className='pokemon__card'>
        <div className='pokemon__info'>
          <p>{pok.name}</p>
          <p>{pok.type}</p>
          <p>Avg Weight: {pok.averageWeight.value}{pok.averageWeight.measurementUnit}</p>
        </div>
        <img className='pokemon__img' src={pok.image} alt={pok.name}/>
      </div>
    );
  }
}