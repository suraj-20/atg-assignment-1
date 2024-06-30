import React from "react";
import "./Hero.css";
import object1 from "../../assets/OBJECTS (1).png";
import object2 from "../../assets/OBJECTS.png";
import AuthForm from "../auth-form/AuthForm";

const Hero = () => {
  return (
    <main className="main-section">
      <div className="hero-container d-flex justify-content-between align-items-center  h-100">
        <div className="text-section col-md-7 d-flex justify-content-between flex-column gap-3">
          <div className="texts">
            <h2>
              Explore your <span className="text-primary">hobby</span> or{" "}
              <span className="text-secondary">passion</span>
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                wordSpacing: "4px",
                lineHeight: "2rem",
              }}
            >
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities...
              <br />
              If you are an expert or a seller, you can add your listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className="objects d-flex gap-1">
            <img src={object1} alt="" />
            <img src={object2} alt="" />
          </div>
        </div>

        <AuthForm />
      </div>
    </main>
  );
};

export default Hero;
