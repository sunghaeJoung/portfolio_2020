import React, { Component } from "react";
import "./Common.scss";
import "./Main.scss";
import About from "../components/About.js";

import mainImg from "../images/main-img.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      about: true
    };
  }

  openAbout = () => {
    this.setState({
      about: !this.state.about
    });
  };

  showDetail = () => {
    this.setState({
      //현재 mode의 반대값이면을 이 한줄로 가능 구구절절 안써도됨
      mode: !this.state.mode
    });
    // if (!this.state.mode) {
    //   this.setState({ mode: true });
    // } else {
    //   this.setState({ mode: false });
    // }
  };

  render() {
    return (
      <div className="main">
        <footer className="btn">
          {/* about이랑 프로젝트 페이지 이동 */}
          <span onClick={this.openAbout} className="btnRight">
            ABOUT
          </span>

          <span className="btnLeft">PROJECT</span>
        </footer>

        <div
          className={`mainBig ${
            this.state.about ? "whenCloseAbout " : "whenOpenAbout"
          }`}
        >
          <img src={mainImg}></img>
          <div className="mainTxt">
            <div>Hello</div>
            <div>I'm Sunghae.</div>
            {/* <div>Frontend Developer</div> */}
          </div>
          <div className="mainLine"></div>
        </div>

        {/* 버튼 누르면 about이 등장*/}
        <About about={this.state.about} />
        {/* <div>{!this.state.about && <About about={this.state.about} />}</div> */}

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
