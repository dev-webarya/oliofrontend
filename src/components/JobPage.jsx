import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // आपकी existing CSS यहाँ import करनी है

const JobPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [position, setPosition] = useState("");

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            olio<span>Cabs</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#career" className="nav-link">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="hero-wrap"
        style={{
          backgroundImage: "url('images/bg_1.jpg')",
          height: "200px",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
      </div>

      {/* Career Section */}
      <section id="career" className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-9 text-center heading-section">
              <h2 className="mb-3">
                Join the Olio Cabs Family – Drive Your Future Forward! 🚖
              </h2>
              <p>
                Are you passionate about driving, meeting people, and making
                every ride a great experience? Or do you have the energy and
                enthusiasm to connect with customers and grow a trusted brand?
              </p>
              <p>
                At Olio Cabs, we don’t just offer jobs — we offer opportunities
                to grow, learn, and succeed. Founded by Mr. Dhirendra Pratap, a
                professional with over 10 years of driving excellence, Olio Cabs
                is on a mission to become Bangalore’s most reliable and
                customer-friendly cab service.
              </p>
              <ul
                className="text-left"
                style={{ display: "inline-block", textAlign: "left" }}
              >
                <li>✨ <strong>Why Work With Us?</strong></li>
                <li>🚗 <strong>Steady Rides & Fair Earnings:</strong> Regular trips and timely payments.</li>
                <li>⏱ <strong>Respect for Your Time:</strong> Punctual scheduling and work-life balance.</li>
                <li>🎓 <strong>Professional Training:</strong> Learn from the founder himself and grow your skills.</li>
                <li>🌟 <strong>Career Growth:</strong> Be part of a company that is expanding and rewards high performers.</li>
                <li>🤝 <strong>Positive Work Culture:</strong> We value professionalism, respect, and teamwork.</li>
              </ul>
              <p>
                Whether you’re an experienced driver who takes pride in safe and
                clean rides, or a salesperson who loves building relationships
                and boosting business — we want you on our team!
              </p>
              <p>
                📞 Apply today and drive the change with Olio Cabs. Together, we
                will set new standards for service, safety, and success!
              </p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="row justify-content-center mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary btn-lg"
            >
              Apply for a job
            </button>
          </div>

          {/* Job Form */}
          {showForm && (
            <div className="row justify-content-center" id="jobFormRow">
              <div className="col-md-8">
                <form id="jobForm">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Position Applied For</label>
                    <select
                      className="form-control"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                    >
                      <option value="">Select Position</option>
                      <option value="Driver">Driver</option>
                      <option value="Sales and Marketing">Sales and Marketing</option>
                      <option value="Operations">Operations</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {position === "Other" && (
                    <div className="form-group">
                      <label>Please specify</label>
                      <input
                        type="text"
                        name="otherPosition"
                        className="form-control"
                        placeholder="Enter position"
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      name="address"
                      className="form-control"
                      rows="3"
                      placeholder="Enter your address"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Upload Resume</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-control-file"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>

                  {/* Supporting Docs */}
                  <div className="card mb-3">
                    <div className="card-header bg-info text-white">
                      Supporting Document / DL / ID
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Upload Supporting Documents</label>
                        <input
                          type="file"
                          name="supportingDocs[]"
                          className="form-control-file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-1">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About olioCabs</h2>
                <p>
                  At Olio Cabs, we understand that safety is the reason passengers
                  choose us again and again. Every driver undergoes personal
                  training by our founder, Mr. Dhirendra Pratap, who has over 10
                  years of driving experience. Our cabs are cleaned daily,
                  serviced regularly, and fitted with tracking systems to ensure
                  peace of mind.
                </p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      Olio Cabs, c/o Mr. Babu.H.C, Bangalore 560087
                    </span>
                  </li>
                  <li>
                    <a href="tel:+918400512970">
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 84005 12970</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:dheeru89564y@gmail.com">
                      <span className="icon icon-envelope"></span>
                      <span className="text">dheeru89564y@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved |
                Made with ❤️ by <a href="/">olioCabs</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default JobPage;
  