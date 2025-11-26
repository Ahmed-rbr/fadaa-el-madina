import React from "react";
import AppTemplate from "./templates/AppTemplate";
import Hero from "./components/Hero";
import About from "./components/About";
import DEcount from "./components/DEcount";
import GridCards from "./components/GridCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Stastiques from "./components/Stastiques";
import Qst from "./components/Qst";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <DEcount />
      <GridCards />
      <WhyUs />
      <Stastiques />
      <Qst />
      <Footer />
    </>
  );
};

export default App;
