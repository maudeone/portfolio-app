import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60,
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
    </div>  
  );
}

export default App;
