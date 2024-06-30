import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Card from "../../components/cards/Card";
import AddYourOwnCard from "../../components/cards/AddYourOwnCard";
import Testimonial from "../../components/testimonials/Testimonial";
import Subfooter from "../../components/footers/Subfooter";
import Footer from "../../components/footers/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Card />
      <AddYourOwnCard />
      <Testimonial />
      <Subfooter />
      <Footer />
    </div>
  );
};

export default Home;
