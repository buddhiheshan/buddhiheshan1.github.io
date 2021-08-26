import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="text-center">
        <Col>Developed by Buddhi Perera</Col>
        <Col>Copyright &copy; {year}</Col>
        <Col>
          <a href="https://github.com/buddhiheshan" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size="1.5em" />
          </a>
          <a href="https://www.linkedin.com/in/buddhi-perera/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="1.5em" />
          </a>
          <a href="https://www.facebook.com/gkbuddhiperera/" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook size="1.5em" />
          </a>
          <a href="https://www.instagram.com/buddhi__heshan/?hl=en" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="1.5em" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
