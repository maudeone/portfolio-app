import React from "react";
import Author from "../profile.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
          <div className="row">
              <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap">
                    <img className="profile-img" src={Author} alt="Author"/>
                  </div>
              </div>
              <div className="col-lg-6 col-xm-12">
                  <h1 className="about-heading">About Me</h1>
                  <p>
                    Hello! I am Michael. I have been developing websites for almost 2 years. 
                    I am a Full-Stack Web Developer. Technologies I use include React and Ruby on Rails.
                    Programming languages I am experienced with include HTML/CSS, JavaScript, Ruby, and 
                    I have taken extensive MS CS coursework at New York University in C++.

                    I create responsive websites that are designed to be displayed on all devices, 
                    desktops, and smartphones. 

                    Before developing any webapp, business website, or e-commerce site I have a 
                    ready-made project layout (sketch). 

                    I am ready to do this for you or the company you represent! 

                    In addition to developing websites; I strive to expand my knowledge about the wide 
                    world of programming/web development on a daily basis.
                  </p>
              </div>
          </div>
        </div>
    )
}

export default AboutMe
