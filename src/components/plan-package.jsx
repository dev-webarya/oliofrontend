import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap"; // Import React Bootstrap components
import mysoore from "../assets/images/mysure-ootey-coolage.png";
import Coorgeone from "../assets/images/Coorgeone.jpeg";
import kerala from "../assets/images/fdfdsfgfgffffff.png";

const Packages = () => {
  return (
    <section id="package" className="ftco-section ftco-cart">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Packages</span>
            <h2>Tour Packages</h2>
          </div>
        </div>
        <Tab.Container defaultActiveKey="kerala">
          <Row>
            <Col sm={12}>
              <Nav variant="tabs" className="justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="kerala">Bangalore – Mysore – Ooty</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="mysore">Bangalore – Kodaikanal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="nandi">Bangalore – Pondicherry</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                {/* Kerala Tab */}
                <Tab.Pane eventKey="kerala">
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="card">
                        <div className="card-image">
                          <img
                            src={mysoore}
                            className="card-img-top"
                            alt="Kerala Tour"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            3N / 4D | Group Departure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Mysore – Ooty</h4>
                          <p>
                            <strong>Duration:</strong> 3 Nights / 4 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong> Travel from Bangalore to Mysore, stay in
                            Mysore for one night. Then travel from Mysore to Ooty, stay in Ooty for
                            2 nights.
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing, driver allowance,
                            tolls
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Highlights:</strong> Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Mysore Ooty Package
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card">
                        <div className="card-image">
                          <img
                            src={Coorgeone}
                            className="card-img-top"
                            alt="Kerala Tour"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            3N / 4D | Group Departure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Bangalore–Ooty</h4>
                          <p>
                            <strong>Duration:</strong> 3 Nights / 4 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong> Travel from Bangalore to Ooty, stay in
                            Ooty for 3 nights 2 Days
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing, driver allowance,
                            tolls
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Highlights:</strong>Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Kerala Package
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card">
                        <div className="card-image">
                          <img
                            src={kerala}
                            className="card-img-top"
                            alt="Kerala Tour"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            5N / 6D | Group Departure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Kerala Tour Packages</h4>
                          <p>
                            <strong>Duration:</strong> 5 Nights / 6 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong> Travel from Bangalore to 5 N 6 Days
                            Munnar, Thekkady, Alleppey, Kochi
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing, driver allowance,
                            tolls
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Highlights:</strong>Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Kerala Package
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/* Mysore Tab */}
                <Tab.Pane eventKey="mysore">
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="card">
                        <div className="card-image">
                          <img
                             src={mysoore}
                            className="card-img-top"
                            alt="Mysore Tour 1"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            3N / 4D | Group Departure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Bangalore Kodaikanal</h4>
                          <p>
                            <strong>Duration:</strong> 3 Nights / 4 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong> Travel from Bangalore to Kodaikanal, stay
                            in Kodaikanal for 3 nights.
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Highlights:</strong> Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Kodaikanal Package
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card">
                        <div className="card-image">
                          <img
                             src={mysoore}
                            className="card-img-top"
                            alt="Mysore Tour 2"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            3N / 4D | Family Special
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary"> Coorg</h4>
                          <p>
                            <strong>Duration:</strong> 3 Nights / 4 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong> Travel from Bangalore to Coorg, stay in
                            Coorg for 3 nights.
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing
                          </p>
                          <p>
                            <strong>Highlights:</strong> Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Kodaikanal Package
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card">
                        <div className="card-image">
                          <img
                             src={mysoore}
                            className="card-img-top"
                            alt="Mysore Tour 3"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            2N / 3D | Adventure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Mysore Adventure Tour</h4>
                          <p>
                            <strong>Duration:</strong> 2 Nights / 3 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong> Travel from Bangalore toMysore, stay inMysore
                            for 2 nights
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing
                          </p>
                          <p>
                            <strong>Highlights:</strong> Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Mysore Package
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/* Nandi Hills Tab */}
                <Tab.Pane eventKey="nandi">
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="card h-100">
                        <div className="card-image">
                          <img
                            src={mysoore}
                            className="card-img-top"
                            alt="Nandi Hills Tour 1"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            3N / 4D | Adventure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Pondicherry</h4>
                          <p>
                            <strong>Duration:</strong> 3 Nights / 4 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong> Travel from Bangalore to Pondicherry,
                            stay in Pondicherry for 3 nights.
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing
                          </p>
                          <p>
                            <strong>Highlights:</strong> Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Pondicherry Package
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card h-100">
                        <div className="card-image">
                          <img
                             src={mysoore}
                            className="card-img-top"
                            alt="Nandi Hills Tour 2"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            3N / 4D | Adventure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Coorg </h4>
                          <p>
                            <strong>Duration:</strong> 3 Nights / 4 Days
                          </p>
                          <p>
                            <strong>Destinations:</strong>Travel from Bangalore to Coorg, stay in
                            Coorg for 3 nights.
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing
                          </p>
                          <p>
                            <strong>Highlights:</strong> Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Coorg Package
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card h-100">
                        <div className="card-image">
                          <img
                             src={mysoore}
                            className="card-img-top"
                            alt="Nandi Hills Tour 3"
                          />
                          <span className="card-image-span badge badge-primary position-absolute">
                            3N / 4D | Adventure
                          </span>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title text-primary">Nandi Adventure Tour</h4>
                          <p>
                            <strong>Destinations:</strong>Travel from Bangalore to Nandi Adventure
                            Tour, stay in Coorg for 3 nights.
                          </p>
                          <p>
                            <strong>Hotels: </strong>Available on request, hotel stay, breakfast,
                          </p>
                          <p>
                            <strong>Duration:</strong> 3 Nights / 4 Days
                          </p>
                          <p>
                            <strong>Inclusions:</strong> AC cab, sightseeing
                          </p>
                          <p>
                            <strong>Highlights:</strong> Maximum number of passengers: 4
                          </p>
                          <a
                            href="#"
                            className="btn btn-warning text-dark font-weight-bold"
                          >
                            Book Nandi Hills Package
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Packages;
