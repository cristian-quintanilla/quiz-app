import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState } from '../../interfaces/interfaces';

const initialState: QuizState = {
  currentStep: 1,
  grade: 'A',
  correctAnswers: 0,
  score: 0,
  totalQuestions: 0,
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setResults: (state, action: PayloadAction<QuizState>) => {
      state.grade = action.payload.grade;
      state.correctAnswers = action.payload.correctAnswers;
      state.score = action.payload.score;
      state.totalQuestions = action.payload.totalQuestions;
    }
  },
});

export const {
  setCurrentStep,
  setResults,
} = quiz.actions;

export default quiz.reducer;
