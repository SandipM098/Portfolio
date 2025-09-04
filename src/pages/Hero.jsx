import React from "react";
import Header from "../Components/Header";
import { Welcome } from "./Welcome";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const Hero = () => {
  return (
    <>
      <div className="mx-40">
        <Header />
        <br />
        <div id="home">
          <Welcome />
        </div>
        <br />
        <div id="about">
          <AboutMe />
        </div>
        <br />
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Hero;
