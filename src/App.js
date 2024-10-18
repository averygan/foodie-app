import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Restaurants from './Restaurants';
import RestaurantDetails from './RestaurantDetails';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://foodish-api.com/api');
        const data = await response.json();

        const initialRestaurants = [
          { id: 1, name: 'Pizza Place', description: 'Delicious pizzas with fresh ingredients.', image: data.image, reviews: [] },
          { id: 2, name: 'Burger Joint', description: 'Juicy burgers and fries.', image: data.image, reviews: [] },
          { id: 3, name: 'Sushi Spot', description: 'Fresh sushi and sashimi.', image: data.image, reviews: [] },
          { id: 4, name: 'Curry Corner', description: 'Authentic Indian curries with a blend of aromatic spices.', image: data.image, reviews: [] },
          { id: 5, name: 'Pasta Paradise', description: 'Authentic Italian pasta made with fresh ingredients.', image: data.image, reviews: [] },
          { id: 6, name: 'Taco Town', description: 'Street-style tacos with bold flavors and fresh salsas.', image: data.image, reviews: [] }
        ];

        setRestaurants(initialRestaurants);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Function to add a review to a restaurant
  const addReview = (restaurantId, review) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) => 
        restaurant.id === restaurantId
          ? { ...restaurant, reviews: [...restaurant.reviews, review] }
          : restaurant
      )
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Restaurants restaurants={restaurants} />} />
        <Route path="/restaurants" element={<Restaurants restaurants={restaurants} />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails restaurants={restaurants} addReview={addReview} />} />
      </Routes>
    </Router>
  );
};

export default App;
