import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log(size);

  useEffect(() => {
    const handleSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <nav className="navcontainer">
      <div className="navleft">
        <img src={logo} alt="logo" width="64" height="40" />
      </div>
      {size.width > 375 ? (
        <>
          <div className="navright">
            <a href="#l">Home</a>
            <a href="#l">News</a>
            <a href="#l">Popular</a>
            <a href="#l">Trending</a>
            <a href="#l">Categories</a>
          </div>
        </>
      ) : (
        <AiOutlineMenu size={25} onClick={openNav} />
      )}

      <side id="mySidenav" className="sidenav">
        <AiOutlineClose className="crossline" size={40} onClick={closeNav} />
        <a href="#l">Home</a>
        <a href="#l">News</a>
        <a href="#l">Popular</a>
        <a href="#l">Trending</a>
        <a href="#l">Categories</a>
      </side>
    </nav>
  );
}

export default Navbar;
