import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RestaurantCard({restaurant}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name: {restaurant.name}</Card.Title>
        <Card.Text>
          Description: {restaurant.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RestaurantCard;

