import React from "react";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";

const Project = ({ projects }) => {

  const Projects = projects.map((project, i) => (
    <Col xs={12} md={6} key={i}>
      <Card>
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <ButtonGroup aria-label="Basic example">
            {project.github ? (
              <Button
                variant="outline-primary"
                href={project.github}
                target="_blank"
              >
                Github
              </Button>
            ) : null}
            {project.webpage ? (
              <Button
                variant="outline-primary"
                href={project.webpage}
                target="_blank"
              >
                Website
              </Button>
            ) : null}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <React.Fragment>
      <Row>
        <h1>Projects</h1>
      </Row>
      <Row>{Projects}</Row>
    </React.Fragment>
  );
};

export default Project;
