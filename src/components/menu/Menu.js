import React from "react";
import "./Menu.scss";

const menu = () => (
    // <Fade top duration={1000} distance="20px">
    <div className="navigation">
      <nav className="navigation-nav">
        <a href="#" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
    // </Fade>
);

export default menu;
