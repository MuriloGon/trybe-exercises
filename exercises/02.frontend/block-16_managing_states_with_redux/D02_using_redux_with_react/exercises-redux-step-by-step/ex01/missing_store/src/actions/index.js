export const ANSWERS_LIST = 'ANSWERS_LIST';

export const checkQuiz = (answers) => ({
  type: ANSWERS_LIST,
  answers,
});
