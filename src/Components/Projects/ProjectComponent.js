import React from "react";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";

import ProjectImage from "./ProjectImageComponent";

import pipeline from "../../Assets/Projects/pipeline.png";
import waiterbot1 from "../../Assets/Projects/waiterbot/overall.png";
import waiterbot2 from "../../Assets/Projects/waiterbot/hardware.png";
import waiterbot3 from "../../Assets/Projects/waiterbot/desktop.png";
import waiterbot4 from "../../Assets/Projects/waiterbot/mobile.png";
import single from "../../Assets/Projects/single_cycle.png";
import key from "../../Assets/Projects/key_management.png";
import compost from "../../Assets/Projects/compost.png";

const Project = ({ projects }) => {
  const img_array = [[pipeline], [waiterbot1, waiterbot2, waiterbot3, waiterbot4], [single], [key], [compost]];

  const Projects = projects.map((project, i) => (
    <Col xs={12} md={6} key={i} className="project-card">
      <Card className="project-card-view">
        <ProjectImage images={img_array[i]} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            <p className="project-item-year">{project.year}</p>
            <p className="project-item-desc">{project.description}</p>
          </Card.Text>
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
