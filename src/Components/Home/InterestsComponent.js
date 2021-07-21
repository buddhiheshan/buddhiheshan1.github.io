import React from "react";
import { Col, Container, ListGroup, Row, Image} from "react-bootstrap";
import interestImg from "../../Assets/Home/interests.svg";

const Interests = ({ interests }) => {
  const interests_list = interests.map((interest, i) => (
    <ListGroup.Item key={i}>{interest}</ListGroup.Item>
  ));

  return (
    <Container>
      <Row className="interests-row">
        <Col>
          <Image src={interestImg} fluid />
        </Col>
        <Col>
          <h2>My Interests</h2>
          <ListGroup variant="flush">{interests_list}</ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Interests;
