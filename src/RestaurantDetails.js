import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantDetails.css'; // Import the CSS file for styling

const RestaurantDetails = ({ restaurants, addReview }) => {
    const { id } = useParams();
    const restaurant = restaurants.find((r) => r.id === parseInt(id));
  
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
  
    if (!restaurant) {
      return <div className="alert alert-danger">Restaurant not found</div>;
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newReview = { text: reviewText, rating };
      addReview(restaurant.id, newReview);
      setReviewText('');
      setRating(1);
    };
  
    return (
      <div className="container mt-4 restaurant-details">
        <h2 className="restaurant-name">{restaurant.name}</h2>
        <p className="restaurant-description">{restaurant.description}</p>
        <img src={restaurant.image} className="listing img-fluid rounded" alt={restaurant.name} />
        
        <h3 className="reviews-title">Reviews:</h3>
        <ul className="list-group mb-4">
          {restaurant.reviews.map((review, index) => (
            <li key={index} className="list-group-item">
              <div className="review-text">{review.text}</div>
              <span className="star">Rating: {'⭐'.repeat(review.rating)}</span>
            </li>
          ))}
        </ul>
        
        <form onSubmit={handleSubmit} className="form-group review-form">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            required
            className="form-control mb-2"
          />
          <select value={rating} onChange={(e) => setRating(e.target.value)} className="form-control mb-2">
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary" id="formSubmit">Submit Review</button>
        </form>
      </div>
    );
};

export default RestaurantDetails;
