import React from "react";

function Header(){
    return(
    <>

<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="/home"> <img src="../../images/logo.png" alt="logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="/about">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="/history">History</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="/contactus">Contact Us</a>
        </li>
      </ul>
      <form class="d-flex">
        <a class="app-login-btn mt-3" href="/login">Log In
        </a>
        <a class="btn-gradient app-register-btn" href="/register">Register <span><img src="../../images/gradient-arrow.svg" alt="arrow"/></span>
        </a>
      </form>
    </div>
  </div>
</nav>


      {/* <header class="app-header position-fixed w-100">
            <div class="container">
                <nav class="navbar navbar-expand-lg justify-content-between">
                    <a class="navbar-brand" href="/home">
                      <img src="../../images/logo.png" alt="logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
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
                    </div>
                    <ul class="p-0 m-0 d-flex align-items-center list-style-none">
                        <li>
                            <a class="app-login-btn" href="/login">Log In</a>
                        </li>
                        <li>
                            <a class="btn-gradient app-register-btn" href="/register">Register <span><img src="../../images/gradient-arrow.svg" alt="arrow"/></span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header> */}
    </>
    )

}
export default Header