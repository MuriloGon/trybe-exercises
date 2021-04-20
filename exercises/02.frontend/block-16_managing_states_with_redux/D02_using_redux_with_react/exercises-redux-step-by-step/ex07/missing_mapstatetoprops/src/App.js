import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpyRecipe from './components/SpyRecipe';
import PrepareBurger from './components/PrepareBurger';
import patrick from './imgs/patrick.png';
import gary from './imgs/gary.png';
import siriguejo from './imgs/siriguejo.png';
import bobEsponja from './imgs/bobEsponja.png';

class App extends React.Component {
  constructor() {
    super();
    this.first = this.first.bind(this);
    this.second = this.second.bind(this);
    this.third = this.third.bind(this);
  }

  first() {
    const { receiveIngredients } = this.props;
    return (
      <div className="flip-card-inner">
        <div
          className="
            flip-card-front d-flex flex-column justify-content-around align-items-center
          "
        >
          <div className=""><img src={ patrick } alt="Patrick" height="320px" /></div>
          <div className=""><img src={ gary } alt="Gary" height="120px" /></div>
        </div>
        <ul className="flip-card-back list-group">
          <h2>Ingredientes</h2>
          { receiveIngredients.map(
            (element, index) => <li key={ index }>{ element }</li>,
          )}
        </ul>
      </div>
    );
  }

  second() {
    return (
      <div
        className="
          flip-card-inner d-flex flex-column justify-content-around align-items-center
      "
      >
        <div className="flip-card-front"><SpyRecipe /></div>
        <div className="flip-card-back"><PrepareBurger /></div>
      </div>
    );
  }

  third() {
    const { receiveOrder } = this.props;
    return (
      <div className="flip-card-inner">
        <div
          className="
            flip-card-front d-flex flex-column justify-content-around align-items-center
        "
        >
          <img src={ bobEsponja } alt="Bob Esponja" height="300px" width="300px" />
          <img src={ siriguejo } alt="Siriguejo" height="300px" />
        </div>
        <ul className="flip-card-back list-group">
          <h2>Ordem para montar</h2>
          { receiveOrder.map((element, index) => <li key={ index }>{ element }</li>) }
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="row spongeBob">
        <div className="flip-card left">
          { this.first() }
        </div>
        <div className="flip-card middle">
          { this.second() }
        </div>
        <div className="flip-card right">
          { this.third() }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  receiveIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  receiveOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  receiveIngredients: state.spiedIngredients.ingredients,
  receiveOrder: state.spiedOrder.order,
});

export default connect(mapStateToProps, null)(App);
