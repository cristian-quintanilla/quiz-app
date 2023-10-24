import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionsState } from '../../interfaces/interfaces';

const initialState: QuestionsState = {
  questions: [],
  currentQuestion: 0,
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
    },
    setUserAnswer: (state, action: PayloadAction<{ currentQuestion: number, answer: string }>) => {
      state.currentQuestion = action.payload.currentQuestion + 1;
      state.questions[action.payload.currentQuestion].user_answer = action.payload.answer;
    },
    resetQuestions: (state) => {
      state.questions = [];
      state.currentQuestion = 0;
      state.totalQuestions = 0;
    }
  },
});

export const {
  setQuestions,
  setUserAnswer,
  resetQuestions,
} = questions.actions;

export default questions.reducer;
