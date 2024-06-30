import React from "react";
import "./Footer.css";
import image from "../../assets/Group 99.png";

const Subfooter = () => {
  return (
    <div className="sub-footer-section">
      <div className="subfooter-container d-flex flex-column justify-content-between gap-5">
        <div className="subfooter-content-upper ">
          <div className="subfooter-heading d-flex flex-column gap-3">
            <h2>
              Your <span className="text-primary">hobby</span> Your{" "}
              <span className="text-secondary">community...</span>
            </h2>
            <button
              style={{ width: "180px" }}
              className="btn btn-secondary"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="subfooter-content-lower">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
