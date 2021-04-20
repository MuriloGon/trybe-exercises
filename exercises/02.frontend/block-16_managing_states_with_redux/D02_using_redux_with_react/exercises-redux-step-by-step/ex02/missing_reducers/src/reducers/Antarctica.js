import { ANTARCTICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const antarcticaContinent = (state = INITIAL_STATE, action) => {
  const { type, percentage } = action;
  switch (type) {
  case ANTARCTICA_ENERGY:
    return percentage;

  default:
    return state;
  }
};

export default antarcticaContinent;
