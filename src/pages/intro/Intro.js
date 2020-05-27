import React from "react";
import "./Intro.scss";
import Button from "../../components/button/Button";
import Menu from "../../components/menu/Menu";
import { introContent } from "../../portfolioData";


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
      <div class="intro__heading">
        <h1 class="heading-primary">
          <span class="heading-primary--main">{introContent.title}</span>
          <span class="heading-primary--sub">{introContent.subTitle}</span>
        </h1>
        <div className="btn-container">
          <Button className="btn btn--white btn--animate" href={"#contact"}>
            Contact Me
          </Button>
          <Button className="btn btn--white btn--animate" href={"#contact"}>
            Download Resume
          </Button>
        </div>
      </div>
    </header>
  </div>
);

export default intro;
