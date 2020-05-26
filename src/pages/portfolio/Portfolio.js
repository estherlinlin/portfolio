import React from "react";
import "./Portfolio.scss";
import Modal from "../../components/modal/Modal";
import project_1 from "../../assets/img/green.jpg";
import project_2 from "../../assets/img/green.jpg";
import project_3 from "../../assets/img/green.jpg";
import project_4 from "../../assets/img/green.jpg";
import project_5 from "../../assets/img/green.jpg";
import project_6 from "../../assets/img/green.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { portfolioContent } from "../../portfolioData";

const portfolio = () => (
  <section className="section-portfolio">
    <div class="u-center-text u-mb-md">
      <h2 class="heading-secondary">Portfolio</h2>
    </div>
    <div className="content">
      <div className="projects">
        {portfolioContent.projects.map((item) => {
          return (
            <figure className="projects__item">
              <a href={`#${item.href}`} className="projects__link">
                <img src={project_4} className="projects__img"></img>
                <div className="projects__icon">
                  <FontAwesomeIcon icon={faPlayCircle} />
                </div>
                <figcaption className="projects__figcap">
                  <h4>{item.title}</h4>
                </figcaption>
              </a>
              <Modal
                title={item.title}
                href={item.href}
                source={item.source}
                desc={item.desc}
                device={item.device}
                tags={item.tags}
              />
            </figure>
          );
        })}

      </div>
    </div>
  </section>
);

export default portfolio;
