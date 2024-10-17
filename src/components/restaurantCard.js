import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function restaurantCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          {restaurant.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default App;

