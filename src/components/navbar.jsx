import React from "react";
import Logout from '../logout';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="#index">olio<span>Cabs</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav">
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="#index" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#booking" className="nav-link">Booking</a></li>
            <li className="nav-item"><a href="#package" className="nav-link">Tour Packages</a></li>
            <li className="nav-item"><a href="#blog" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="#myBooking" className="nav-link">BookingTable</a></li>
            <li className="nav-item"><a href="#faq" className="nav-link">FAQ</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            <li className="nav-item">
              <Logout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
