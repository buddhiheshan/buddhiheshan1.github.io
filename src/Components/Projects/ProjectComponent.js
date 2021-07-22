import React from "react";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";

const Project = ({ projects }) => {
  const Projects = projects.map((project, i) => (
    <Col xs={12} md={6} key={i} className="project-card">
      <Card className="project-card-view">
        <Card.Img variant="top" src={project.image} className="project-card-image" />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <ButtonGroup aria-label="Basic example">
            {project.github ? (
              <Button variant="outline-light" href={project.github} target="_blank">
                Github
              </Button>
            ) : null}
            {project.webpage ? (
              <Button variant="outline-light" href={project.webpage} target="_blank">
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
        <h1>My Projects</h1>
      </Row>
      <Row>{Projects}</Row>
    </React.Fragment>
  );
};

export default Project;
