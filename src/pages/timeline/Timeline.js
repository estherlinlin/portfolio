import React from "react";
import "./Timeline.scss";
import { timelineContent } from "../../portfolioData";

const timeline = () => (
  <section className="section-timeline" id="timeline"> 
    <div class="u-center-text u-mb-md">
      <h2 class="heading-secondary">Education &amp; Experience</h2>
    </div>
    <div className="content">
      <div className="timeline__education">
        {timelineContent.education.map((item) => {
          return (
            <div className="timeline-item">
              <h4 className="timeline-item__year">
                <span>{item.year}</span>
              </h4>

              <div className="timeline-item__circle"></div>
              <h3 className="timeline-item__title">{item.title}</h3>
              <p className="timeline-item__text">{item.subTitle}</p>
            </div>
          );
        })}
        
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
                <p>通知人員進行設備例行保養並回報及呈現統計報表的系統</p>
                <span className="timeline-item__tag frontend">Angular</span>
                <span className="timeline-item__tag backend">C#</span>
              </li>
              <li>
                <h4>工時回報系統</h4>
                <p>協助人員以系統搜集到的資料回報工時</p>
                <span className="timeline-item__tag frontend">Angular</span>
                <span className="timeline-item__tag backend">C#</span>
              </li>
              <li>
                <span>自動倉儲系統</span>
                <p>協助人員控制設備入料、出料並呈現料況庫存</p>
                <span  className="timeline-item__tag frontend">Angular</span>
              </li>
              <li>
                <span>i18n資料維護系統</span>
                <p>翻譯資源上傳新建、修改及查詢</p>
                <span  className="timeline-item__tag frontend">Angular</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default timeline;
