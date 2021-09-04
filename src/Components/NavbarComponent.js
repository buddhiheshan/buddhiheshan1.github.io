import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineFundProjectionScreen, AiOutlineUser, AiOutlineFileText, AiFillGithub } from "react-icons/ai";

import PDF from "../Assets/BUDDHI_PERERA_Resume.pdf";

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
              <Nav.Link as={Link} to="/education_and_experience">
                <AiOutlineFileText size="1.2em" /> Education & Experience
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light" href="https://github.com/buddhiheshan" target="_blank">
            <AiFillGithub size="1.2em" /> Github
          </Button>
          <Button variant="outline-light" href={PDF} target="_blank">
            <AiOutlineFileText size="1.2em" /> Download Resume
          </Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};

export default NavBar;
