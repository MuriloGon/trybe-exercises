import { AFRICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const africaContinent = (state = INITIAL_STATE, action) => {
  const { type, percentage } = action;
  switch (type) {
  case AFRICA_ENERGY:
    return percentage;

  default:
    return state;
  }
};

export default africaContinent;
