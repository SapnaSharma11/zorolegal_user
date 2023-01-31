import React from "react";
import './Header.css'

function Header(){
    return(
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/home"> <img src="../../images/logo.png" alt="logo" style={{ width: "110px",  }}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/history">History</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/contactus">Contact Us</a>
              </li>
            </ul>
          
            <a class="login-btn text-light ms-3 me-5" href="/login" style={{textDecoration:"none"}}>Log In</a>
            <button class="btn register-btn m-2 " href="/signup">Register 
            <span><img  class='btn-arrow' src="../../images/gradient-arrow.svg" alt=""  /></span></button>

           
          </div>
        </div>
      </nav>
   </>
    )

}
export default Header