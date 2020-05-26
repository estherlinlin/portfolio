import React from "react";
import "./Footer.scss";

const footer = () => (
  <footer class="footer">
    <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
    <div className="container">
      <p className="footer__copyright">
        2020 &copy; EstherLin. All rights reserved
      </p>
    </div>
  </footer>
);

export default footer;
