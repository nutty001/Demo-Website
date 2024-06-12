import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="underImage">
        <div className="contact-title">
          <h1>CONTACT US</h1>
        </div>
        <div className="padding innerWidth flexCenter con-container con-container-space">
          <form action="" className="contact-form">
            <div className="con-left">
              <span className="contact-des-left">
                Want to discuss your project?
              </span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="contact-inputs"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-inputs"
              required
            />
            <select className="dropdown" name="dropdown-select" id="">
              <option value="">UI/UX Designer</option>
              <option value="">3D Designer</option>
              <option value="">Graphic Designer</option>
              <option value="">Branding</option>
            </select>
            <button type="submit">
              SEND <br />
              MESSAGE
            </button>
          </form>

          <div className=" flexRowStart con-right ">
            <span className="location">
              LOCATION <br /> <br />
              London, UK <br />
              07 Mason Knolls <br />
              Lloydfurt WD6 5QD <br /> <br />
              PHONE <br /> <br />
              (204)564-8765
            </span>
            <span className="socials">
              EMAIL <br /> <br />
              agency@gmail.com <br />
              <br />
              SOCIALS <br />
              <br />
              <a className="social-text-facebook underline" href="">
                facebook
              </a>
              <a className="social-text-twitter links underline" href="">
                twitter
              </a>
              <a className="social-text-insta underline" href="">
                instagram
              </a>
            </span>
          </div>
        </div>
        <div className="footer-menu flexCenter paddings innerWidth con-container-foot">
          <a href="#card">
            <div className="con-page-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
              </svg>
            </div>
            <div className="prev-page">WHAT WE DO</div>
          </a>
          <span>KRUG 2022</span>
        </div>
      </div>
      <img src="./contact-bg.jpg" alt="" />
    </section>
  );
};

export default Contact;
