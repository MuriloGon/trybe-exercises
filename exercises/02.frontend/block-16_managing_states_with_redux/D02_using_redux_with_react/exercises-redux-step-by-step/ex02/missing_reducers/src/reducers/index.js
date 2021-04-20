import { combineReducers } from 'redux';
import Africa from './Africa';
import America from './America';
import Antarctica from './Antarctica';
import Asia from './Asia';
import Europe from './Europe';
import Oceania from './Oceania';

const rootReducer = combineReducers({
  Africa,
  America,
  Antarctica,
  Asia,
  Europe,
  Oceania,
});

export default rootReducer;
