import React from "react";
import "./Skills.scss";
import { skillContent } from "../../portfolioData";

const skills = () => (
  <section className="section-skills" id="skills"> 
    <div class="u-center-text u-mb-md">
      <h2 class="heading-secondary">Skills</h2>
    </div>
    {/* <div className="content"> */}
      <div className="content">
        <div className="skill__left">
          <h3 class="heading-tertiary u-mb-sm">Language skills</h3>
          <div class="bottom-line"></div>
          <div className="skill__lang">
            <ul>
              <li>TOEIC 895分</li>
              <li>全民英檢中高級初試</li>
            </ul>
          </div>
        </div>
        <div className="skill__right">
          <h3 class="heading-tertiary u-mb-sm">Programming skills</h3>
          <div class="bottom-line"></div>
          <div className="skill__programming">
            <div className="chartContainer">
              {skillContent.skillsPie.map((item) => {
                return (
                  <div class="pie">
                    {/* <div class="pie__text">{item.text}</div> */}
                    <svg viewBox="0 0 120 120">
                      <circle className="bg" cx="60" cy="60" r="50" />
                      <circle
                        className={`progress ${item.text}`}
                        cx="60"
                        cy="60"
                        r="50"
                      />
                      <text
                        class="CircularProgress-Text"
                        x="60"
                        y="60"
                        dy=".4rem"
                        text-anchor="middle"
                      >
                        {item.text}
                      </text>
                    </svg>
                  </div>
                );
              })}
            </div>
            <div className="bar-container">
              {skillContent.skillsBar.map((item) => {
                return (
                  <div
                    className={`bar ${item.type}`}
                    bar-item={item.text}
                    bar-val={item.percent}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    <div className="bg-shape"></div>
  </section>
);

export default skills;
