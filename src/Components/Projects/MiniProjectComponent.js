import React from "react";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";

import julia from "../../Assets/MiniProjects/fractals/julia.png";
import mandelbrot from "../../Assets/MiniProjects/fractals/mandelbrot.png";
import auction from "../../Assets/MiniProjects/auction.png";
import alu from "../../Assets/MiniProjects/alu.png";
import pathfinder from "../../Assets/MiniProjects/pathfinder.png";
import memory from "../../Assets/MiniProjects/memory.png";
import ProjectImage from "./ProjectImageComponent";

const MiniProject = ({ mini_projects }) => {
  const img_array = [[julia, mandelbrot], [auction], [alu], [pathfinder], [memory]];

  const MiniProjects = mini_projects.map((project, i) => (
    <Col xs={12} md={4} key={i} className="project-card">
      <Card className="project-card-view">
        <ProjectImage images={img_array[i]} />
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
