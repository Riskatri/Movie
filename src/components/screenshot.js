import React from "react";
import { Link } from "react-router-dom";

export default class userMedia extends React.Component {
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
  }

  render() {
    return (
      <div class="Face">
        <canvas id="capture" width="250" height="250"></canvas>
        <div id="snapshot"></div>
      </div>
    );
  }
}
