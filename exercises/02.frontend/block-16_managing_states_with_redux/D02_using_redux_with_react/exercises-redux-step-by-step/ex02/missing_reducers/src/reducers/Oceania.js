import { OCEANIA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const oceaniaContinent = (state = INITIAL_STATE, action) => {
  const { type, percentage } = action;
  switch (type) {
  case OCEANIA_ENERGY:
    return percentage;

  default:
    return state;
  }
};

export default oceaniaContinent;
