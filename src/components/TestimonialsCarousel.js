import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";

const TestimonialsCarousel = () => {
    return (
      <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={2500}
      >
        <div>
          <img src={avatar1} alt="John Doe" />
          <div className="myCarousel">
            <h3>John Doe</h3>
            <p>This could be you!</p>
          </div>
        </div>      
        <div> 
          <img src={avatar2} alt="Jane Doe" />
          <div className="myCarousel"> 
            <h3>Jane Doe</h3>
            <p>Or this could be you!</p>
          </div>
        </div>     
      </Carousel>
    )
}

export default TestimonialsCarousel;
