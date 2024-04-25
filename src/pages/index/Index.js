import React from "react";

import "./Index.css";
import HomePage from "../../components/HomePage";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Works from "../../components/Works";
import Contact from "../../components/Contact";

const Index = () => {
  return (
    <div>
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
