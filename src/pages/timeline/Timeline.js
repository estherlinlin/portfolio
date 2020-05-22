import React from "react";
import "./Timeline.scss";

const timeline = () => (
  <section className="section-timeline">
    <div class="u-center-text u-mb-md">
      <h2 class="heading-secondary">Education &amp; Experience</h2>
    </div>
    <div className="container">
      <div className="timeline__education">
        <div className="timeline-item">
          <h4 className="timeline-item__year">
            <span>2016.11</span>
          </h4>

          <div className="timeline-item__circle"></div>
          <h3 className="timeline-item__title">國立文華高中</h3>
        </div>
        <div className="timeline-item">
          <h4 className="timeline-item__year">
            <span>2016.09</span>
          </h4>

          <div className="timeline-item__circle"></div>
          <h3 className="timeline-item__title">國立成功大學</h3>
          <p className="timeline-item__text">工業與資訊管理學系</p>
        </div>
        <div className="timeline-item">
          <h4 className="timeline-item__year">
            <span>2016.09</span>
          </h4>

          <div className="timeline-item__circle"></div>
          <h3 className="timeline-item__title">國立成功大學</h3>
          <p className="timelin-iteme__text">工業與資訊管理研究所</p>
        </div>
      </div>
      <div className="timeline__job">
        <div className="timeline-item">
          <h4 className="timeline-item__year">
            <span>
              2016.11-
              <br />
              2020.02
            </span>
            <span></span>
          </h4>
          <div className="timeline-item__circle"></div>
          <h3 className="timeline-item__title">Garmin Corp.</h3>
          <div className="timeline-item__projects">
            <ul>
              <li>
                <span>維護保養系統</span>
                <p>lorem</p>
              </li>
              <li>
                <span>自動工時回報系統</span>
                <p>lorem</p>
              </li>
              <li>
                <span>自動倉儲系統</span>
                <p>lorem</p>
              </li>
              <li>
                <span>資料維護</span>
                <p>lorem</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default timeline;
