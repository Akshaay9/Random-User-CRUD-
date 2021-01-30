import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function NavBarTop() {
  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
          <LinkContainer to="/"><h2>Akshay</h2></LinkContainer>
        </Navbar.Brand>
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <p className="menuLinks">CompleteIds</p>
            </LinkContainer>
            <LinkContainer to="/incompleteids">
              <p className="menuLinks">InCompleteIds</p>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
   
  );
}

export default NavBarTop;
