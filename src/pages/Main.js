import React, { Component } from "react";
import Intro from './intro/Intro';
import Timeline from './timeline/Timeline';
import Footer from '../components/footer/Footer';

export default class Main extends Component{
    render() {
        return (
          <div>
            <Intro />
            <Timeline/>
            <Footer/>
          </div>
        );
      }
}