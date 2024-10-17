import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Restaurants from './Restaurants';
import RestaurantDetails from './RestaurantDetails';
import RestaurantCard from './RestaurantCard';

const App = () => {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Pizza Place', description: 'Delicious pizzas with fresh ingredients.', image: 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/06/Pizzas-in-Singapore-Peperoni-Pizzeria-900x643.jpg', reviews: [] },
    { id: 2, name: 'Burger Joint', description: 'Juicy burgers and fries.', image: 'https://www.southernliving.com/thmb/H04pCVJ5bLAnwPs2hFCmpNs5Uec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ultimate-southern-burger_batch64_beauty01-86-b9c26e256dd34e39b6c0cfb0c02a9fef.jpg', reviews: [] },
    { id: 3, name: 'Sushi Spot', description: 'Fresh sushi and sashimi.', image: 'https://www.craftycookbook.com/wp-content/uploads/2024/04/nigiri-sushi-1200.jpg', reviews: [] },
  ]);

  // Function to add a review to a restaurant
  const addReview = (restaurantId, review) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) => 
        restaurant.id === restaurantId
          ? { ...restaurant, reviews: [...restaurant.reviews, review] }
          : restaurant
      )
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Restaurants restaurants={restaurants} />} />
        <Route path="/RestaurantCard" element={<RestaurantCard />} />
        <Route path="/restaurants" element={<Restaurants restaurants={restaurants} />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails restaurants={restaurants} addReview={addReview} />} />
      </Routes>
    </Router>
  );
};

export default App;
