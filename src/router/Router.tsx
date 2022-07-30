import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { CharacterPage } from '../pages/CharacterPage';
import { SearchPage } from '../pages/SearchPage';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CharacterPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};