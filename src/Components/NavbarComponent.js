import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineFundProjectionScreen ,AiOutlineUser, AiOutlineFileText } from "react-icons/ai";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Buddhi Perera
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <AiOutlineUser size="1.2em" /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects">
                <AiOutlineFundProjectionScreen size="1.2em" /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume">
                <AiOutlineFileText size="1.2em" /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
