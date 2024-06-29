import React from "react";

const Navbar = () => {
  return (
    <header className="d-flex justify-content-between align-items-center my-3">
      <div className="logo">
        <h1 className="text-primary">
          hobby<span className="text-secondary">cue</span>
        </h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Search here..."
        />
      </div>
      <div className="sign-in">
        <button className="btn btn-primary">Sign In</button>
      </div>
    </header>
  );
};

export default Navbar;
