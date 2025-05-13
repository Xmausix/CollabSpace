import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Quiz } from '../../types';
import QuizCard from '../quiz/QuizCard';

interface FeaturedQuizzesProps {
  quizzes: Quiz[];
}

const FeaturedQuizzes = ({ quizzes }: FeaturedQuizzesProps) => {
  const featured = quizzes.filter(quiz => quiz.featured);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Quizzes</h2>
            <p className="mt-2 text-gray-600">Discover our most popular and highly-rated quizzes</p>
          </div>
          
          <Link to="/categories" className="hidden sm:flex items-center text-violet-600 hover:text-violet-700 font-medium">
            View all quizzes <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link 
            to="/categories" 
            className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium"
          >
            View all quizzes <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedQuizzes;