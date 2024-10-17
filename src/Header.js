import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Foodie</h1>
      <nav>
        Login
        Signup
        <Link to="/add-review">Add Review</Link>
      </nav>
    </header>
  );
};

export default Header;
