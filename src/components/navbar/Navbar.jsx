import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/HobbyCue Logo.png";
import logo2 from "../../assets/HobbyCue Logo v2 2.png";
import { Link } from "react-router-dom";
import AuthForm from "../auth-form/AuthForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-section">
      <div className="header-container d-flex justify-content-between align-items-center py-4 m-auto position-relative">
        <div className="logo d-flex align-items-center gap-5">
          <Link to={"/"} className="desktop-logo d-flex">
            <img src={logo} alt="HobbyCue Logo" height={40} />
          </Link>
          <Link to={"/"} className="mobile-logo">
            <img src={logo2} alt="HobbyCue Logo" height={40} />
          </Link>
          <div className="search-bar d-none d-lg-flex align-items-center">
            <input
              type="text"
              className="input-bar"
              placeholder="Search here..."
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="sign-in d-flex align-items-center gap-5">
          <div className="explore-hobies-btn d-none d-lg-flex gap-4">
            <div
              className="dropdown"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <button
                style={{ color: "#8064a2" }}
                className="dropbtn btn btn-light d-flex gap-2 align-items-center"
              >
                <i className="fa-solid fa-compass"></i>
                Explore
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              {isHovered1 && (
                <div className="dropdown-content">
                  <a href="/">People - Community</a>
                  <a href="/">Places - Venues</a>
                  <a href="/">Programs - Events</a>
                  <a href="/">Products - Store</a>
                  <a href="/">Blogs</a>
                </div>
              )}
            </div>
            <div
              className="dropdown"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <button
                style={{ color: "#8064a2" }}
                className="dropbtn btn btn-light d-flex gap-2 align-items-center"
              >
                <i className="fa-solid fa-circle-play"></i>
                Hobbies
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              {isHovered2 && (
                <div className="dropdown-content">
                  <a href="/">People - Community</a>
                  <a href="/">Places - Venues</a>
                  <a href="/">Programs - Events</a>
                  <a href="/">Products - Store</a>
                  <a href="/">Blogs</a>
                </div>
              )}
            </div>
          </div>
          <div className="nav-icons d-flex align-items-center gap-4">
            <i className="fa-solid fa-bookmark"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="sign-in-btn d-none d-lg-block">
            <button className="btn btn-primary" type="button">
              Sign In
            </button>
          </div>
          <div className="bars d-lg-none">
            {isOpen ? (
              <i
                style={{ color: "#8064a2", fontSize: "1.2rem" }}
                className="fa-solid fa-close"
                onClick={toggleMenu}
              ></i>
            ) : (
              <i
                style={{ color: "#8064a2", fontSize: "1.2rem" }}
                className="fa-solid fa-bars"
                onClick={toggleMenu}
              ></i>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu d-lg-none position-absolute">
          <div className="form-container-in-mobile-menu">
            <AuthForm />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
