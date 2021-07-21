import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import me from "../../Assets/Home/me.png";

const Introduction = ({name, description}) => {
  return (
    <Container>
      <Row className="intro-row">
        <Col md={7}>
          <h1>Hello!</h1>
          <h1>I'm {name}</h1>
          <p>{description}</p>
        </Col>
        <Col md={5}>
          <Image src={me} roundedCircle  fluid/>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
