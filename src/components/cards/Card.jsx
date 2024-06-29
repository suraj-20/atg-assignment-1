import React from "react";

const Card = () => {
  return (
    <div>
      <div className="row my-5">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">People</h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby...
              </p>
              <button className="btn btn-primary">Connect</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Place</h5>
              <p className="card-text">
                Find a class, school, playground, auditorium...
              </p>
              <button className="btn btn-primary">Meet up</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Product</h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby...
              </p>
              <button className="btn btn-primary">Get it</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Program</h5>
              <p className="card-text">
                Find events, meetups, and workshops related to your hobby...
              </p>
              <button className="btn btn-primary">Attend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
