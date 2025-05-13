import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';
import CategoryBadge from '../ui/CategoryBadge';

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore by Category</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Dive into our diverse range of quiz categories and find your next challenge
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center group"
            >
              <CategoryBadge 
                category={category} 
                size="lg" 
                className="mb-4 group-hover:scale-110 transition-transform duration-200"
              />
              
              <h3 
                className="font-semibold text-gray-900 mb-1"
                style={{ color: category.color }}
              >
                {category.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {category.description}
              </p>
              
              <span className="text-sm font-medium" style={{ color: category.color }}>
                {category.quizCount} quizzes
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;