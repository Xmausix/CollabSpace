export interface Quiz {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number; // in minutes
  questions: Question[];
  createdAt: string;
  createdBy: string;
  featured: boolean;
  tags: string[];
  timesPlayed: number;
  averageScore: number;
  thumbnailUrl?: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation?: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  quizCount: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  date: string;
}