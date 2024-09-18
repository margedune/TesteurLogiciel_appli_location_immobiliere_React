// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import LogementDetail from './logement/LogementDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<LogementDetail />} /> 
    </Routes>
  );
};

export default AppRoutes;
