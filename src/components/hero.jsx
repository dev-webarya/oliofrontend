import React from "react";
import bg1 from "../assets/images/bg_1.jpg";

const Hero = () => (
  <div className="hero-wrap" id="index" style={{
      backgroundImage: `url(${bg1})`,
      backgroundSize: "contain",
    }} data-stellar-background-ratio="0.5">
    <div className="overlay"></div>
    <div className="container">
      <div className="row no-gutters slider-text justify-content-start align-items-center">
        <div className="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
          <div className="text">
            {/* Optional heading */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
