export interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  timeExpired: boolean;
}

export interface QuizState {
  currentStep: number;
  grade: 'F' | 'D' | 'C' | 'B' | 'A';
  correctAnswers: number;
  score: number;
  timeTaken: TimerProps;
}

export interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}
