import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'; // Assicurati di importare il CSS

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/users" className="navbar-link">Users</Nav.Link>
            <Nav.Link as={Link} to="/assenze" className="navbar-link">Assenze</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-link">About</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
