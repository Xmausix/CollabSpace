import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'science',
    name: 'Science',
    description: 'Explore the wonders of the natural world and scientific discoveries',
    iconName: 'flask',
    color: '#8B5CF6', // Purple
    quizCount: 42
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Test your knowledge about gadgets, programming, and tech trends',
    iconName: 'cpu',
    color: '#0EA5E9', // Blue
    quizCount: 35
  },
  {
    id: 'history',
    name: 'History',
    description: 'Journey through time with quizzes about historical events and figures',
    iconName: 'landmark',
    color: '#F59E0B', // Amber
    quizCount: 28
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Explore countries, capitals, and natural wonders around the world',
    iconName: 'globe',
    color: '#10B981', // Green
    quizCount: 23
  },
  {
    id: 'arts',
    name: 'Arts & Literature',
    description: 'Test your knowledge about books, paintings, music, and more',
    iconName: 'palette',
    color: '#EC4899', // Pink
    quizCount: 31
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Quizzes about sports, athletes, and memorable sporting events',
    iconName: 'trophy',
    color: '#EF4444', // Red
    quizCount: 27
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Movies, TV shows, celebrities, and everything entertainment',
    iconName: 'film',
    color: '#6366F1', // Indigo
    quizCount: 38
  },
  {
    id: 'food',
    name: 'Food & Cooking',
    description: 'Delicious quizzes about cuisine, ingredients, and cooking techniques',
    iconName: 'utensils',
    color: '#F97316', // Orange
    quizCount: 19
  }
];