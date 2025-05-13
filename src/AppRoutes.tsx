import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import QuizPage from './pages/QuizPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories/:categoryId" element={<CategoryPage />} />
      <Route path="/quiz/:quizId" element={<QuizPage />} />
      <Route path="/categories" element={<Navigate to="/" replace />} />
      <Route path="/discover" element={<Navigate to="/" replace />} />
      <Route path="/about" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;