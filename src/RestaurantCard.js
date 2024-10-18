import Card from 'react-bootstrap/Card';
import './styles.css';
import { Link } from 'react-router-dom';


function RestaurantCard({ restaurant }) {
  return (
    <Card style={{ width: '25rem'}} className="m-3">
      <Card.Img src={restaurant.image} className=" card-img-topcircular-image" />
      <Card.Body>
        <Link to={`/restaurant/${restaurant.id}`}>
          <Card.Title>{restaurant.name}</Card.Title>
        </Link>
        <Card.Text>{restaurant.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RestaurantCard;
