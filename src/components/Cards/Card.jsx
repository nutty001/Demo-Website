import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "./Card.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/Common";

const Card = () => {
  return (
    <section id="card" className="c-wrapper">
      <div className="padding innerWidth c-container">
        <div className="c-head flexColStart">
          <h1>WHAT WE DO</h1>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((picture, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart c-card">
                <img src={picture.image} alt="services" />
                <span className="card-name">{picture.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="footer-menu flexCenter paddings innerWidth c-container-right">
        <a href="#intro">
          <div className="prev-page-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
            </svg>
          </div>
          <div className="prev-page">WHO WE ARE</div>
        </a>
        <a href="#contact">
          <div className="next-page">CONTACT</div>
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

export default Card;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter c-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
