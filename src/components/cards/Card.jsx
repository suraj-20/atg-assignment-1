import React from "react";
import "./Card.css";

const cardObj = [
  {
    id: 1,
    heading: "People",
    cardText:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    buttonText: "Connect",
  },
  {
    id: 2,
    heading: "Place",
    cardText:
      "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
    buttonText: "Meet up",
  },
  {
    id: 3,
    heading: "Product",
    cardText:
      "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
    buttonText: "Get it",
  },
  {
    id: 1,
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
                <div className="card-body p-4 d-flex flex-column gap-1 justify-content-between">
                  <h4 className="card-title">{card.heading}</h4>
                  <p className="card-text">{card.cardText}</p>
                  <a href="#" className="btn btn-primary">
                    {card.buttonText}
                  </a>
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
