import React from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../../types';
import { categories } from '../../data/categories';
import CategoryBadge from '../ui/CategoryBadge';
import Badge from '../ui/Badge';
import { Clock, Award, BarChart3, Users } from 'lucide-react';

interface QuizCardProps {
  quiz: Quiz;
  className?: string;
}

const QuizCard = ({ quiz, className = '' }: QuizCardProps) => {
  const category = categories.find(cat => cat.id === quiz.categoryId);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '#10B981'; // Green
      case 'medium':
        return '#F59E0B'; // Amber
      case 'hard':
        return '#EF4444'; // Red
      default:
        return '#8B5CF6'; // Purple
    }
  };
  
  return (
    <Link 
      to={`/quiz/${quiz.id}`}
      className={`block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}
    >
      <div className="relative">
        <img 
          src={quiz.thumbnailUrl || 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
          alt={quiz.title}
          className="w-full h-48 object-cover"
        />
        
        {quiz.featured && (
          <div className="absolute top-3 right-3">
            <Badge 
              color="#EC4899" 
              className="flex items-center"
              size="md"
            >
              <Award size={14} className="mr-1" />
              Featured
            </Badge>
          </div>
        )}
        
        <div className="absolute bottom-3 left-3">
          {category && (
            <CategoryBadge category={category} size="sm" />
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{quiz.title}</h3>
          <Badge color={getDifficultyColor(quiz.difficulty)}>
            {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{quiz.description}</p>
        
        <div className="flex items-center text-gray-500 text-xs font-medium">
          <div className="flex items-center mr-4">
            <Clock size={14} className="mr-1" />
            {quiz.timeLimit} min
          </div>
          
          <div className="flex items-center mr-4">
            <BarChart3 size={14} className="mr-1" />
            {quiz.averageScore}% avg
          </div>
          
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            {quiz.timesPlayed.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;