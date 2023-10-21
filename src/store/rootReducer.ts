import { combineReducers } from '@reduxjs/toolkit'

import quizReducer from './slices/quizSlice';
import timerReducer from './slices/timerSlice';
import questionsSlice from './slices/questionsSlice';

import { questionsApi } from '../api/questionsApi';

const rootReducer = combineReducers({
  timer: timerReducer,
  quiz: quizReducer,
  questions: questionsSlice,
  [questionsApi.reducerPath]: questionsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
