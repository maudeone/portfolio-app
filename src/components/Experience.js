import React from "react";

const Experience = () => {
    return (
      <div className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Experience</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2014-2015</h3>
                <p>After school teacher/ coordinator at I Have a Dream Foundation in 
                    Harlem, NYC. Tutored elementary school children in Math, English, 
                    and Art while attending college.</p>  
              </div>
          </div>
          <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2017</h3>
                <p>Graduated from The New School with a degree in Media Studies
                    with a focus on the Internet.</p>  
              </div>
          </div>
          <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2019-2021</h3>
                <p>Working remotely and onsite at the Facebook (Meta) NYC engineering
                    office in SoHo as an IT Administrator.</p>  
              </div>
          </div>
          <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2020-2021</h3>
                <p>Began MS coursework at NYU Tandon School of Engineering for 
                    Computer Science.</p>  
              </div>
          </div>
        </div>
      </div>
    )
}

export default Experience
