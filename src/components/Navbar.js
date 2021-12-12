import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} className="navbar-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth={true} to="home" offset={-1} className="nav-link" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" offset={-90} className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="services" offset={-100} className="nav-link" href="#">Services</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#">Experience</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="portfolio" offset={-100} className="nav-link" href="#">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contact" offset={-50} className="nav-link" href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
