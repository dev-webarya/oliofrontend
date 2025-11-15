import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="#index">
          olio<span>Cabs</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="#index" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#booking" className="nav-link">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a href="#package" className="nav-link">
                Tour Packages
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#myBooking" className="nav-link">
                BookingTable
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item profile-dropdown" ref={dropdownRef}>
              <button
                className="nav-link profile-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="profile-avatar">
                  {user?.firstName?.[0]?.toUpperCase() || "U"}
                </div>
                <span className="profile-name">{user?.firstName || "User"}</span>
                <i
                  className={`fas fa-chevron-down ${showDropdown ? "active" : ""
                    }`}
                ></i>
              </button>

              {showDropdown && (
                <div className="profile-dropdown-menu">
                  <div className="dropdown-header">
                    <div className="dropdown-avatar">
                      {user?.firstName?.[0]?.toUpperCase() || "U"}
                    </div>
                    <div className="dropdown-user-info">
                      <p className="dropdown-name">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="dropdown-email">{user?.email}</p>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>

                  <button className="dropdown-item" onClick={() => navigate("/profile")}>
                    <i className="fas fa-user"></i>
                    <span>My Profile</span>
                  </button>

                  <button className="dropdown-item" onClick={() => navigate("/settings")}>
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                  </button>

                  <div className="dropdown-divider"></div>

                  <button className="dropdown-item logout-item" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Custom Styling */}
      <style>{`
        .profile-dropdown {
          position: relative;
        }

        .profile-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #fff !important;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .profile-btn:hover {
          background: rgba(255,255,255,0.1);
        }

        .profile-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.3);
        }

        .profile-name {
          display: none;
        }

        .profile-btn i {
          transition: transform 0.3s ease;
          font-size: 0.8rem;
        }

        .profile-btn i.active {
          transform: rotate(180deg);
        }

        .profile-dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          min-width: 280px;
          margin-top: 8px;
          animation: slideDown 0.3s ease;
          z-index: 1000;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-header {
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .dropdown-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          color: #fff;
        }

        .dropdown-user-info {
          flex: 1;
        }

        .dropdown-name {
          margin: 0;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .dropdown-email {
          margin: 4px 0 0 0;
          color: #666;
          font-size: 0.8rem;
        }

        .dropdown-divider {
          height: 1px;
          background: #e5e7eb;
          margin: 8px 0;
        }

        .dropdown-item {
          width: 100%;
          padding: 12px 16px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          color: #333;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: #f3f4f6;
          color: #667eea;
        }

        .dropdown-item i {
          width: 20px;
          text-align: center;
          color: inherit;
        }

        .logout-item {
          color: #ef4444;
        }

        .logout-item:hover {
          background: #fef2f2;
          color: #dc2626;
        }

        @media (max-width: 991px) {
          .profile-name {
            display: inline;
          }

          .profile-dropdown-menu {
            right: -50px;
            min-width: 250px;
          }
        }

        @media (max-width: 576px) {
          .profile-btn {
            padding: 6px 8px;
          }

          .profile-avatar {
            width: 28px;
            height: 28px;
            font-size: 0.8rem;
          }

          .profile-name {
            display: none;
          }

          .profile-dropdown-menu {
            right: -40px;
            min-width: 240px;
          }

          .dropdown-header {
            padding: 12px;
          }

          .dropdown-item {
            padding: 10px 12px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
