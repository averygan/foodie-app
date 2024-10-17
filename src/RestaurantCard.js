import Card from 'react-bootstrap/Card';
import './styles.css';
import { Link } from 'react-router-dom';


function RestaurantCard({ restaurant }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Link to={`/restaurant/${restaurant.id}`}><Card.Title>{restaurant.name}</Card.Title></Link>
        <Card.Img src={restaurant.image} className="circular-image" />
        <Card.Text>
          Description: {restaurant.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RestaurantCard;
