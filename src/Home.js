import React from "react";
import Hero from "./components/Navbar/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
    </>
  );
};

export default Home;
