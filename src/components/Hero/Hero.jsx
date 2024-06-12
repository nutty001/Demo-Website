import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container">
        <div className="hero flexCenter paddings innerWidth he-container-left">
          <div className="hero-title ">
            <div className="orange-gradient" />
            <h1>
              WE CREATE
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BEST
              DIGITAL
              <br />
              PRODUCTS.
            </h1>
          </div>
        </div>
        <div className="footer-menu flexCenter paddings innerWidth he-container-right">
          <a href="#intro">
            <div className="next-page">WHO WE ARE</div>
            <div className="next-page-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="hero flexCenter paddings innerWidth he-container-space">
          <div className="flexColStart hero-des-left">
            <span>WE CREATE WE CREATE WE CREATE</span>
            <span>BEST DIGITAL BEST DIGITAL</span>
          </div>
          <div className="flexColStart hero-des-right">
            <span>
              WE CREATE WE CREATE WE CREATE WE CREATE WE CREATE WE CREATE
            </span>
            <span>BEST DIGITAL BEST DIGITAL BEST DIGITAL BEST</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
