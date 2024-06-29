import React from "react";
import logo from "../../assets/HobbyCue Logo.png";

const Navbar = () => {
  return (
    <header className="header-container d-flex justify-content-between align-items-center py-4 m-auto">
      <div className="logo d-flex align-items-center gap-5">
        <img src={logo} alt="" height={40} />
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
          />
        </div>
      </div>

      <div className="sign-in d-flex align-items-center gap-4">
        <div className="explore-hobies-btn d-flex gap-4">
          <button type="submit">Explore</button>
          <button type="submit">Hobbies</button>
        </div>
        <div className="nav-icons d-flex align-items-center gap-4">
          <i class="fa-solid fa-bookmark"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="sign-in-btn">
          <button type="submit">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
