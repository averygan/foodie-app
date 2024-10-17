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
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <h3>Reviews:</h3>
      <ul>
        {restaurant.reviews.map((review, index) => (
          <li key={index}>
            {review.text} - Rating: {review.rating} ⭐
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          required
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default RestaurantDetails;
