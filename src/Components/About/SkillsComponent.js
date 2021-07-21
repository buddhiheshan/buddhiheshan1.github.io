import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DiJava, DiJavascript1, DiPython, DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiBootstrap, DiMysql, DiMongodb, DiLinux, DiGit } from "react-icons/di";
import { SiArduino } from "react-icons/si";

const Skills = () => {
  return (
    <Container>
      <Row className="skills-row">
        <Col xs={12}>
          <h2>My Skillset</h2>
        </Col>
        <Col xs={4} md={2} className="skill">
          C
        </Col>
        <Col xs={4} md={2} className="skill">
          VerilogHDL
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiJava size="3em" /> Java
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiJavascript1 size="3em" /> JavaScript
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiPython size="3em" /> Python
        </Col>
        <Col xs={4} md={2} className="skill">
           MatLab
        </Col>
        <Col xs={4} md={2} className="skill">
          <SiArduino size="3em" /> Arduino
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiHtml5 size="3em" /> HTML
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiCss3 size="3em" /> CSS
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiReact size="3em" /> React
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiNodejsSmall size="3em" /> Node.js
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiBootstrap size="3em" /> Bootstrap
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiMysql size="3em" /> MySQL
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiMongodb size="3em" /> MongoDB
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiLinux size="3em" /> Linux
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiGit size="3em" /> git
        </Col>
        <Col xs={4} md={2} className="skill">
           Fusion360
        </Col>
        <Col xs={4} md={2} className="skill">
           AutoCAD
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
