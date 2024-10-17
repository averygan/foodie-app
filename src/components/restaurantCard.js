// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Image from 'react-bootstrap/Image';

// function RestaurantCard({restaurant}) {
//   return (
//     <Row>
//       <Image src="" alt='food image'/>
//       <Card style={{ width: '18rem' }}>
//         <Card.Body>
//           <Card.Title>{restaurant.name}</Card.Title>
//           <Card.Text>
//             {restaurant.description}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Row>
//   );
// }

// export default RestaurantCard;

import React from 'react';
import '../css/restaurant-card.css'; // Optional: For custom styling

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <div className="restaurant-details">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
        <p className="restaurant-rating">Rating:  / 5</p>
      </div>
    </div>
  );
};

export default RestaurantCard;