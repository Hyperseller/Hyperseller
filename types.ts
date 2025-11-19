import { LucideIcon } from 'lucide-react';

export interface RecipeStep {
  label: string;
  description: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface LessonContent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  image: string; // URL for placeholder
  bulletPoints?: string[];
  highlightBox?: {
    title: string;
    content: string;
    type: 'info' | 'tip' | 'warning';
  };
  recipe?: {
    title: string;
    steps: RecipeStep[];
  };
  quiz?: Quiz;
}

export interface CourseState {
  currentLessonIndex: number;
  completedLessons: string[];
}