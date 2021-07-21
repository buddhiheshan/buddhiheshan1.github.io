import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Interests = ({ interests, description }) => {
  const interests_list = interests.map((interest, i) => (
    <li key={i}>{interest}</li>
  ));

  return (
    <Container>
      <Row className="interests-row">
        <Col md={6}>
          <p>{description}</p>
        </Col>
        <Col md={6}>
          <h2>My Interests</h2>
          <ul variant="flush">{interests_list}</ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Interests;
