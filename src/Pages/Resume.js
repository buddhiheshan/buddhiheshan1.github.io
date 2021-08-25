import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementsComponent from "../Components/Resume/AchievementsComponent";
import EducationComponent from "../Components/Resume/EducationComponent";
import ExperienceComponent from "../Components/Resume/ExperienceComponent";
import ExtrasComponent from "../Components/Resume/ExtrasComponent";
import ResumeButtonComponent from "../Components/Resume/ResumeButtonComponent";

import { RESUME } from "../Data/resume";

const Resume = () => {
  const [resume] = useState(RESUME);

  return (
    <Container className="main-container">
      <ResumeButtonComponent />
      <Row>
        <Col>
          <EducationComponent education={resume.education} />
        </Col>
        <Col>
          <ExperienceComponent experience={resume.experience} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AchievementsComponent acheivements={resume.acheivements} />
        </Col>
        <Col>
          <ExtrasComponent extra={resume.extra} />
        </Col>
      </Row>
      <ResumeButtonComponent />
    </Container>
  );
};

export default Resume;
