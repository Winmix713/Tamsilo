import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TeamSelectionPage from './pages/TeamSelectionPage';
import PredictionResultsPage from './pages/PredictionResultsPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TeamSelectionPage />} />
      <Route path="/3/alapindex" element={<PredictionResultsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
