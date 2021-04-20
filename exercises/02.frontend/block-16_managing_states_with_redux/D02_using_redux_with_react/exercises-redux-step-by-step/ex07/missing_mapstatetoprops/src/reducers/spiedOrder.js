import { ORDER_LIST } from '../actions';

const INITIAL_STATE = {
  order: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ORDER_LIST:
    return { order: action.order };
  default:
    return state;
  }
};

export default orderReducer;
