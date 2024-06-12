import React, { useState } from "react";
import "./Header.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    return { right: !menuOpened && "-100%" };
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="contact-menu">
            <a href="#contact">Contact Us</a>
          </div>

          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#">MAIN</a>
            <a href="#intro">WHO WE ARE</a>
            <a href="#card">WHAT WE DO</a>
            <a href="#contact">CONTACT US</a>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <HiOutlineMenuAlt4 size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
