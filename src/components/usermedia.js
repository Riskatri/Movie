import React from "react";

export default class userMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraStream: "",
      screenshot: null,
    };
 
  }

  componentDidMount() {
   navigator.mediaDevices.getUserMedia({video: true, audio:false})
      .then(this.handleVideo)
     
  }
  handleVideo  (stream)  {
    this.setState({
      cameraStream: window.URL.createObjectURL(stream)
    })
  }
  // videoPlaye() {
  //   document.getElementById("video-player");
  // }

  // videoPlayerSrcObject(stream) {
  //   this.videoPlaye.srcObject = stream;
  // }
  // videoPlayerWithSrc(stream) {
  //   this.videoPlaye.src = window.URL.createObjectURL(stream);
  // }
  startcapture(displayMediaOptions) {
    // let capture = null 
  const screenshot = navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
    this.setState({
   screenshot
    })
    
  
}
  render() {
    return (
      <div> 
        <button onClick={this.handleVideo}> Get Photos</button>

     </div>
   )
 }
}
