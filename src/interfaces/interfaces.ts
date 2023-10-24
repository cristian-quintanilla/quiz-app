import { Grades } from '../types/grades';

export interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  timeExpired: boolean;
}

export interface QuizState {
  currentStep?: number;
  grade: Grades;
  correctAnswers: number;
  score: number;
  totalQuestions: number;
}

export interface QuestionsState {
  currentQuestion: number;
  questions: Question[];
  totalQuestions: number;
}

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  id: number;
  incorrect_answers: string[];
  question: string;
  type: string;
  user_answer: string;
}

export interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}
