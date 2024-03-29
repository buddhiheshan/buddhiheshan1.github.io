import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementsComponent from "../Components/EducationAndExperience/AchievementsComponent";
import EducationComponent from "../Components/EducationAndExperience/EducationComponent";
import ExperienceComponent from "../Components/EducationAndExperience/ExperienceComponent";
import ExtrasComponent from "../Components/EducationAndExperience/ExtrasComponent";

import { DETAILS } from "../Data/otherDetails";

const EducationAndExperience = () => {
  const [details] = useState(DETAILS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="main-container">
      <Row>
        <Col md={6}>
          <EducationComponent education={details.education} />
        </Col>
        <Col md={6}>
          <ExperienceComponent experience={details.experience} />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <AchievementsComponent acheivements={details.acheivements} />
        </Col>
        <Col md={6}>
          <ExtrasComponent extra={details.extra} />
        </Col>
      </Row>
    </Container>
  );
};

export default EducationAndExperience;
