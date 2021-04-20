import { AMERICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const americaContinent = (state = INITIAL_STATE, action) => {
  const { type, percentage } = action;
  switch (type) {
  case AMERICA_ENERGY:
    return percentage;

  default:
    return state;
  }
};

export default americaContinent;
