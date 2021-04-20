import { ANSWERS_LIST } from '../actions';

const INITIAL_STATE = {
  answers: {},
};

const selectedAnswers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ANSWERS_LIST:
    return { answers: action.answers };
  default:
    return state;
  }
};

export default selectedAnswers;
