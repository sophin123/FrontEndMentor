import React from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div className="navcontainer">
      <div className="navleft">
        <img src={logo} alt="logo" width="64" height="40" />
      </div>

      <div className="navright">
        <a href="#l">Home</a>
        <a href="#l">News</a>
        <a href="#l">Popular</a>
        <a href="#l">Trending</a>
        <a href="#l">Categories</a>
      </div>
    </div>
  );
}

export default Navbar;
