import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState } from '../../interfaces/interfaces';

const initialState: QuizState = {
  currentStep: 1,
  grade: 'A',
  correctAnswers: 0,
  score: 0,
  timeTaken: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    }
  },
});

export const {
  setCurrentStep,
} = quiz.actions;

export default quiz.reducer;
