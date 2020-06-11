import React from "react";
import "./Intro.scss";
import Button from "../../components/button/Button";
import Menu from "../../components/menu/Menu";
import { introContent } from "../../portfolioData";
import resume_en from "../../assets/file/pinchunlin_resume_en.pdf";
import resume_cn from "../../assets/file/pinchunlin_resume_cn.pdf";

const intro = () => (
  <div>
    <Menu />
    <header className="section-intro">
      <div className="intro__container">
        <div className="sun"></div>
        <div className="cloud-container">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
        <div className="mountain"></div>
        <div className="mask"></div>
        <div className="lake">
          <div className="forest">
            <div className="tree">
              <div className="trunk"></div>
              <div className="leaf-round"></div>
            </div>
            <div className="tree">
              <div className="leaf-tria"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-round"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-round"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-tria"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-tria"></div>
              <div className="leaf-tria"></div>
              <div className="leaf-tria"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-tria"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-round"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-round"></div>
              <div className="trunk"></div>
            </div>
            <div className="tree">
              <div className="leaf-round"></div>
              <div className="trunk"></div>
            </div>
          </div>
          <div className="cat">
            <div className="head"></div>
            <div className="body"></div>
            <div className="tail-container">
              <div className="tail">
                <div className="tail stripe">
                  <div className="tail">
                    <div className="tail stripe">
                      <div className="tail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro__heading">
        <h1 className="heading-primary">
          <span className="heading-primary--main">{introContent.title}</span>
          <span className="heading-primary--sub">{introContent.subTitle}</span>
        </h1>
        <div className="btn-container">
          <Button className="btn btn--white btn--animate" href={"#contact"}>
            Contact Me
          </Button>
          <Button className="btn btn--white btn--animate" href={resume_cn} newTab>
            Download Resume{" "}
            <a className="download-link" href={resume_cn} target="_blank">
              中
            </a>
            /
            <a className="download-link" href={resume_en} target="_blank">
              英
            </a>
          </Button>
        </div>
      </div>
    </header>
  </div>
);

export default intro;
