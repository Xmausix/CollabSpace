import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { categories } from '../data/categories';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import QuizQuestion from '../components/quiz/QuizQuestion';
import QuizResult from '../components/quiz/QuizResult';
import CategoryBadge from '../components/ui/CategoryBadge';
import { Clock, BarChart3, Users, ArrowLeft, PlayCircle } from 'lucide-react';

const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const quiz = quizzes.find(q => q.id === quizId);
  
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  
  const category = quiz ? categories.find(cat => cat.id === quiz.categoryId) : null;
  
  useEffect(() => {
    if (quiz && started && !completed) {
      // Set time remaining in seconds
      setTimeRemaining(quiz.timeLimit * 60);
      
      // Start timer
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setCompleted(true);
            return 0;
          }
          return prev - 1;
        });
        
        setTimeTaken(prev => prev + 1);
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [quiz, started, completed]);
  
  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Not Found</h2>
          <p className="text-gray-600 mb-6">The quiz you're looking for does not exist.</p>
          <Link
            to="/quiz"
            className="inline-block bg-violet-600 text-white px-4 py-2 rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const handleStartQuiz = () => {
    setStarted(true);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setCompleted(false);
    setTimeTaken(0);
  };
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };
  
  const formatTimeRemaining = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const calculateScore = () => {
    return Math.round((correctAnswers / quiz.questions.length) * 100);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {!started && !completed && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-600 hover:text-violet-600 mb-6">
                <ArrowLeft size={16} className="mr-1" />
                Back to Home
              </Link>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative h-64 bg-gray-900">
                  {quiz.thumbnailUrl && (
                    <img 
                      src={quiz.thumbnailUrl} 
                      alt={quiz.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      {category && (
                        <CategoryBadge 
                          category={category} 
                          size="sm"
                          className="mb-3"
                        />
                      )}
                      <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
                      <p className="text-white/90">{quiz.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center">
                      <Clock size={20} className="text-gray-500 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Time Limit</p>
                        <p className="font-medium">{quiz.timeLimit} minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <BarChart3 size={20} className="text-gray-500 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Average Score</p>
                        <p className="font-medium">{quiz.averageScore}%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users size={20} className="text-gray-500 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Times Played</p>
                        <p className="font-medium">{quiz.timesPlayed.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 pb-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Quiz Details</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Questions</span>
                        <span className="font-medium">{quiz.questions.length}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Difficulty</span>
                        <span className="font-medium capitalize">{quiz.difficulty}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Created By</span>
                        <span className="font-medium">{quiz.createdBy}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Created On</span>
                        <span className="font-medium">{new Date(quiz.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <Button 
                      size="lg"
                      icon={<PlayCircle />}
                      iconPosition="left"
                      onClick={handleStartQuiz}
                    >
                      Start Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {started && !completed && quiz.questions.length > 0 && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6 flex justify-between items-center">
              <Link to="/" className="inline-flex items-center text-gray-600 hover:text-violet-600">
                <ArrowLeft size={16} className="mr-1" />
                Exit Quiz
              </Link>
              
              <div className="flex items-center bg-white rounded-full px-4 py-1 shadow-sm">
                <Clock size={16} className="text-violet-600 mr-2" />
                <span className="font-medium">{formatTimeRemaining()}</span>
              </div>
            </div>
            
            <QuizQuestion 
              question={quiz.questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={quiz.questions.length}
              onAnswer={handleAnswer}
            />
          </div>
        )}
        
        {completed && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <QuizResult 
              quiz={quiz}
              score={calculateScore()}
              correctAnswers={correctAnswers}
              totalQuestions={quiz.questions.length}
              timeTaken={timeTaken}
              onRetry={handleStartQuiz}
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;