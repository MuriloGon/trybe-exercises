import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkQuiz } from '../actions';

class Quiz extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      century: '',
      city: '',
      quantity: '',
      ingredients: [],
    };
  }

  handleChange({ target }) {
    const { ingredients } = this.state;
    const value = target.getAttribute('data-name');
    const id = target.getAttribute('data-id');
    if (id && target.checked === true) {
      this.setState({ ingredients: [...ingredients, value] });
    } else if (id && target.checked === false) {
      const newIngredients = [...ingredients];
      const elementIndex = newIngredients.indexOf(target.name);
      newIngredients.splice(elementIndex, 1);
      this.setState({ ingredients: newIngredients });
    }
    this.setState({ [target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { sendAnswers } = this.props;
    const { century, city, quantity, ingredients } = this.state;
    const myAnswers = {
      century,
      city,
      quantity,
      ingredients,
    };
    sendAnswers(myAnswers);

    this.createCenturyInput = this.createCenturyInput.bind(this);
    this.createCityInput = this.createCityInput.bind(this);
    this.createIngredientInput = this.createIngredientInput.bind(this);
    this.createQuantityInput = this.createQuantityInput.bind(this);
  }

  getLasagnaData() {
    const centuryXVI = 16;
    const centuryXVII = 17;
    const centuryXVIII = 18;
    const centuryXIX = 19;
    const centuryXX = 20;
    return {
      centuriesLasagna: [centuryXX, centuryXIX, centuryXVII, centuryXVIII, centuryXVI],
      citiesLasagna: ['Nápoles', 'Bolonha', 'Sorrento', 'Palermo', 'Bérgamo'],
      ingredients: ['presunto', 'massa sem ovos',
        'queijo mussarela', 'ragu de carne', 'carne moída',
        'molho bechamel', 'queijo parmesão', 'massa com ovos e espinafre'],
      layersLasagna: ['3 a 4', '2 a 3', '4 a 5', '5 a 6', '1 a 2'],
    };
  }

  createFinalButton() {
    return (
      <div className="buttonFinal d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-outline-light"
        >
          Tudo parece gostoso quando você está de dieta
        </button>
      </div>
    );
  }

  createCenturyInput(century) {
    return (
      <label htmlFor="century" className="form-check-label">
        <input
          data-name={ century }
          onChange={ this.handleChange }
          className="form-check-input"
          name="century"
          type="radio"
        />
        { century }
      </label>
    );
  }

  createCityInput(city) {
    return (
      <label htmlFor="city" className="form-check-label">
        <input
          data-name={ city }
          onChange={ this.handleChange }
          className="form-check-input"
          name="city"
          type="radio"
        />
        { city }
      </label>
    );
  }

  createIngredientInput(ingredient, index) {
    return (
      <label htmlFor={ ingredient } className="form-check-label">
        <input
          key={ `${index}input` }
          data-name={ ingredient }
          data-id="ingredients"
          onChange={ this.handleChange }
          className="form-check-input"
          name={ ingredient }
          type="checkbox"
        />
        { ingredient }
      </label>
    );
  }

  createQuantityInput(quantity) {
    return (
      <label htmlFor="quantity" className="form-check-label">
        <input
          data-name={ quantity }
          onChange={ this.handleChange }
          className="form-check-input"
          name="quantity"
          type="radio"
        />
        { quantity }
      </label>
    );
  }

  render() {
    const { centuriesLasagna, citiesLasagna,
      ingredients, layersLasagna } = this.getLasagnaData();
    return (
      <div className="quiz d-flex flex-column aling-items-center justify-content-center">
        <form className="text-light" onSubmit={ this.handleSubmit }>
          <div>
            <span>Em que século surgiu a lasanha Bolonhesa?</span>
            { centuriesLasagna.map((century) => (
              <div key={ `${century}div` } className="form-check">
                {this.createCenturyInput(century)}
              </div>
            ))}
          </div>
          <div>
            <span>Em que cidade foi criada a lasanha Bolonhesa?</span>
            { citiesLasagna.map((city) => (
              <div key={ `${city}div` } className="form-check">
                {this.createCityInput(city)}
              </div>
            ))}
          </div>
          <div>
            <span>
              Quais os 4 ingredientes principais de uma verdadeira lasanha Bolonhesa?
            </span>
            { ingredients.map((ingredient, index) => (
              <div key={ `${index}div` } className="form-check">
                {this.createIngredientInput(ingredient, index)}
              </div>
            ))}
          </div>
          <div>
            <span>Quantas camadas de massa são necessárias para uma boa lasanha?</span>
            { layersLasagna.map((quantity, index) => (
              <div key={ `${index}div` } className="form-check">
                {this.createQuantityInput(quantity)}
              </div>
            ))}
          </div>
          {this.createFinalButton()}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendAnswers: (answers) => dispatch(checkQuiz(answers)),
});

Quiz.propTypes = {
  sendAnswers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Quiz);
