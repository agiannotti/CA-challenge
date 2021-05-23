import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  quizzes: quizReducer,
  messages: messageReducer,
});

export default rootReducer;
