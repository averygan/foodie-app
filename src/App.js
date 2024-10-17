import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ReviewList from './ReviewList'; // If needed
import ReviewForm from './ReviewForm';
import Restaurants from './Restaurants';
import RestaurantDetails from './RestaurantDetails';

const App = () => {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Pizza Place', description: 'Delicious pizzas with fresh ingredients.', reviews: [] },
    { id: 2, name: 'Burger Joint', description: 'Juicy burgers and fries.', reviews: [] },
    { id: 3, name: 'Sushi Spot', description: 'Fresh sushi and sashimi.', reviews: [] },
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
        <Route path="/add-review" element={<ReviewForm />} />
        {/* <Route path="/restaurantcard" element={<RestaurantCard />} /> */}
        <Route path="/restaurants" element={<Restaurants restaurants={restaurants} />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails restaurants={restaurants} addReview={addReview} />} />
      </Routes>
    </Router>
  );
};

export default App;
