import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionsState } from '../../interfaces/interfaces';

const initialState: QuestionsState = {
  questions: [],
  currentQuestion: 1,
  totalQuestions: 0,
};

export const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuestionsState>) => {
      state.questions = action.payload.questions;
      state.currentQuestion = action.payload.currentQuestion;
      state.totalQuestions = action.payload.totalQuestions;
    }
  },
});

export const {
  setQuestions,
} = questions.actions;

export default questions.reducer;
