import { ASIA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const asiaContinent = (state = INITIAL_STATE, action) => {
  const { type, percentage } = action;
  switch (type) {
  case ASIA_ENERGY:
    return percentage;

  default:
    return state;
  }
};

export default asiaContinent;
