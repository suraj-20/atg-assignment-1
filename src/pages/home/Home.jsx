import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Card from "../../components/cards/Card";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
};

export default Home;
