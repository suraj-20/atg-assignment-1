import React from "react";
import "./Card.css";

const cardObj = [
  {
    id: 1,
    iconColor: "#8064a2",
    userIcon: "fa-solid fa-users",
    heading: "People",
    cardText:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    buttonText: "Connect",
  },
  {
    id: 2,
    iconColor: "rgb(105, 224, 105)",
    userIcon: "fa-solid fa-location-dot",
    heading: "Place",
    cardText:
      "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
    buttonText: "Meet up",
  },
  {
    id: 3,
    iconColor: "rgba(218, 86, 86, 0.744)",
    userIcon: "fa-solid fa-bag-shopping",
    heading: "Product",
    cardText:
      "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
    buttonText: "Get it",
  },
  {
    id: 4,
    iconColor: "rgba(86, 192, 218, 0.84)",
    userIcon: "fa-solid fa-calendar",
    heading: "Program",
    cardText:
      "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
    buttonText: "Attend",
  },
];

const Card = () => {
  return (
    <div className="card-section">
      <div className="grid-container d-grid">
        {cardObj.map((card) => {
          return (
            <div key={card.id} className="card-container">
              <div className="card">
                <div className="card-body p-5 d-flex flex-column gap-1 justify-content-between">
                  <h4 className="card-title d-flex align-items-center gap-3">
                    <i
                      style={{ color: `${card.iconColor}` }}
                      className={card.userIcon}
                    ></i>{" "}
                    {card.heading}
                  </h4>
                  <p className="card-text">{card.cardText}</p>
                  <button
                    style={{ width: "140px" }}
                    className="btn btn-primary"
                    type="submit"
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
