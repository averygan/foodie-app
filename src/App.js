import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/add-review" element={<ReviewForm />} />
      </Routes>
    </Router>
  );
};

export default App;
