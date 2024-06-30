import React from "react";
import logo from "../../assets/HobbyCue Logo.png";

const Navbar = () => {
  return (
    <header className="header-container d-flex justify-content-between align-items-center py-4 m-auto">
      <div className="logo d-flex align-items-center gap-5">
        <img src={logo} alt="" height={40} />
        <div className="search-bar d-flex align-items-center">
          <input
            type="text"
            className="input-bar"
            placeholder="Search here..."
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="sign-in d-flex align-items-center gap-5">
        <div className="explore-hobies-btn d-flex gap-4">
          <button
            className="btn btn-secondary d-flex gap-2 align-items-center"
            type="submit"
          >
            <i class="fa-solid fa-compass"></i>
            Explore
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <button
            className="btn btn-secondary d-flex gap-2 align-items-center"
            type="submit"
          >
            <i class="fa-solid fa-circle-play"></i>
            Hobbies
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
        <div className="nav-icons d-flex align-items-center gap-4">
          <i class="fa-solid fa-bookmark"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="sign-in-btn">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
