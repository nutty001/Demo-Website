import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Intro.css";
const Intro = () => {
  return (
    <section id="intro" className="intro-wrapper">
      <div className="intro-title">
        <h1>WHO WE ARE</h1>
      </div>
      <div className="padding innerWidth flexCenter i-container in-container-space">
        <div className="flexRowStart i-left in-container-space">
          <span className="intro-des-left">
            It is a long established <br />
            fact that a reader will <br />
            be distracted by the reading <br />
            content of a page <br />
            when looking at its layout. <br />
          </span>
          <span className="intro-des-right">
            There are many variations of <br />
            passages of Lorem Ipsum available, but <br />
            the majority have suffered alteration <br />
            in some form, by injected <br />
            our, or randomised words which don't <br />
            look even slightly believable. If <br />
            you are going to use a passage of Lorem Ipsum, <br />
            you need to be sure there isn't anything hidden <br />
          </span>
        </div>
        <div className="i-right">
          <div className="image-container">
            <img src="./intro-image.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-menu flexCenter paddings innerWidth i-container-foot">
        <a href="#">
          <div className="prev-page-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
            </svg>
          </div>
          <div className="prev-page">MAIN</div>
        </a>
        <a href="#card">
          <div className="next-page">WHAT WE DO</div>
          <div className="next-page-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Intro;
