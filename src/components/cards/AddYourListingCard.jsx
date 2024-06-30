import React, { useState } from "react";

const cardObj = [
  {
    id: 1,
    iconColor: "#8064a2",
    userIcon: "fa-solid fa-users",
    heading: "People",
    cardText:
      "An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.",
    buttonText: "Connect",
  },
  {
    id: 2,
    iconColor: "rgb(105, 224, 105)",
    userIcon: "fa-solid fa-location-dot",
    heading: "Place",
    cardText:
      "An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
    buttonText: "Meet up",
  },
  {
    id: 3,
    iconColor: "rgba(218, 86, 86, 0.744)",
    userIcon: "fa-solid fa-bag-shopping",
    heading: "Product",
    cardText:
      "An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.",
    buttonText: "Get it",
  },
  {
    id: 4,
    iconColor: "rgba(86, 192, 218, 0.84)",
    userIcon: "fa-solid fa-calendar",
    heading: "Program",
    cardText:
      "An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.",
    buttonText: "Attend",
  },
];

const AddYourListing = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="add-listing-section">
      <div className="add-listing-container container">
        <div className="card-section d-flex flex-column gap-3">
          <h3 className="text-center">
            <i style={{ color: "#8064a2" }} class="fa-solid fa-circle-plus"></i>{" "}
            Add You Listing
          </h3>
          <div className="grid-container d-grid">
            {cardObj.map((card) => {
              const isHovered = hoveredCard === card.id;
              return (
                <div
                  key={card.id}
                  className="card-container"
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="card"
                    style={{
                      border: `2px solid ${card.iconColor}`,
                      backgroundColor: isHovered ? card.iconColor : "white",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div className="card-body p-5 d-flex flex-column gap-1 justify-content-between">
                      <h4 className="card-title d-flex align-items-center gap-3">
                        <i
                          style={{
                            color: isHovered ? "white" : card.iconColor,
                            transition: "color 0.3s ease",
                          }}
                          className={card.userIcon}
                        ></i>{" "}
                        <span
                          style={{
                            color: isHovered ? "white" : "inherit",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {card.heading}
                        </span>
                      </h4>
                      <p
                        className="card-text"
                        style={{
                          color: isHovered ? "white" : "inherit",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {card.cardText}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourListing;
