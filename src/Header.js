import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
    <Navbar>
      <Container>
      <Navbar.Brand href="#home"><Link to="/">Foodie</Link></Navbar.Brand>
      <Navbar.Brand href="#Login">Login</Navbar.Brand>
      <Navbar.Brand href="#SignUp">SignUp</Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;


