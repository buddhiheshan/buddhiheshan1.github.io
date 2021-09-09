import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import me from "../../Assets/About/me.png";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";

const Introduction = ({ name }) => {
  return (
    <Container>
      <Row className="intro-row">
        <Col md={7}>
          <h1>Hello!</h1>
          <h1>I'm {name}</h1>
          <div className="p-2">
            <a href="https://github.com/buddhiheshan" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="2em" />
              <span> buddhiheshan</span>
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.linkedin.com/in/buddhi-perera/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size="2em" />
              <span> Buddhi Perera</span>
            </a>
          </div>
          <div className="p-2">
            <a href="mailto:e16276@eng.pdn.ac.lk">
              <AiFillMail size="2em" />
              <span> e16276@eng.pdn.ac.lk</span>
            </a>
          </div>
          <div className="p-2">
            <a href="tel:+94771879927">
              <AiFillPhone size="2em" />
              <span> +94771879927</span>
            </a>
          </div>
        </Col>
        <Col md={5}>
          <Image src={me} roundedCircle fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
