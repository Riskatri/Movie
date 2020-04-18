import React from "react";

export default class userMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capture: "",
      snapsot: "",
      canvas: null,
    };
    this.startStream = this.startStream.bind(this);
  }

  startStream() {
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: 1280, height: 720 } })
      .then(function (stream) {
        var video = document.querySelector("video");
        video.srcObject = stream;
        video.onloadedmetadata = function () {
          video.play();
        };
      })
      .catch((err) => alert("error"));
  }

  captureSnapshot() {
    const stream = document.getElementById("stream");
    const capture = document.getElementById("capture");
    const snapshot = document.getElementById("snapshot");
    const context = capture.getContext("2d");
    const img = new Image();

    context.drawImage(stream, 0, 0, capture.width, capture.height);
    img.src = capture.toDataURL("image/png");
    img.width = 240;
    snapshot.innerHTML = "";
    snapshot.appendChild(img);
    try {
      localStorage.setItem("photo", img.src);
    } catch (e) {
      console.log("Storage failed: " + e);
    }
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.startStream} className="btn bg-primary">
          Start Streaming
        </button>
        <span>
          <button onClick={this.captureSnapshot} className="btn bg-primary">
            Capture Image
          </button>
        </span>
        <div class="Face">
          <video id="stream" width="250" height="250"></video>
          <canvas id="capture" width="250" height="250" />
          <div id="snapshot"></div>
        </div>
      </div>
    );
  }
}
