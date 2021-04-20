import { RESCUE } from '../actions';

const INITIAL_STATE = {
  status: '',
};

const beatTheGame = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RESCUE:
    return { status: action.status };
  default:
    return state;
  }
};

export default beatTheGame;
