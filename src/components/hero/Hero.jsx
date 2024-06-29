import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="text-center my-5">
        <h2>
          Explore your <span className="text-primary">hobby</span> or{" "}
          <span className="text-secondary">passion</span>
        </h2>
        <p>
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system...
        </p>
      </div>

      <div className="d-flex justify-content-end my-3">
        <div className="sign-options">
          <button className="btn btn-outline-primary me-2">
            Continue with Google
          </button>
          <button className="btn btn-outline-primary">
            Continue with Facebook
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
