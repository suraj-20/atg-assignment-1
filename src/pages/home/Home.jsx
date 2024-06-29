import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Card from "../../components/cards/Card";
import AddYourOwnCard from "../../components/cards/AddYourOwnCard";
import Testimonial from "../../components/testimonials/Testimonial";
import Subfooter from "../../components/footers/Subfooter";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Card />
      <AddYourOwnCard />
      <Testimonial />
      <Subfooter />
    </div>
  );
};

export default Home;
