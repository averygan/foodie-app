import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = ({ restaurants }) => {
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                {restaurants.map((restaurant) => (
                    <div className="mb-4" key={restaurant.id}>
                        <RestaurantCard restaurant={restaurant} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
