import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Quiz } from '../../types';
import Button from '../ui/Button';
import { Award, Share2, RotateCcw, Home, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';

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
  const navigate = useNavigate();
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

  const shareText = `I scored ${score}% on the ${quiz.title} quiz! Can you beat my score?`;
  const shareUrl = window.location.href;

  const handleShare = async (platform?: string) => {
    if (navigator.share && !platform) {
      try {
        await navigator.share({
          title: 'Quiz Result',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      let shareLink = '';
      switch (platform) {
        case 'twitter':
          shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
          break;
        case 'facebook':
          shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
          break;
        default:
          // Copy to clipboard
          navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
          alert('Link copied to clipboard!');
          return;
      }
      if (shareLink) {
        window.open(shareLink, '_blank', 'width=600,height=400');
      }
    }
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

      <div className="border-t border-gray-200 pt-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Your Result</h3>
        <div className="flex flex-wrap gap-3 mb-6">
          <Button
            variant="outline"
            className="flex-1"
            icon={<Twitter size={16} />}
            iconPosition="left"
            onClick={() => handleShare('twitter')}
          >
            Twitter
          </Button>
          
          <Button
            variant="outline"
            className="flex-1"
            icon={<Facebook size={16} />}
            iconPosition="left"
            onClick={() => handleShare('facebook')}
          >
            Facebook
          </Button>
          
          <Button
            variant="outline"
            className="flex-1"
            icon={<LinkIcon size={16} />}
            iconPosition="left"
            onClick={() => handleShare()}
          >
            Copy Link
          </Button>
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
          variant="ghost"
          className="flex-1"
          icon={<Home size={16} />}
          iconPosition="left"
          onClick={() => navigate('/')}
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;