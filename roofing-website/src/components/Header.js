import React, { useState } from "react";
import "../styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="site-header">
      <nav>
        <div id="brand">
          <a id="logo" href="/">
            <img src="./img/logo.svg" alt="Logo" />
          </a>
        </div>
        <div id="menu">
          <div
            id="menu-toggle"
            className={menuOpen ? "closeMenu" : ""}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`menu-links ${menuOpen ? "showMenu" : ""}`}>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
