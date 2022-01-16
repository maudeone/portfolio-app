import React from "react";
import Calculator from "../images/Calculator.jpg";
import Student from "../images/Students.png";
import TjPizza from "../images/TigersJawPizza.jpg";
import TwitterClone from "../images/TwitterClone.png";
import WeatherApi from "../images/WeatherAPI.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  /* Calculator
  const openPopupboxCalc = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={Calculator} alt="Calculator project" />
      <p>Calculator App</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://maudeone.github.io/calculator/")}>
      https://maudeone.github.io/calculator/</a>
    </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Calculator project.",
          },
        }
      });
  }

  const popupboxConfigCalc = {
    titleBar: {
      enable: true,
      text: "Calculator project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  } */

  //Student API
  const openPopupboxStudentApi = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={Student} alt="Student API project" />
      <p>Student API App; made with React, filters through a free remote API by search parameters.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://maudeone.github.io/student-profile-4165/")}>
      https://maudeone.github.io/student-profile-4165/</a>
    </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Student API project.",
          },
        }
      });
  }

  const popupboxConfigStudentApi = {
    titleBar: {
      enable: true,
      text: "Student API project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //WeatherAPI
  const openPopupboxWeatherApi = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={WeatherApi} alt="Weather API project" />
      <p>Weather App which displays the current weather by communicating with the Openweathermap.org API.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://maudeone.github.io/weather-api/")}>
      https://maudeone.github.io/weather-api/</a>
    </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Weather API project.",
          },
        }
      });
  }

  const popupboxConfigWeatherApi = {
    titleBar: {
      enable: true,
      text: "Weather API project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //Tigers Jaw Pizza
  const openPopupboxTjPizza = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={TjPizza} alt="Tigers Jaw Pizza project" />
      <p>Business website for a fictional pizzeria using Vanilla JavaScript and CSS.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://maudeone.github.io/tigersjaw-pizza/")}>
      https://maudeone.github.io/tigersjaw-pizza/</a>
    </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Tigers Jaw Pizza project.",
          },
        }
      });
  }

  const popupboxConfigTjPizza = {
    titleBar: {
      enable: true,
      text: "Tigers Jaw Pizza project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //Twitter clone
  const openPopupboxTwitterClone = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={TwitterClone} alt="Twitter clone project" />
      <p>Fullstack clone of Twitter including secure Login/ Logout pages using 
        Ruby on Rails with bootstrap CSS/SCSS and a PostgreSQL database.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/maudeone")}>
      Please contact me directly for the link to this code.</a>
    </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Twitter clone project.",
          },
        }
      });
  }

  const popupboxConfigTwitterClone = {
    titleBar: {
      enable: true,
      text: "Twitter clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

    return (
      <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
          <div className="image-box-wrapper">
            <div className="portfolio-image-box" onClick={openPopupboxWeatherApi}>
              <img className="portfolio-image" src={WeatherApi} alt="Weather API Project" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>    
            <div className="portfolio-image-box" onClick={openPopupboxTjPizza}>
              <img className="portfolio-image" src={TjPizza} alt="Tigers Jaw Pizza Project" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box" onClick={openPopupboxStudentApi}>
              <img className="portfolio-image" src={Student} alt="Student API Project" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box" onClick={openPopupboxTwitterClone}>
              <img className="portfolio-image" src={TwitterClone} alt="Twitter Clone Project" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigStudentApi} />
        <PopupboxContainer {...popupboxConfigWeatherApi} />    
        <PopupboxContainer {...popupboxConfigTjPizza} />
        <PopupboxContainer {...popupboxConfigTwitterClone} />      
      </div>
    )
}

export default Portfolio
