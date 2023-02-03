import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/logo.png';

function NavBar() {
  return (
    <Navbar activekey={window.location.pathname} expand="md" sticky="top" variant="light" className="Navbar border-bottom">
      <Container className="NavContainer">
        <LinkContainer to="/" className="LogoContainer" rel="noopener noreferrer">
          <Navbar.Brand className="SpaceTravelers">
            <img src={logo} alt="Planet logo" className="Logo" />
            Space Travelers Hub
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto d-flex">
            <LinkContainer to="/" rel="noopener noreferrer" className="MyLink">
              <Nav.Link>Rockets</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Missions/" className="MyLink" rel="noopener noreferrer">
              <Nav.Link>Missions</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/MyProfile/" className="MyLink" rel="noopener noreferrer">
              <Nav.Link>
                <span className="Separator">|</span>
                <span>My Profile</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  );
}

export default NavBar;
