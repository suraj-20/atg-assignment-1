import React from "react";
import "./Hero.css";
import object1 from "../../assets/OBJECTS (1).png";
import object2 from "../../assets/OBJECTS.png";

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

        <div className="login-section col-md-4">
          <h4 className="mb-3">Sign In</h4>
          <button className="btn btn-outline-primary mb-2 w-100">
            Continue with Google
          </button>
          <button className="btn btn-outline-primary mb-2 w-100">
            Continue with Facebook
          </button>
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="px-2">Or connect with</span>
            <hr className="flex-grow-1" />
          </div>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3 position-relative">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                <i className="bi bi-eye-slash"></i> {/* Add Bootstrap Icons */}
              </span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Continue
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Hero;
