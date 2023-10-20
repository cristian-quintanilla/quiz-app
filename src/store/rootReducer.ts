import { combineReducers } from '@reduxjs/toolkit'

import quizReducer from './slices/quizSlice';
import timerReducer from './slices/timerSlice';
import { questionsApi } from '../api/questionsApi';

const rootReducer = combineReducers({
  timer: timerReducer,
  quiz: quizReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
