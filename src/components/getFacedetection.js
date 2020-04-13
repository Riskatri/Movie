import React, { Component } from "react";
import Webcam from "react-webcam";
// import "../css/facedetection.css";

export default class getFacedetection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const screenshot = this.refs.webcam.getScreenshot();
    this.setState({ screenshot });
  }
  render() {
    return (
      <div>
        {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
      </div>
    );
  }
}
