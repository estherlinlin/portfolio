import React from "react";
import "./Portfolio.scss";
import Modal from "../../components/modal/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { portfolioContent } from "../../portfolioData";

const portfolio = () => (
  <section className="section-portfolio" id="portfolio">
    <div className="u-center-text u-mb-md">
      <h2 className="heading-secondary">Portfolio</h2>
    </div>
    <div className="content">
      <div className="projects">
        {portfolioContent.projects.map((item) => {
          return (
            <figure className="projects__item">
              <a href={`#${item.href}`} className="projects__link">
                <img
                  src={item.coverimg_path}
                  alt={item.coverimg_alt}
                  className="projects__img"
                ></img>
                <div className="projects__icon">
                  <FontAwesomeIcon icon={faPlayCircle} />
                </div>
                <figcaption className="projects__figcap">
                  <h3>{item.title}</h3>
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
