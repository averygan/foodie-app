import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";

const Header = () => {
  return (
    <>
    <Navbar id="navBar" style={{}}>
    <Container>
      <div>
        <Navbar.Brand id="logo"><a href="/">foodie</a></Navbar.Brand>
      </div>
      <div>
      <Navbar.Brand class="navMenu" id="login"><a href="#" >Login</a></Navbar.Brand>
      <Navbar.Brand class="navMenu" id="signup"><a href="#">SignUp</a></Navbar.Brand>
      </div>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;


