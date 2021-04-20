import { combineReducers } from 'redux';
import spiedRecipe from './spiedRecipe';
import spiedIngredients from './spiedIngredients';
import spiedOrder from './spiedOrder';

const rootReducer = combineReducers({ spiedRecipe, spiedIngredients, spiedOrder });

export default rootReducer;
