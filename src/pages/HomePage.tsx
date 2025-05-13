
import { categories } from '../data/categories';
import { quizzes } from '../data/quizzes';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedQuizzes from '../components/home/FeaturedQuizzes';
import CategorySection from '../components/home/CategorySection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedQuizzes quizzes={quizzes} />
        <CategorySection categories={categories} />
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                CollabSpace makes it easy to discover, take, and create quizzes in just a few steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-violet-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Categories</h3>
                <p className="text-gray-600">
                  Explore our diverse range of quiz categories and find topics that interest you.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-violet-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Take a Quiz</h3>
                <p className="text-gray-600">
                  Test your knowledge with our interactive quizzes and receive instant feedback.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-violet-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Results</h3>
                <p className="text-gray-600">
                  Share your achievements with friends and challenge them to beat your score.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-violet-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-violet-100 max-w-2xl mx-auto mb-8">
              Join thousands of users who are expanding their knowledge through our interactive quizzes.
            </p>
            <button className="bg-white text-violet-700 hover:bg-violet-50 font-medium px-6 py-3 rounded-lg transition-colors">
              Get Started Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;