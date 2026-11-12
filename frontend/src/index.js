import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./landingpage/home/Homepage";
import Signup from "./landingpage/signup/Signup";
import Login from "./landingpage/login/login";
import Aboutpage from "./landingpage/about/Aboutpage";
import Supportpage from "./landingpage/support/Supportpage";
import Pricingpage from "./landingpage/pricing/Pricingpage";
import Navbar from "./landingpage/Navbar"
import Footer from "./landingpage/Footer"
import Productpage from "./landingpage/products/Productpage"
import Notfound from "./landingpage/Notfound";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />}/>
       <Route path="/signup" element={<Signup />}/>
       <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<Aboutpage />}/>
             <Route path="/support" element={<Supportpage/>}/>
                <Route path="/pricing" element={<Pricingpage/>}/>
                <Route path="/product" element={<Productpage/>}/>
                 <Route path="*" element={<Notfound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
