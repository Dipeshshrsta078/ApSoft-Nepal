import React, {useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [sidebarStatus, setSidebarStatus ]= useState(false);
  const handleOnClick = () => {
    setSidebarStatus(!sidebarStatus) 
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className= "container">
      <a className="navbar-brand" href="#">
        <img className="logo" src="Images/APSoft_1.png" alt="" />
      </a>
      {!sidebarStatus 
      ? <button onClick = {handleOnClick}
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navMenu"
      /* aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation" */
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
    :  <button onClick = {handleOnClick}
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navMenu"
    /* aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation" */
  >
     <FontAwesomeIcon icon={faTimes} />
  </button>
      
    }
      

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          {/* <li className="nav-item  me-3">
            <a className="nav-link" href="#">
              Home 
            </a>
          </li> */}
          <li className="nav-item active me-3">
            <a className="nav-link " href="#about">
              About Us
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#clients">
              Our Clients
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
