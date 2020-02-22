import React, { Component } from "react";
import "../styles/Common.scss";
import "./About.scss";

import aboutImg from "../images/about-img.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutMain">
          <img src={aboutImg}></img>
          <div className="aboutTxt">
            I am a Designer / Art Director with a primary focus on Digital
            Design and Branding, located in Thessaloniki, Greece. In 12 years, I
            have been armed with agency experience as well as freelance
            experience in global teams and with global clients. My work has been
            proudly awarded and recognised by prominent organisations and in
            competitions. For the last 4 years I have been working as a
            full-time freelancer and I am always glad to discuss collaborative
            projects or freelance commissions.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
