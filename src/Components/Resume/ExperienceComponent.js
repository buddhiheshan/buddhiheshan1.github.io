import React from "react";
// import { Button, Row, Col, Container } from "react-bootstrap";

const ExperienceComponent = ({ experience }) => {
  const Items = experience.map((item, i) => (
    <div className="resume-item" key={i}>
      <h5 className="resume-item-title">{item.title}</h5>
      <p className="resume-item-year">{item.year}</p>
      <ul className="no-bullet">
        <li>{item.organization}</li>
        {item.description ? <li>{item.description}</li> : null}
      </ul>
    </div>
  ));

  return (
    <React.Fragment>
      <h3>Experience</h3>
      {Items}
    </React.Fragment>
  );
};

export default ExperienceComponent;
