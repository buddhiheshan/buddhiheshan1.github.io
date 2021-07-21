import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Interests from "../Components/Home/InterestsComponent";
import Introduction from "../Components/Home/IntroductionComponent";
import { HOME } from "../Data/home";

const Home = () => {
  const [home] = useState(HOME);
  return (
    <Container fluid className="main-container">
      <Introduction name={home.name} description={home.description} />
      <Interests interests={home.interests} />
    </Container>
  );
};

export default Home;
