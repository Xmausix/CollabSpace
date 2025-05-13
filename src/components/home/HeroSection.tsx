import React from 'react';
import { ArrowRight, Brain, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-violet-500 to-indigo-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Learn, Challenge,</span>
              <span className="block">Grow Together</span>
            </h1>
            
            <p className="mt-6 text-lg lg:text-xl text-violet-100 max-w-lg mx-auto lg:mx-0">
              Discover thousands of interactive quizzes across various topics. 
              Test your knowledge, challenge friends, and expand your horizons.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/categories">
                <Button 
                  size="lg" 
                  className="bg-white text-violet-700 hover:bg-violet-50 w-full sm:w-auto"
                  icon={<ArrowRight />}
                  iconPosition="right"
                >
                  Start Exploring
                </Button>
              </Link>
              <Link to="/categories">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Create a Quiz
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                  <Brain size={24} />
                </div>
                <p className="mt-2 font-semibold text-white">1000+ Quizzes</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                  <Zap size={24} />
                </div>
                <p className="mt-2 font-semibold text-white">8 Categories</p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                  <Users size={24} />
                </div>
                <p className="mt-2 font-semibold text-white">50K+ Users</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative mx-auto w-full max-w-md">
              {/* Hero image or illustration */}
              <div className="relative rounded-xl bg-white shadow-xl overflow-hidden transform rotate-2">
                <img 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="People taking a quiz" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">World Geography Challenge</h3>
                    <p className="text-sm mt-1 text-white/80">Test your knowledge of countries and capitals</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-8 -top-8 bg-sky-500 text-white rounded-lg shadow-lg p-4 transform -rotate-6 animate-pulse">
                <p className="font-bold">Just completed!</p>
                <p className="text-sm">Score: 95%</p>
              </div>
              
              <div className="absolute -left-4 -bottom-4 bg-pink-500 text-white rounded-lg shadow-lg p-4 transform rotate-6">
                <p className="font-bold">Popular Quiz</p>
                <p className="text-sm">5k+ players today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;