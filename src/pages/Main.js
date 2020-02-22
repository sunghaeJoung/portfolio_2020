import React, { Component } from "react";
import "../styles/Common.scss";
import "./Main.scss";
import About from "../components/About.js";
import Project from "../components/Project.js";

import mainImg from "../images/main-img.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      about: true,
      project: true
    };
  }

  openAbout = () => {
    this.setState({
      about: !this.state.about
    });
  };

  openProject = () => {
    this.setState({
      project: !this.state.project
    });
  };

  showDetail = () => {
    this.setState({
      //현재 mode의 반대값이면을 이 한줄로 가능
      mode: !this.state.mode
    });
  };

  render() {
    return (
      <div className="main">
        <footer className="btn">
          {/* about 버튼 */}
          <span
            onClick={this.openAbout}
            className={`btnRight ${this.state.about ? "noLine" : "yesLine"}`}
          >
            ABOUT
          </span>

          {/* project 버튼 */}
          <span
            onClick={this.openProject}
            className={`btnLeft ${this.state.project ? "noLine" : "yesLine"}`}
          >
            PROJECT
          </span>
        </footer>

        {/* main 시작 */}
        <div
          className={`mainBig ${
            this.state.about ? "whenCloseAbout " : "whenOpenAbout"
          }`}
          className={`mainBig ${
            this.state.project ? "whenCloseProject" : "whenOpenProject"
          }`}
        >
          <div className="mainSmall">
            <img src={mainImg}></img>
            <div className="mainTxt">
              <div>Hello</div>
              <div>I'm Sunghae.</div>
              {/* 메인 소개문구 추가할 예정 */}
            </div>
            <div className="mainLine"></div>
          </div>

          {/* about, project 컴포넌트 */}
          <About about={this.state.about} />
          <Project about={this.state.project} />
        </div>

        {/* 하단 contact 박스 */}
        <footer
          onClick={this.showDetail}
          className={this.state.mode ? "goUp" : "goDown"}
        >
          <div className="contact">
            <div className="contact-txt">CONTACT</div>
            <div className="contact-detail">
              <span>
                <a href="https://www.instagram.com/_sunghae__/">
                  <FaGithub className="icon" />
                </a>
                <a href="https://github.com/sunghaeJoung">
                  <FaInstagram className="icon" />
                </a>
              </span>
              <span className="email">
                <span className="txt">E-MAIL : </span>
                <span>ppl870988@gmail.com</span>
              </span>
              <span>
                <span className="txt">PHONE : </span>
                <span>+82 10-7195-xxxx</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
