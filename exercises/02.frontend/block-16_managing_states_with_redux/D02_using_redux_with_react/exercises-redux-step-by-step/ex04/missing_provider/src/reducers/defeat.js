import { RECEIVE_COSMO } from '../actions';

const INITIAL_STATE = {
  status: '',
};

const defeatSaga = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_COSMO:
    return { cosmo: action.cosmo };
  default:
    return state;
  }
};

export default defeatSaga;
