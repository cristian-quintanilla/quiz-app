import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimerState, TimerValue } from '../../interfaces/interfaces';

const initialState: TimerState = {
  hours: 0,
  minutes: 1,
  seconds: 0,
};

export const timer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setHours: (state, action: PayloadAction<TimerValue>) => {
      state.hours = action.payload.value;
    },
    setMinutes: (state, action: PayloadAction<TimerValue>) => {
      state.minutes = action.payload.value;
    },
    setSeconds: (state, action: PayloadAction<TimerValue>) => {
      state.seconds = action.payload.value;
    }
  },
});

export const {
  setHours,
  setMinutes,
  setSeconds,
} = timer.actions;

export default timer.reducer;
