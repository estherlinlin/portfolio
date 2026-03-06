import React from "react";
// import waveSvg from "../assets/img/wave.svg";
import "./Footer.scss";

const footer = () => (
  <footer className="footer">
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div className="content">
      <p className="footer__copyright">
        2020 &copy; PinChunLin. All rights reserved
      </p>
    </div>
  </footer>
);

export default footer;
