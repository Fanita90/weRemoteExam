import React from "react";
import Questions from "./components/Navbar/FAQ/Questions";
import Hero from "./components/Navbar/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/home.scss";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <Hero />
        <Questions />
      </div>
      
    </>
  );
};

export default Home;
