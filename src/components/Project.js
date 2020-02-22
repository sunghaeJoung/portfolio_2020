import React, { Component } from "react";
import "../styles/Common.scss";
import "./Project.scss";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="projectMain">
          <div className="nav"></div>
          <div className="detail"></div>
        </div>
      </div>
    );
  }
}

export default Project;
