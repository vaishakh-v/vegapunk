import React from "react";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <div className="bg-[#F2F7FF]">
        <Hero />
      </div>
      <About />
      <Features />
    </div>
  );
};

export default Home;
