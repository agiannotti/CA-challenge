export const selectQuiz = (quiz) => {
  console.log('quiz Clicked!', quiz.title);
  return {
    type: 'QUIZ_SELECTED',
    payload: quiz,
  };
};
