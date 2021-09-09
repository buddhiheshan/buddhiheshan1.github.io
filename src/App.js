import React, { useEffect } from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import EducationAndExperience from "./Pages/EducationAndExperience";

import NavBar from "./Components/NavbarComponent";
import Footer from "./Components/FooterComponent.js";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HashRouter>
      {/* <Preloader load={load} /> */}
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
      <NavBar />
      {/* <ScrollToTop /> */}
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/education_and_experience" component={EducationAndExperience} />
      </Switch>
      <Redirect to="/" />
      <Footer />
      {/* </div> */}
    </HashRouter>
  );
};

export default App;
