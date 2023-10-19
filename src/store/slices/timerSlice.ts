import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimerState } from '../../interfaces/interfaces';

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
    setHours: (state, action: PayloadAction<number>) => {
      state.hours = action.payload;
    },
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
    },
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload;
    },
    setTimeExpired: (state, action: PayloadAction<boolean>) => {
      state.timeExpired = action.payload;
    }
  },
});

export const {
  setHours,
  setMinutes,
  setSeconds,
  setTimeExpired,
} = timer.actions;

export default timer.reducer;
