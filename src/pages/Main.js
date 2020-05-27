import React, { Component } from "react";
import Menu from "../components/menu/Menu"
import Intro from "./intro/Intro";
import Timeline from "./timeline/Timeline";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";

import Footer from "../components/footer/Footer";



export default class Main extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Timeline />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer/>
      </div>
    );
  }
}
