import React from "react";
import {
  Header,
  HeroSection,
  Blog,
  Contact,
  Footer,
  WhatWeOffer,
} from "./components";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <hr />
      <WhatWeOffer />
      <hr />
      <Blog />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </>
  );
};

export default App;
