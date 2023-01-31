import React from "react";
import "./Home.css";
import Owl from "./Owl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function Home() {
  return (
    <>
      <Header></Header>
      <section className="top-header pb-5">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-sm-8 pt-5 ">
              <p className="head mt-2  ">Zorolegal</p>
              <p className="sub-heading">Changing how people get legal help</p>
              <p className="content mt-3 pe-5">
                We bring together huge network of brilliant professionals like
                Chartered Accountant, CS, Lawyers, Agent’s and technologists to
                deliver efficient and cost-effective legal solutions for SMEs,
                startups, Corporates & Individuals.
              </p>
              <button className="btn get-started mt-3">Get Started</button>
              {/* <div className="arrow-border">
                    <img className="arrow img-fluid" src="../../images/bottom-left-arrow.svg" alt=""/>
                    </div> */}
            </div>
            <div className="col-sm-4 ">
              <img
                class="img-fluid"
                src="../../images/banner-girl.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="app-our-services ">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="app-our-services-left">
                <h2>Our Popular Services</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <a href="/viewall">
                  View All <img src="../../images/viewall-arrow.png" alt="" />
                </a>
                <img
                  class="five-dots-graphic"
                  src="../../images/five-dots.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-6 mt-4">
                  <div class="app-service-card">
                    <div class="app-service-card-title">
                      <div class="app-service-card-image black-bg">
                        <img src="../../images/pan-card.svg" alt="" />
                      </div>
                      <div class="app-service-card-title-content">
                        <h5>Pan Card </h5>
                        <p>Service</p>
                      </div>
                    </div>
                    <p class="app-service-card-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mt-4">
                  <div class="app-service-card">
                    <div class="app-service-card-title">
                      <div class="app-service-card-image yellow-bg">
                        <img src="../../images/passport.svg" alt="" />
                      </div>
                      <div class="app-service-card-title-content">
                        <h5>Passport</h5>
                        <p>Service</p>
                      </div>
                    </div>
                    <p class="app-service-card-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mt-4">
                  <div class="app-service-card">
                    <div class="app-service-card-title">
                      <div class="app-service-card-image red-bg">
                        <img src="../../images/driving-licence.svg" alt="" />
                      </div>
                      <div class="app-service-card-title-content">
                        <h5>Driving License</h5>
                        <p>Service</p>
                      </div>
                    </div>
                    <p class="app-service-card-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mt-4">
                  <div class="app-service-card">
                    <div class="app-service-card-title">
                      <div class="app-service-card-image green-bg">
                        <img src="../../images/gst-filing.svg" alt="" />
                      </div>
                      <div class="app-service-card-title-content">
                        <h5>GST Filing</h5>
                        <p>Service</p>
                      </div>
                    </div>
                    <p class="app-service-card-para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            class="blue-green-shadow"
            src="../../images/blue-green-shadow.svg"
            alt=""
          />
        </div>
      </section>

      <section class="app-about">
        <div class="container">
          <h3>About Zorolegal</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
      </section>

      <section class="app-services">
        <div class="container">
          <div class="app-services-title d-flex justify-content-between align-items-center">
            <div>
              <h3>Services</h3>
              <h2>Our Services</h2>
            </div>
            <img src="../../images/five-dots.svg" alt="" />
          </div>
        </div>

        <div className="container mt-5">
          <div className="row pb-1">
            <div className="col-md-12 m-auto service-tabs">
              <div className="row nav nav-tabs nav-tabs">
                <div className="col  nav-item">
                  <button
                    class="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#Individual"
                  >
                    <div class="services-tab-title">
                      <span>
                        <img
                          src="../../images/individual-services.svg"
                          alt=""
                        />
                      </span>
                      <p>
                        Individual <br></br> Services
                      </p>
                    </div>
                  </button>
                </div>

                <div className="col  nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#RTO"
                  >
                    <div class="services-tab-title">
                      <span>
                        <img src="../../images/rto-services.svg" alt="" />
                      </span>
                      <p>
                        RTO <br></br>Services
                      </p>
                    </div>
                  </button>
                </div>

                <div className="col  nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Financial"
                  >
                    <div class="services-tab-title">
                      <span>
                        <img src="../../images/financial-services.svg" alt="" />
                        {/* <img src={finimg} /> */}
                      </span>
                      <p>
                        Financial<br></br> Services
                      </p>
                    </div>
                  </button>
                </div>

                <div className="col nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Registrations"
                  >
                    <div class="services-tab-title">
                      <span>
                        <img
                          src="../../images/registration-services.svg"
                          alt=""
                        />
                      </span>
                      <p>
                        Registrations <br></br> Services
                      </p>
                    </div>
                  </button>
                </div>

                <div className="col nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Legal"
                  >
                    <div class="services-tab-title">
                      <span>
                        <img src="../../images/legal-services.svg" alt="" />
                      </span>
                      <p>
                        Legal <br></br> Services
                      </p>
                    </div>
                  </button>
                </div>

                <div className="col nav-item">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Realestate"
                  >
                    <div class="services-tab-title">
                      <span>
                        <img
                          src="../../images/realestate-services.svg"
                          alt=""
                        />
                      </span>
                      <p>
                        Realestate <br></br>Services
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid service-tab-content">
          <div className="row">
            <div className="col-md-11 m-auto">
              <div class="tab-content p-3 ">
                <div
                  class="tab-pane fade show active Individual  "
                  id="Individual"
                >
                  <div class="app-services-tabs-wrapper ">
                    <div class="row">
                      {/* -------- */}
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              <img
                                src="../../images/drivingLicence.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img2} /> */}
                              <img src="../../images/Learner.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Leaner Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img3} /> */}
                              <img
                                src="../../images/driving-licence.svg"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Commercial Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img4} /> */}
                              <img
                                src="../../images/international.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>International Driving License</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img5} /> */}
                              <img src="../../images/Vector.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Registration Of
                                <br /> Vechicles.
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img6} /> */}
                              <img src="../../images/Registration.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Re-Registration Of Vechiles.</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img7} /> */}
                              <img src="../../images/roadtax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Road Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img8} /> */}
                              <img src="../../images/audiotax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Audio Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img9} /> */}
                              <img src="../../images/fitness.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Fitness Certificate For
                                <br />
                                Commercial
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      {/* ------ */}
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade RTO pt-3" id="RTO">
                  <div class="app-services-tabs-wrapper">
                    <div class="row">
                      {/* -------- */}
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              <img
                                src="../../images/drivingLicence.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img2} /> */}
                              <img src="../../images/Learner.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Leaner Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img3} /> */}
                              <img
                                src="../../images/driving-licence.svg"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Commercial Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img4} /> */}
                              <img
                                src="../../images/international.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>International Driving License</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img5} /> */}
                              <img src="../../images/Vector.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Registration Of
                                <br /> Vechicles.
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img6} /> */}
                              <img src="../../images/Registration.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Re-Registration Of Vechiles.</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img7} /> */}
                              <img src="../../images/roadtax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Road Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img8} /> */}
                              <img src="../../images/audiotax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Audio Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img9} /> */}
                              <img src="../../images/fitness.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Fitness Certificate For
                                <br />
                                Commercial
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      {/* ------ */}
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade Financial pt-3" id="Financial">
                  <div class="app-services-tabs-wrapper">
                    <div class="row">
                      {/* -------- */}
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              <img
                                src="../../images/drivingLicence.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img2} /> */}
                              <img src="../../images/Learner.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Leaner Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img3} /> */}
                              <img
                                src="../../images/driving-licence.svg"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Commercial Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img4} /> */}
                              <img
                                src="../../images/international.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>International Driving License</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img5} /> */}
                              <img src="../../images/Vector.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Registration Of
                                <br /> Vechicles.
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img6} /> */}
                              <img src="../../images/Registration.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Re-Registration Of Vechiles.</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img7} /> */}
                              <img src="../../images/roadtax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Road Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img8} /> */}
                              <img src="../../images/audiotax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Audio Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img9} /> */}
                              <img src="../../images/fitness.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Fitness Certificate For
                                <br />
                                Commercial
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      {/* ------ */}
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade Registrations pt-3"
                  id="Registrations"
                >
                  <div class="app-services-tabs-wrapper">
                    <div class="row">
                      {/* -------- */}
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              <img
                                src="../../images/drivingLicence.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img2} /> */}
                              <img src="../../images/Learner.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Leaner Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img3} /> */}
                              <img
                                src="../../images/driving-licence.svg"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Commercial Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img4} /> */}
                              <img
                                src="../../images/international.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>International Driving License</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img5} /> */}
                              <img src="../../images/Vector.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Registration Of
                                <br /> Vechicles.
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img6} /> */}
                              <img src="../../images/Registration.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Re-Registration Of Vechiles.</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img7} /> */}
                              <img src="../../images/roadtax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Road Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img8} /> */}
                              <img src="../../images/audiotax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Audio Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img9} /> */}
                              <img src="../../images/fitness.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Fitness Certificate For
                                <br />
                                Commercial
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      {/* ------ */}
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade Legal pt-3" id="Legal">
                  <div class="app-services-tabs-wrapper">
                    <div class="row">
                      {/* -------- */}
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              <img
                                src="../../images/drivingLicence.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img2} /> */}
                              <img src="../../images/Learner.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Leaner Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img3} /> */}
                              <img
                                src="../../images/driving-licence.svg"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Commercial Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img4} /> */}
                              <img
                                src="../../images/international.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>International Driving License</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img5} /> */}
                              <img src="../../images/Vector.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Registration Of
                                <br /> Vechicles.
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img6} /> */}
                              <img src="../../images/Registration.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Re-Registration Of Vechiles.</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img7} /> */}
                              <img src="../../images/roadtax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Road Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img8} /> */}
                              <img src="../../images/audiotax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Audio Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img9} /> */}
                              <img src="../../images/fitness.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Fitness Certificate For
                                <br />
                                Commercial
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      {/* ------ */}
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade Realestate pt-3" id="Realestate">
                  <div class="app-services-tabs-wrapper">
                    <div class="row">
                      {/* -------- */}
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              <img
                                src="../../images/drivingLicence.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img2} /> */}
                              <img src="../../images/Learner.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Leaner Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img3} /> */}
                              <img
                                src="../../images/driving-licence.svg"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Commercial Driving License</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img4} /> */}
                              <img
                                src="../../images/international.png"
                                alt=""
                              />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>International Driving License</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img5} /> */}
                              <img src="../../images/Vector.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Registration Of
                                <br /> Vechicles.
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img6} /> */}
                              <img src="../../images/Registration.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Re-Registration Of Vechiles.</h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img7} /> */}
                              <img src="../../images/roadtax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Road Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img8} /> */}
                              <img src="../../images/audiotax.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>Audio Tax Payment</h5>
                              <p>Service</p>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="app-service-card">
                          <div class="app-service-card-title">
                            <div class="app-service-card-image">
                              {/* <img src={img9} /> */}
                              <img src="../../images/fitness.png" alt="" />
                            </div>
                            <div class="app-service-card-title-content">
                              <h5>
                                Fitness Certificate For
                                <br />
                                Commercial
                              </h5>
                            </div>
                          </div>
                          <p class="app-service-card-para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                          </p>
                        </div>
                      </div>
                      {/* ------ */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="app-clients">
        <div>
          <img class="banner-left-shape" alt="" />
          <div class="container position-relative">
            <div class="app-services-title d-flex justify-content-between align-items-center">
              <div>
                <h3>Testimonial</h3>
                <h2>Our Satisfied Clients</h2>
              </div>
              <img src="../../images/five-dots.svg" alt="" />
            </div>
          </div>
          <div class="app-clients-slider">
            <Owl />
          </div>
          <img
            class="bottom-left-fivedots"
            src="../../images/five-dots.svg"
            alt=""
          />
        </div>
      </section>

    
    

      <Footer></Footer>
    </>
  );
}
