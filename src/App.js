import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp/signup.jsx";
import Header from "./components/Header"
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";




function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Signup />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
   

          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
