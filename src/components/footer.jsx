import React from "react";

const Footer = () => (
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
              years of driving experience. Our cabs are cleaned daily, serviced
              regularly, and fitted with tracking systems to ensure peace of
              mind.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-0">
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker"></span>
                  <span className="text">
                    Olio Cabs, c/o Mr. Babu.H.C House No.90, Survey no. 164
                    Harohalli village, nearby Prithvi wedding events, muthsandra
                    post, Anugondanahalli hobli, Hosakote Taluk, Bangalore
                    560087
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-phone"></span>
                    <span className="text">+91 84005 12970</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-envelope"></span>
                    <span className="text">dheeru89564y@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This template is made with{" "}
            <i className="icon-heart color-danger" aria-hidden="true"></i> by{" "}
            <a href="" target="_blank" rel="noopener noreferrer">
              oliocabs
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
