import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = ({ restaurants }) => {
    return (
        <div className="container">
            <div className="row justify-content-center g-2">
                {restaurants.map((restaurant) => (
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" key={restaurant.id}>
                    <RestaurantCard restaurant={restaurant} />
                </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
