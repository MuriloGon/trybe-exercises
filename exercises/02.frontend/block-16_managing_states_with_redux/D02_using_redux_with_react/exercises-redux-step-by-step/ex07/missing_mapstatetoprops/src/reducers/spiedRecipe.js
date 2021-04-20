import { RECIPE_LIST } from '../actions';

const INITIAL_STATE = {
  recipe: [],
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECIPE_LIST:
    return { recipe: action.recipe };
  default:
    return state;
  }
};

export default recipeReducer;
