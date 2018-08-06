import React, { Component } from 'react';

import Header from "./components/Header";
import Image from "./components/Image";
import Img from "./components/Img.json"
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import Cosmography from "./images/Cosmography.jpg"
import Eveil from "./images/Eveil.jpg"
import Guitar from "./images/IA.jpg"
import Maikaverse from "./images/Maikaverse.jpg"
import Quadimension from "./images/Quadimension.jpg"
import Yukari from "./images/Ripple.jpg"
import Lily from "./images/Robot.jpg"
import Miku from "./images/Romeo.jpg"
import Sachiko from "./images/Sachikonpi.jpg"
import Quad from "./images/StarOcean.jpg"
import Twins from "./images/Sugar.png"
import Luo from "./images/Summer.png"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 >
          this.state.topscore ?
          this.state.correct + 1 :
          this.state.topscore,
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "Cosmography":
        return `${Cosmography}`
      case "Eveil":
        return `${Eveil}`
      case "Guitar":
        return `${Guitar}`
      case "Maikaverse":
        return `${Maikaverse}`
      case "Quadimension":
        return `${Quadimension}`
      case "Yukari":
        return `${Yukari}`
      case "Lily":
        return `${Lily}`
      case "Eveil":
        return `${Eveil}`
      case "Miku":
        return `${Miku}`
      case "Sachiko":
        return `${Sachiko}`
      case "Quad":
        return `${Quad}`
      case "Twins":
        return `${Twins}`
      case "Luo":
        return `${Luo}`
    }
  }

  render() {
    return (
      <div>
        <Navbar
          correct={this.state.correct}
          topscore={this.state.topscore}
          message={this.state.message} />
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)}
              name={image.name}
              key={image.name}
              pickImg={this.pickImg} />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;