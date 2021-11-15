import React from "react";
import profilePicture from "../../../static/assets/images/bio/perfil2.jpeg"

export default function() {
  return (
  <div className="content-page-wrapper">
    <div className="container"> 
      <div className="left-column" 
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px"
        }} 

      />
      <div className="right-column">
        <div className="content">
          <h1>I'm Sean Peterson</h1>
          <p> I am a Highly motivated and dedicated Full Stack Developer with professional experience in background and hands-on experience in development and implementation of customized software and web-based application. Experienced in collaborating with cross- functional teams in all stages of software development, scripting and creating scalable website applications. Proficient at implementing core backend development tasks including 3rd party API integrations while working with multiple frameworks, software, Operating systems and programming languages.
        </p>

        </div>
      </div>
    </div>
  </div>
  );
}