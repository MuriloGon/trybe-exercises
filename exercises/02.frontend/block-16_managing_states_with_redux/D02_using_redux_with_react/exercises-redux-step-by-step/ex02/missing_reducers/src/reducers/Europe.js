import { EUROPE_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const europeContinent = (state = INITIAL_STATE, action) => {
  const { type, percentage } = action;
  switch (type) {
  case EUROPE_ENERGY:
    return percentage;

  default:
    return state;
  }
};

export default europeContinent;
