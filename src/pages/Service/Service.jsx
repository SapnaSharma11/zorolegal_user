import React from "react";
import "./Service.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Service() {
 

  return (
    <>
    <Header></Header>
      <div className="container-fluid history-head">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Serivce</h2>
          </div>
        </div>
      </div>
    <section className="service-section">
        <div className="container form-section p-5">
            <div className="row">
                <div className="col-md-10 m-auto bg-light p-4 service-form ">
                    <p className="form-head">Learner driving licence <img src="../../images/five-dots.svg" alt=""></img></p>
                    <form className="p-3 service-form">
                    <div class="col-12">
                    <label class="form-label">Full Name</label>
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
                  <div class="col-12">
                    <label class="form-label">Upload Document</label>
                    <div class="input-group has-validation">
                      <input
                        type="file"
                        name="fullName"
                        class="form-control"
                        id="yourUsername"
                        placeholder="Choose A File"
                        required
                      />
                    </div>
                  </div>
                  <center>
                  <button className="btnSubmit mt-3">
                        Submit
                    </button>
                </center>                 

                    </form>
                </div>
            </div> 
        </div>
    </section>
    
    <Footer></Footer>
    </>
  );
}
export default Service;
