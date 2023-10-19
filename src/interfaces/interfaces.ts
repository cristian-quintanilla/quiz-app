export interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  timeExpired: boolean;
}

export interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}
