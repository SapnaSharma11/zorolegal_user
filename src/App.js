import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp/signup.jsx";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import History from "./pages/History/History";
import Service from "./pages/Service/Service";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/profile" element={<Profile />}/>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
