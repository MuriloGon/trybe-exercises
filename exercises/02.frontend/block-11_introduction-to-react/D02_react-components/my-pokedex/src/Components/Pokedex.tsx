import {Component} from 'react';
import {Pokemon} from './Pokemon';
import {pokemons as pokData} from './data';
import './Pokedex.css'

export class Pokedex extends Component {
  render(){
    return (
      <div className='pokedex'>
        <h1>Pokedex</h1>
        {pokData.map(x=><Pokemon key={x.id} pokemon={x}/>)}
      </div>
    );
  }
}