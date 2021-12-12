import React from "react";
import {
      FacebookShareButton,
      FacebookIcon,
      TwitterShareButton,
      TwitterIcon,
      RedditShareButton,
      RedditIcon,
      LinkedinShareButton,
      LinkedinIcon
    } from "react-share";

const Footer = () => {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <p>New York, New York</p>
              </div>
              <div>
                <a href="tel:666-666-6666">+1(666)666-6666</a>
              </div>
              <div className="flex-pad">
                <p>maudeOne@gmail.com</p>
              </div>          
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6">
              <div className="row">
                <div className="col">
                  <a className="footer-nav">Home</a>
                  <br />
                  <a className="footer-nav">About me</a>
                  <br />
                  <a className="footer-nav">Services</a>
                </div>
                <div className="col">
                  <a className="footer-nav">Experience</a>
                  <br />
                  <a className="footer-nav">Portfolio</a>
                  <br />
                  <a className="footer-nav">Contact</a>
                </div>   
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
              <div className="d-flex justify-content-center">
                <FacebookShareButton
                  url={"https://github.com/maudeone"}
                  quote={"Fullstack Developer"}
                  hashtag="#javascript"
                >
                  <FacebookIcon className="mx-3" size={36}/>    
                </FacebookShareButton>
                <TwitterShareButton
                  url={"https://github.com/maudeone"}
                  quote={"Fullstack Developer"}
                  hashtag="#javascript"
                >
                  <TwitterIcon className="mx-3" size={36}/>    
                </TwitterShareButton>
                <RedditShareButton
                  url={"https://github.com/maudeone"}
                  quote={"Fullstack Developer"}
                  hashtag="#javascript"
                >
                  <RedditIcon className="mx-3" size={36}/>    
                </RedditShareButton>
                <LinkedinShareButton
                  url={"https://github.com/maudeone"}
                  quote={"Fullstack Developer"}
                  hashtag="#javascript"
                >
                  <LinkedinIcon className="mx-3" size={36}/>    
                </LinkedinShareButton>  
              </div>
              <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;Leading Solutions | All Rights Reserved  
              </p>
            </div>  
          </div>
        </div>        
      </div>
    )
}

export default Footer;
