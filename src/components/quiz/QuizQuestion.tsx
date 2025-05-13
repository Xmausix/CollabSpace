import React, { useState } from 'react';
import { Question } from '../../types';
import Button from '../ui/Button';
import { CheckCircle, XCircle, AlertCircle, ChevronRight } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer 
}: QuizQuestionProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const isCorrect = selectedOptionId === question.correctOptionId;
  
  const handleSelectOption = (optionId: string) => {
    if (showResult) return;
    setSelectedOptionId(optionId);
  };
  
  const handleCheckAnswer = () => {
    setShowResult(true);
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
        <div 
          className="bg-violet-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-medium text-gray-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        
        <div className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">
          +10 points
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{question.text}</h3>
      
      <div className="space-y-3 mb-8">
        {question.options.map((option) => {
          let optionClasses = "relative border-2 rounded-lg p-4 cursor-pointer transition-all";
          
          if (showResult) {
            if (option.id === question.correctOptionId) {
              optionClasses += " border-green-500 bg-green-50";
            } else if (option.id === selectedOptionId) {
              optionClasses += " border-red-500 bg-red-50";
            } else {
              optionClasses += " border-gray-200 opacity-60";
            }
          } else {
            optionClasses += option.id === selectedOptionId
              ? " border-violet-500 bg-violet-50"
              : " border-gray-200 hover:border-violet-300 hover:bg-violet-50";
          }
          
          return (
            <div
              key={option.id}
              className={optionClasses}
              onClick={() => handleSelectOption(option.id)}
            >
              <div className="flex items-center">
                <div 
                  className={`flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                    option.id === selectedOptionId && !showResult
                      ? "bg-violet-500 text-white"
                      : "border border-gray-300"
                  }`}
                >
                  {showResult && option.id === question.correctOptionId && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                  {showResult && option.id === selectedOptionId && option.id !== question.correctOptionId && (
                    <XCircle className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <span className="text-base md:text-lg">{option.text}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {showResult && question.explanation && (
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-blue-700 mb-1">Explanation</p>
            <p className="text-blue-800">{question.explanation}</p>
          </div>
        </div>
      )}
      
      <div className="flex justify-between">
        <Button 
          variant="outline"
          disabled={showResult}
          onClick={() => onAnswer(false)}
        >
          Skip
        </Button>
        
        <Button 
          disabled={!selectedOptionId || showResult}
          onClick={handleCheckAnswer}
          icon={showResult ? <ChevronRight /> : undefined}
          iconPosition="right"
        >
          {showResult ? 'Next Question' : 'Check Answer'}
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;