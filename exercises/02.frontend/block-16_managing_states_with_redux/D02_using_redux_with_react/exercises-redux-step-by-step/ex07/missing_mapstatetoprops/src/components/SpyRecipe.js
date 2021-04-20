import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeRecipe, storeIngredients, storeOrder } from '../actions';

import {
  recipe as recipeData,
  ingredients as ingredientsData,
  order as orderData,
  abstract,
} from '../data';

import plankton from '../imgs/plankton.gif';

class SpyRecipe extends React.Component {
  componentDidMount() {
    const { sendRecipe, sendIngredients, sendOrder } = this.props;
    sendRecipe(recipeData);
    sendIngredients(ingredientsData);
    sendOrder(orderData);
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <img src={ plankton } alt="Plancton Gif" height="100px" width="100px" />
        <p>{ abstract.history }</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendRecipe: (recipe) => dispatch(storeRecipe(recipe)),
  sendIngredients: (ingredients) => dispatch(storeIngredients(ingredients)),
  sendOrder: (order) => dispatch(storeOrder(order)),
});

SpyRecipe.propTypes = {
  sendRecipe: PropTypes.func.isRequired,
  sendIngredients: PropTypes.func.isRequired,
  sendOrder: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SpyRecipe);
