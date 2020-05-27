import React from "react";
import "./Menu.scss";
// import {Fade} from "react-reveal";
// import {greeting} from "../../portfolio";

const menu = () => (
    // <Fade top duration={1000} distance="20px">
    <div className="navigation">
      <nav className="navigation-nav">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          {/* <span className="logo-name">{greeting.username}</span> */}
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


{/* <nav>
<div class="row"> <!-- Keep within 1140px width -->
    <img src="resources/img/logo-white.png" alt="Omnifood Logo" class="logo">
    <img src="resources/img/logo.png" alt="Omnifood Logo" class="logo-black">
    <ul class="main-nav js--main-nav">  
        <li><a href="#features">Food delivery</a></li>
        <li><a href="#works">How it works</a></li>
        <li><a href="#cities">Our locations</a></li>
        <li><a href="#plans">Sign up</a></li>
    </ul>
    <a class="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a> <!-- No href -->
</div>
</nav> */}
