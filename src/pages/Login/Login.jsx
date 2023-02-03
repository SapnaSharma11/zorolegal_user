import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {

  const baseURL = "https://backend.zorolegal.com";
  const [isDisabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    mobile: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
   
   
  };
  const postData = async (e) => {
    e.preventDefault();
   
    if (user.mobile !== "") {
      setDisabled(false)
      var config = {
        method: "post",
        url: `${baseURL}/api/users/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      };
      axios(config)
        .then(function (response) {
          console.log(response);
          if (response.status === "200") {
            console.log(response.data);
            localStorage.setItem("accessToken", response.data.accessToken);
          }
        })
        .catch(function (error) {
          setDisabled(true)
          window.alert("User Not Found");
          console.log(error);
        });
    } 
   
  
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 background">
            <p className="top-heading mt-3 p-3">
              Zorolegal<br></br>
              <span className="top-subheading">
                <b>
                  
                  One-Stop-Shop <span>Legal Platform.</span>
                </b>
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
               
                <form class="row g-3 needs-validation" novalidate>
                  <div class="col-12">
                    <label class="form-label">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      onChange={handleInputs}
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-md-12">
                    <p class="small ">
                      Already Have An Account ? <Link to="/"> Register </Link>
                      <button
                        type="button"
                        class=" ms-5 btn1"
                        
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        disabled={isDisabled}
                        onClick={postData}
                        style={{ background: "#47455A", color: "white" }}
                      >
                        Login
                      </button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                     
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
