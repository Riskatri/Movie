import React from "react";

export default class userMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraStream: null,
      screenshot: "",
    };
    this.handleClick.bind(this);
  }

  // getUserMedia(){
  //  const stream = null,

  // }
}
