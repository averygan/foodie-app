import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Foodie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#SignUp">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;