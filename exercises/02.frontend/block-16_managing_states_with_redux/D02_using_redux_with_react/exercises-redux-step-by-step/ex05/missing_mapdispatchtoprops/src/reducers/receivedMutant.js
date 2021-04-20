import { GET_MUTANT } from '../actions';

const INITIAL_STATE = {
  mutant: '',
};

const mutantChosen = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_MUTANT:
    return { mutant: action.mutant };
  default:
    return state;
  }
};

export default mutantChosen;
