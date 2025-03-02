import React from "react";
import "./About.css";
import { aboutMe } from "../../Constants/index.js";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-container">
        {
            aboutMe.map((item) => (
              <div key={item.id} className="about-item">
                <img src={item.icon} alt={item.name} className="about-icon" />
                <div className="about-text">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
            
        }
      </div>
    </div>
  );
}

export default About;
