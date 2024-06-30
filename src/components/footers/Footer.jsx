import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer d-flex flex-column gap-4">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hobbycue</h3>
          <ul>
            <a href="/" className="text-decoration-none">
              <li>About Us</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Our Services</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Work with Us</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>FAQ</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>How Do I</h3>
          <ul>
            <a href="/" className="text-decoration-none">
              <li>Sign Up</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Add a Listing</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Claim Listing</li>
            </a>
            <a href="/" className="text-decoration-none">
              {" "}
              <li>Post a Query</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Add a Blog Post</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Other Queries</li>
            </a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <a href="/" className="text-decoration-none">
              <li>Listings</li>
            </a>
            <a href="/" className="text-decoration-none">
              {" "}
              <li>Blog Posts</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Shop / Store</li>
            </a>
            <a href="/" className="text-decoration-none">
              <li>Community</li>
            </a>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons d-flex gap-3 align-items-center">
            <a href="/" className="text-decoration-none social-icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" className="text-decoration-none social-icon">
              {" "}
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="/" className="text-decoration-none social-icon">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/" className="text-decoration-none social-icon">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="/" className="text-decoration-none social-icon">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="/" className="text-decoration-none social-icon">
              <i class="fa-solid fa-paper-plane"></i>
            </a>
          </div>
          <h3>Invite Friends</h3>
          <div className="invite-form">
            <input type="email" placeholder="Email ID" />
            <button>Invite</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom footer-bottom-content">
        <p>© Purple Cues Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
