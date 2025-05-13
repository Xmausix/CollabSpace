
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { quizzes } from '../data/quizzes';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import QuizCard from '../components/quiz/QuizCard';
import CategoryBadge from '../components/ui/CategoryBadge';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h2>
          <p className="text-gray-600 mb-6">The category you're looking for does not exist.</p>
          <a 
            href="/" 
            className="inline-block bg-violet-600 text-white px-4 py-2 rounded-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  
  const categoryQuizzes = quizzes.filter(quiz => quiz.categoryId === categoryId);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Category Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <CategoryBadge category={category} size="lg" className="mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name} Quizzes</h1>
                <p className="text-gray-600 max-w-2xl">{category.description}</p>
              </div>
              
              <div className="flex items-center bg-gray-100 rounded-lg pl-3 pr-1 py-1">
                <Search size={18} className="text-gray-500 mr-2" />
                <input 
                  type="text"
                  placeholder={`Search in ${category.name}...`}
                  className="bg-transparent border-none focus:outline-none text-sm py-1 w-48"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Filter Bar */}
        <div className="bg-white border-b sticky top-16 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 overflow-x-auto">
              <div className="flex items-center space-x-1">
                <Filter size={16} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm font-medium rounded-full bg-violet-100 text-violet-700">
                  All
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition-colors">
                  Popular
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition-colors">
                  Recent
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition-colors">
                  Easy
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition-colors">
                  Medium
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition-colors">
                  Hard
                </button>
              </div>
              
              <button className="flex items-center text-gray-600 hover:text-violet-600 text-sm font-medium">
                <SlidersHorizontal size={16} className="mr-1" />
                Advanced
              </button>
            </div>
          </div>
        </div>
        
        {/* Quiz Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-medium">{categoryQuizzes.length}</span> quizzes
            </p>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded-md text-sm px-2 py-1">
                <option>Most Popular</option>
                <option>Newest First</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryQuizzes.map(quiz => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
          
          {categoryQuizzes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No quizzes found in this category yet.</p>
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg">
                Create the First Quiz
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;