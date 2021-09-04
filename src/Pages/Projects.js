import React, { useState, useEffect } from "react";

import { PROJECTS } from "../Data/projects";
import { MINI_PROJECTS } from "../Data/miniProjects";

import { Container } from "react-bootstrap";

import Project from "../Components/Projects/ProjectComponent";
import MiniProject from "../Components/Projects/MiniProjectComponent";

const Projects = () => {
  const [projects] = useState(PROJECTS);
  const [mini_projects] = useState(MINI_PROJECTS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="main-container">
      <Project projects={projects} />
      <MiniProject mini_projects={mini_projects} />
    </Container>
  );
};

export default Projects;
