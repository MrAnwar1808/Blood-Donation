
import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <a href="/logo" className="logo">
          BloodBank.com
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/donate">Donor</a>
          <a href="/aboutus">About us</a>
          <a href="/profile">Profile</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
