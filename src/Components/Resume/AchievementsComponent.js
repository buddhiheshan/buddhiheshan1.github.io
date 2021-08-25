import React from "react";
// import { Button, Row, Col, Container } from "react-bootstrap";

const AchievementsComponent = ({ acheivements }) => {
  const Items = acheivements.map((item, i) => (
    <div className="resume-item" key={i}>
      <h5 className="resume-item-title">{item.title}</h5>
      <p className="resume-item-year">{item.year}</p>
      <ul className="no-bullet">
        {item.line1 ? <li>{item.line1}</li> : null}
        {item.line2 ? <li>{item.line2}</li> : null}
      </ul>
    </div>
  ));

  return (
    <React.Fragment>
      <h3>Acheivements and Competetions</h3>
      {Items}
    </React.Fragment>
  );
};

export default AchievementsComponent;
