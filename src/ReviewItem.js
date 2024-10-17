import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <h3>{review.food}</h3>
      <p>{review.review}</p>
      <p>Rating: {review.rating} ⭐</p>
    </div>
  );
};

export default ReviewItem;
