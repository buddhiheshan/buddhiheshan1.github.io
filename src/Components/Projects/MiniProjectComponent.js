import React from "react";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";

const MiniProject = ({ mini_projects }) => {
  const MiniProjects = mini_projects.map((project, i) => (
    <Col xs={12} md={4} key={i} className="p-0">
      <Card className="project-card">
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <ButtonGroup aria-label="Basic example">
            {project.github ? (
              <Button variant="outline-primary" href={project.github} target="_blank">
                Github
              </Button>
            ) : null}
            {project.webpage ? (
              <Button variant="outline-primary" href={project.webpage} target="_blank">
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
        <h1>Mini Projects</h1>
      </Row>
      <Row>{MiniProjects}</Row>
    </React.Fragment>
  );
};

export default MiniProject;
