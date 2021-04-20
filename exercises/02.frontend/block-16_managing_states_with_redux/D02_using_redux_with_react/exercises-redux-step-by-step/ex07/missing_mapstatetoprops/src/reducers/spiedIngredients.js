import { INGREDIENTS_LIST } from '../actions';

const INITIAL_STATE = {
  ingredients: [],
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INGREDIENTS_LIST:
    return { ingredients: action.ingredients };
  default:
    return state;
  }
};

export default ingredientsReducer;
