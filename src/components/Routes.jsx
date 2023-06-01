import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

const Home = () => <Navigate to="/search" replace />;
const NotFound = () => <div>404 Not Found</div>;

export const App = () => (
  <div className="p-4">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </div>
);
