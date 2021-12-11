import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faDesktop, faLock } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
      <div className="services">
        <h1 className="py-5">Services</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="box">
                  <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>  
                  <h3>Web Design</h3>
                  <p>I approach each project individually and always focus on the result.</p>
                </div>    
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                  <h3>Web Development</h3>
                  <p>Your website will be built using the most relevant industry frameworks and best coding practices.</p>
                </div>    
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faLock} size="2x" /></div>
                  <h3>System Administration</h3>
                  <p>I have several years of professional experience as an IT Administrator at Facebook (Meta).</p>
                </div>    
              </div>    
            </div>      
          </div>     
      </div>
    )
}

export default Services
