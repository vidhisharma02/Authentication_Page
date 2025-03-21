import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom CSS file for styling

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
    
        {/* Brand Name */}
        <Link className="navbar-brand" to="/home">MyApp</Link>

        {/* Navbar Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <button className="custom-login-btn">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
