import React from 'react';
import { Link } from 'react-router-dom';

const Restaurants = ({ restaurants }) => {
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
