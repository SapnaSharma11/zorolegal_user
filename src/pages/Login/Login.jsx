import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 background">
            <p className="top-heading mt-3 p-3">
              Zorolegal<br></br>
              <span className="top-subheading">
                <b>
                  {" "}
                  One-Stop-Shop <span>Legal Platform.</span>
                </b>{" "}
              </span>
            </p>
            <div className="row">
              <div className="col-md-12 banner">
                <img
                  className="img-fluid"
                  src="../../images/homepage.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row inputFields">
              <div className="col-md-8 mt-5 m-auto">
                <p class="heading mt-5 text-center">Login to Zorolegal</p>
                <p className="heading2 mt-2">
                  Welcome back! Log in with your data that you entered during
                  registration.
                </p>
                <form>
                  <button className="otp_btn">
                    <img src="../../images/Google.png" alt=""></img>Log in with
                    OTP
                  </button>
                </form>
                <form class="row g-3 needs-validation" novalidate>
                  <div class="col-12">
                    <label class="form-label">Email</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="yourUsername"
                        placeholder="Ex@gmail.com"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      name="mobile"
                      class="form-control"
                      required
                    />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckCheckedDisabled"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckCheckedDisabled"
                      >
                        Remember Me
                        <p className="ff">
                          <a href="/login"> forget your password? </a>
                        </p>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <p class="small ">
                      Already Have An Account ? <Link to="/"> Register </Link>
                      <button
                        class="ms-5 btn1"
                        type="submit"
                        style={{ background: "#47455A", color: "white" }}
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="row inputFields">
              <div className="col-md-8 mt-5 m-auto">
              <div className="cc">
                <p class="heading mt-5 text-center">Login to Zorolegal</p>
                <p className="heading3 mt-2">
                  Welcome back! Log in with your data that you entered during
                  registration.
                </p>
               <div className="log">
                <img  src="../../images/googleicon.png" alt="" width="80px" />
                </div>
                <div>
                <h1>Log in with OTP</h1>
                </div>
                <div>


                        <h5>-----------------------or---------------------------</h5>
                </div>
                <form class="row g-3 needs-validation" novalidate>
                  <div class="col-12">


                    <label class="form-label">Email</label>
                    
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="yourUsername"
                        placeholder="Ex@gmail.com"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      name="mobile"
                      class="form-control"
                     
                      required
                    />
                   <div class="form-check">
               <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
               <label class="form-check-label" for="flexCheckCheckedDisabled">
                Remember Me
                <p className="ff"><a href="/login"> forget your password? </a></p>
               </label>
                </div>
                        
                  </div>
                  <div class="col-md-12">
                    <p class="small ">
                      Don't Have An Account ? <a href="/login"> Register </a>
                      <button
                        class="ms-5 btn1"
                        type="submit"
                        style={{ background: "#47455A", color: "white" }}
                      >
                        Login 
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Login;
