import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <>
             <footer class="app-footer ">
            <div class="container">
                <div class="row footer-content text-center">
                    <div className="col-md-2">
                    <img src="../../images/logo.png" alt=""/>
                    </div>
                    <div className="col-md-7 pt-3 ">
                        <ul className="list-style-none  ">
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                            <li><a href="/privacypolicy">Privacy Policy</a></li>
                            <li><a href="/terms&conditions">Terms & Conditions</a></li>
                        </ul>

                    </div>
                    <div className="col-md-3 pt-3 ">
                        {/* <img src="" alt=""></img> */}
                        <img class="app-apk-buttons img-fluid" src="../../images/apk-buttons.png" alt=""/>
                    </div>
                    <p class="app-copyrights-section pt-4 mt-3">Copyright @ Zorolegal 2021 All Rights Reserved</p>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer