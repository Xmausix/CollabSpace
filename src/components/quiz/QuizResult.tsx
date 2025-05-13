import React from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../../types';
import Button from '../ui/Button';
import { Award, Clock, Share2, RotateCcw, Home } from 'lucide-react';

interface QuizResultProps {
  quiz: Quiz;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeTaken: number;
  onRetry: () => void;
}

const QuizResult = ({
  quiz,
  score,
  correctAnswers,
  totalQuestions,
  timeTaken,
  onRetry
}: QuizResultProps) => {
  // Convert time taken from seconds to minutes and seconds
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  
  const formatTime = () => {
    return `${minutes}m ${seconds}s`;
  };
  
  const getScoreMessage = () => {
    if (score >= 90) return "Excellent!";
    if (score >= 70) return "Great job!";
    if (score >= 50) return "Good effort!";
    return "Keep practicing!";
  };
  
  const getScoreColor = () => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-blue-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-violet-100 mb-6">
          <Award className="w-12 h-12 text-violet-600" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{getScoreMessage()}</h2>
        <p className="text-gray-600">You've completed the {quiz.title}</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="text-center p-4 mb-4 md:mb-0">
          <div className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
            {score}%
          </div>
          <p className="text-gray-600 text-sm">Your Score</p>
        </div>
        
        <div className="text-center p-4 mb-4 md:mb-0">
          <div className="text-4xl font-bold mb-2 text-indigo-500">
            {correctAnswers}/{totalQuestions}
          </div>
          <p className="text-gray-600 text-sm">Correct Answers</p>
        </div>
        
        <div className="text-center p-4">
          <div className="text-4xl font-bold mb-2 text-teal-500">
            {formatTime()}
          </div>
          <p className="text-gray-600 text-sm">Time Taken</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Stats</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Average Score</span>
            <span className="font-medium">{quiz.averageScore}%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Your Position</span>
            <span className="font-medium">Top 25%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Times Played</span>
            <span className="font-medium">{quiz.timesPlayed.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Time Limit</span>
            <span className="font-medium">{quiz.timeLimit} minutes</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Button
          variant="primary"
          className="flex-1"
          icon={<RotateCcw size={16} />}
          iconPosition="left"
          onClick={onRetry}
        >
          Try Again
        </Button>
        
        <Button
          variant="outline"
          className="flex-1"
          icon={<Share2 size={16} />}
          iconPosition="left"
        >
          Share Result
        </Button>
        
        <Link to="/" className="flex-1">
          <Button
            variant="ghost"
            className="w-full"
            icon={<Home size={16} />}
            iconPosition="left"
          >
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;