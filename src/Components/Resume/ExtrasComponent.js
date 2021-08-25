import React from "react";
// import { Button, Row, Col, Container } from "react-bootstrap";

const ExtrasComponent = ({ extra }) => {
  const Items = extra.map((item, i) => (
    <li key={i}>
      <h5>{item.title}</h5>
      {item.line1 ? <p className="m-0">{item.line1}</p> : null}
      {item.line2 ? <p>{item.line2}</p> : null}
    </li>
  ));

  return (
    <React.Fragment>
      <h3>Extra-curricular Activities</h3>
      <ul>{Items}</ul>
    </React.Fragment>
  );
};

export default ExtrasComponent;
