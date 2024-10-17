import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from an API or local state
    const fetchReviews = async () => {
      const response = await fetch('/api/reviews'); // Change to your API endpoint
      const data = await response.json();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
