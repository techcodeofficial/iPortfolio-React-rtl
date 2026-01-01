import React from "react";
import Hero from "./Hero";
import About from "./About";
import State from "./State";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
export const Main = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <State />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
};
export default Main;
