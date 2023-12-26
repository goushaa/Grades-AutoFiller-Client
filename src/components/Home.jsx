import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url("/img.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Adjust the height as needed
  };

  return (
    <div id="home">
      <div style={backgroundImageStyle}>
        <div id="title">Grades Auto Filler</div>
        <div id="module1" className="module">
          <Link to="/grade">
            <button className="module-button">Grades Sheet</button>
          </Link>
        </div>
        <div id="module2" className="module">
          <Link to="/bubble">
            <button className="module-button">Bubble Sheet</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
