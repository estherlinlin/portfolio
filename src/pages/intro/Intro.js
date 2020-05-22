import React from "react";
import "./Intro.scss";
import Button from "../../components/button/Button";

const intro = () => (

    <section className="section-intro">
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
          <span class="heading-primary--main">Hi, there!</span>
          <span class="heading-primary--sub">Web Development &amp; FrontEnd Development
          </span>
        </h1>
        <Button className="btn btn--white btn--animate" href={"#contact"}>Contact Me</Button>
        {/* <a href="" class="btn btn--white btn--animate">Welcome</a> */}
      </div>
    </section>
  );

  export default intro;
