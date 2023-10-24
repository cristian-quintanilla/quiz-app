import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimerState, TimerProps } from '../../interfaces/interfaces';

const initialState: TimerState = {
  hours: 0,
  minutes: 2,
  seconds: 0,
  timeExpired: false,
};

export const timer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<TimerProps>) => {
      state.hours   = action.payload.hours;
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
    setTimeExpired: (state, action: PayloadAction<boolean>) => {
      state.timeExpired = action.payload;
    },
    resetTimer: state => {
      state.hours   = 0;
      state.minutes = 2;
      state.seconds = 0;
      state.timeExpired = false;
    },
  },
});

export const {
  setTimer,
  setTimeExpired,
  resetTimer,
} = timer.actions;

export default timer.reducer;
