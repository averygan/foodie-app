import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = ({ restaurants, addReview }) => {
    const { id } = useParams();
    const restaurant = restaurants.find((r) => r.id === parseInt(id));
  
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
  
    if (!restaurant) {
      return <div>Restaurant not found</div>;
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newReview = { text: reviewText, rating };
      addReview(restaurant.id, newReview);
      setReviewText('');
      setRating(1);
    };
  
    return (
      <div className="container mt-4">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
        <img src={restaurant.image} className="listing" alt={restaurant.name} />
        <h3>Reviews:</h3>
        <ul className="list-group mb-4">
          {restaurant.reviews.map((review, index) => (
            <li key={index} className="list-group-item">
              {review.text} - Rating: {review.rating} ⭐
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="form-group">
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
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>
    );
  };
  
  export default RestaurantDetails;