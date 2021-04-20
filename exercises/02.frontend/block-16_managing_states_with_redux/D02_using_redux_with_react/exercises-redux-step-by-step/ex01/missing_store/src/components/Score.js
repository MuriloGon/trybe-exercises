import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import garfieldLasagna from '../imgs/garfieldLasagna.png';

class Score extends React.Component {
  render() {
    const { receiveScore } = this.props;
    const { century, city, quantity, ingredients = [] } = receiveScore;
    const setIngredients = new Set(ingredients.sort());
    const newIngredientsArray = [...setIngredients];
    const rightAnswers = { century: 20,
      city: 'Bolonha',
      quantity: '4 a 5',
      ingredients:
      ['ragu de carne', 'molho bechamel',
        'queijo parmesão', 'massa com ovos e espinafre'],
    };
    const TWENTY_FIVE_PERCENT = 25;
    const ZERO_PERCENT = 0;
    const centuryPoints = Number(century) === rightAnswers.century
      ? TWENTY_FIVE_PERCENT
      : ZERO_PERCENT;
    const cityPoints = city === rightAnswers.city
      ? TWENTY_FIVE_PERCENT
      : ZERO_PERCENT;
    const quantityPoints = quantity === rightAnswers.quantity
      ? TWENTY_FIVE_PERCENT
      : ZERO_PERCENT;
    const ingredientsPoints = JSON.stringify(newIngredientsArray) === JSON.stringify(
      rightAnswers.ingredients.sort(),
    ) ? TWENTY_FIVE_PERCENT : ZERO_PERCENT;
    const sumTotal = centuryPoints + quantityPoints + cityPoints + ingredientsPoints;

    return (
      <div className="score d-flex flex-column align-items-center justify-content-center">
        <p className="banzai">Baaaaaaaaaaaanzai!!!!!</p>
        <img src={ garfieldLasagna } width="60%" alt="Garfield e Lasanha" />
        <p>{ sumTotal }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  receiveScore: state.answersFound.answers,
});

Score.propTypes = {
  receiveScore: PropTypes.shape({
    century: PropTypes.string,
    city: PropTypes.string,
    quantity: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }),
};

Score.defaultProps = {
  receiveScore: {},
};

export default connect(mapStateToProps, null)(Score);
