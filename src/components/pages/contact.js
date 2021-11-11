import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture  from "../../../static/assets/images/contact/contact.jpeg"




export default function() {
  return  (<div className="content-page-wrapper">
    <div className="container">
      <div className="left-column" style={{
        background: "url(" + contactPicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        }} 
       />

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
            <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">
              916-420-0013
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
            <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">
              Sapeters4@gmail.com
            </div>
            
          </div>

          <div className="bullet-point-group">
            <div className="icon">
            <FontAwesomeIcon icon="map-marker-alt" />
            </div>

            <div className="text">
              Scottsdale, AZ
            </div>
            
          </div>

        </div>
      </div>
  </div>
  </div>)
}