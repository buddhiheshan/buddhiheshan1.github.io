import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="text-center">
        <Col >
          <AiOutlineGithub size="1.5em" />
          <AiFillLinkedin size="1.5em" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
