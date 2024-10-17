import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {
  const [food, setFood] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { food, review, rating };

    await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });

    navigate('/'); // Redirect to home after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        placeholder="Food Name"
        required
      />
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
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
  );
};

export default ReviewForm;
