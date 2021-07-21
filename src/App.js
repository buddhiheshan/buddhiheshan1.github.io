import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";

import NavBar from "./Components/NavbarComponent";
import Footer from './Components/FooterComponent.js';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Preloader load={load} /> */}
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
      <NavBar />
      {/* <ScrollToTop /> */}
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Redirect to="/" />
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
