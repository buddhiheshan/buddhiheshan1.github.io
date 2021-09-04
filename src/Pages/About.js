import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Interests from "../Components/About/InterestsComponent";
import Introduction from "../Components/About/IntroductionComponent";
import { ABOUT } from "../Data/about";
import Skills from "../Components/About/SkillsComponent";

const Home = () => {
  const [data] = useState(ABOUT);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="main-container">
      <Introduction name={data.name} />
      <Interests interests={data.interests} description={data.description} />
      <Skills />
    </Container>
  );
};

export default Home;
