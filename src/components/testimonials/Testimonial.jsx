import React from "react";
import testimonialUser from "../../assets/Ellipse 12.png";
import playBtn from "../../assets/play_arrow_black_24dp 1.png";
import audioTrack from "../../assets/Rectangle 2655.png";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="card-container">
        <div className="card testimonial-card">
          <div className="card-body d-flex flex-column gap-1 justify-content-between">
            <h4 className="card-title d-flex gap-3 align-items-center">
              <i
                style={{ color: "#8064a2" }}
                class="fa-solid fa-circle-user"
              ></i>{" "}
              Testimonials
            </h4>
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
              <div className="play-music-container d-flex align-items-center gap-4">
                <div
                  style={{
                    padding: "7px",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                  className="play-btn"
                >
                  <img src={playBtn} alt="" />
                </div>
                <div className="audio-track">
                  <img src={audioTrack} alt="" />
                </div>
                <div className="testimonials-user">
                  <img src={testimonialUser} alt="" width={50} height={50} />
                </div>
              </div>
              <div className="testimonial-user d-flex align-items-center gap-3">
                <img src={testimonialUser} alt="" width={70} height={70} />
                <div className="name-or-type">
                  <h6 style={{ margin: "0", color: "#8064a2" }}>
                    Shubha Nagarajun
                  </h6>
                  <p style={{ margin: "0", color: "#1848e8", fontSize: "0.9rem" }}>
                    Classical Dancer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
