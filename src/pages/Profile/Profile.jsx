import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Profile() {
  return (
    <>
      <Header></Header>
      <div className="container-fluid history-head">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Profile</h2>
          </div>
        </div>
      </div>
      {/* ---profile body--- */}
      <div className="container=fluid">
        <section>
          <div class="container mb-5">
            <div className="row">
              <div className="col-md-4 m-auto ">
                <div className="row profile-card-demo">
                  <div className="col-md-3 mt-3">
                    <img mt-5 src="../../images/innercircle.png" className="innercir" alt="" />
                    <img src="../../images/outercircle.png" className="outercir" alt="" />
                    <p  className="cirtext ms-4">85%</p>
                  </div>
                  <div className="col-lg-9  p-3 text-center">
                    <h3>Profile Informations</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <button>Complete your profile</button>
                  </div>
                </div>




                <div class="col dropdown  mt-3">
                  <button
                    class="btn btn-secondary order-drp dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-5  btn-img p-2">
                      {" "}
                      {/* <img src="../../images/drivingLicence.png" alt=""></img> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" fill="dark" class="bi bi-bag" viewBox="0 0 20 20">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
                    </span>{" "}
                    <span className="btn-text"> Order & Bookings </span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col dropdown  mt-3">
                  <button
                    class="btn btn-secondary order-drp dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-5  btn-img p-2">
                      {" "}
                      {/* <img src="../../images/drivingLicence.png" alt=""></img> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" fill="dark" class="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"
  />
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" fill="dark" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
</svg>
                    </span>
                    <span className="btn-text"> Dropdown button</span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col dropdown  mt-3">
                  <button
                    class="btn btn-secondary order-drp dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-5  btn-img p-2 ms-0">
                      {" "}
                      {/* <img src="../../images/drivingLicence.png" alt=""></img> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" fill="dark" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                    </span>
                    <span className="btn-text"> Dropdown button</span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

              </div>





              <div className="col-md-7 m-auto mt-5 userpfl-body ">

                <div className="row pt-5">
                  <div className="col-md-12  p-3">
                    <h2>
                      user details
                    </h2>
                    <div className="row">
                      <div className="col-md-2 ">
                      <img src="../../images/image1.png" alt="abc" />

                      </div>
                      <div className="col-md-2">
                      <button
                        className=" mt-3 btn1"
                        type="submit"
                        style={{ background: "#47455A", color: "white" }}
                      >
                        Change
                      </button>

                      </div>
                      <div className="col-md-2">
                      <button
                        className="ms-5 mt-3 btn2"
                        type="submit"
                        style={{ color: "#47455A" }}
                      > 
                      Remove
                      </button>
                      </div>

                    </div>

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <form className="p-3 service-form">
                      <div class="col-12">
                        <label class="form-label">First Name</label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="fullName"
                            class="form-control"
                            id="yourUsername"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Email</label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="fullName"
                            class="form-control"
                            id="yourUsername"
                            placeholder="Your City"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Password</label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="fullName"
                            class="form-control"
                            id="yourUsername"
                            placeholder="Your password"
                            required
                          />
                        </div>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-6">
                    <form className="p-3 service-form">
                      <div class="col-12">
                        <label class="form-label">Last Name</label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="fullName"
                            class="form-control"
                            id="yourUsername"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Mobile Number</label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="fullName"
                            class="form-control"
                            id="yourUsername"
                            placeholder="Your City"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                      <label class="form-label">Your City</label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="fullName"
                            class="form-control"
                            id="yourUsername"
                            placeholder="Your City"
                            required
                          />
                        </div>
                      </div>


                    </form>


                  </div>
                  <div className="row mb-3 ">
                    <div className="col-md-6">
                      <button className="cp-btn mt-3">
                        Change password
                      </button>
                    </div>
                    <div className="col-md-6  text-end">
                      <button className="sub-btn p-2 mt-2"
                      type="submit"
                      style={{ background: "#47455A", color: "white" }}>
                        Save changes
                      </button>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <Footer></Footer>






    </>
  )
}
export default Profile;
