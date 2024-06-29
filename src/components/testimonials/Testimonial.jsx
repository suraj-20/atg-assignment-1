import React from "react";
import image1 from "../../assets/Audio Track.png";
import image2 from "../../assets/Group 108.png";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="card-container">
        <div className="card testimonial-card">
          <div className="card-body d-flex flex-column gap-1 justify-content-between">
            <h4 className="card-title">Testimonials</h4>
            <p className="card-text">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className="testimonial-content-img d-flex justify-content-between align-items-center">
              <img className="testimonial-img1" src={image1} alt="" height={90} />
              <img className="testimonial-img2" src={image2} alt="" height={90} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
