import React from "react";
import "./Footer.scss";

const footer = () => (
  <footer className="footer">
    <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
    <div className="content">
      <p className="footer__copyright">
        2020 &copy; EstherLin. All rights reserved
      </p>
    </div>
  </footer>
);

export default footer;
