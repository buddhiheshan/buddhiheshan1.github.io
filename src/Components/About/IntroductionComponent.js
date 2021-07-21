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
          <AiFillGithub size="2.5em" />
          <span> </span>
          <AiFillLinkedin size="2.5em" />
          <span> </span>
          <AiFillMail size="2.5em" />
          <span> </span>
          <AiFillPhone size="2.5em" />
        </Col>
        <Col md={5}>
          <Image src={me} roundedCircle fluid width="350" />
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
