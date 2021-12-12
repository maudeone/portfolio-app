import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value:55,
              density: {
                enable:true,
                value_area:900
              }
            },  
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f2643d"
              }
            }
          }  
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>  
  );
}

export default App;
