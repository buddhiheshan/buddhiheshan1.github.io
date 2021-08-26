import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import PDF from "../../Assets/BUDDHI_PERERA_Resume.pdf";

const ResumeButtonComponent = () => {
  return (
    <Container>
      <Row className="resume-button">
        <Col>
          <Button variant="outline-light" href={PDF} target="_blank">
            Download Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeButtonComponent;
