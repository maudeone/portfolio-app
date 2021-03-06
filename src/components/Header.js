import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
      <div id="home" className="header-wrapper">
        <div className="main-info">
            <h1>Web Development</h1>
            <Typed
              className="typed-text"
              strings={["Web Development", "Web Design"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
            <Link smooth={true} to="contact" offset={-50} className="btn-main-offer" href="#">Contact me</Link>
        </div> 
      </div>
    )
}

export default Header
