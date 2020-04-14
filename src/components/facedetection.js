import React, { Component } from "react";
import Webcam from "react-webcam";

// import { faceActions } from "../actions";
// import { connect } from "react-redux";
import "../css/facedetection.css";

class Facedetec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      webcam: "",
      data: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const screenshot = this.webcam.getScreenshot();
    // if (screenshot) {
    //   this.props.facedetection();
    // }
    this.setState({ screenshot });
    // this.props.facedetection();
  }

  componentDidMount() {
    const url = "http://localhost:4001/users";
    const res = fetch(url);

    const data = res.json();
    console.log(data);
    this.setState({ data: data.users });
  }

  render() {
    if (this.state.screenshot === null) {
      return (
        <div>
          <h1 className="judul">Face detection</h1>
          <Webcam
            audio={false}
            ref={(node) => (this.webcam = node)}
            width="250"
            height="250"
            className="Face"
          />

          <div className="screenshots">
            <div className="controls">
              <button
                onClick={this.handleClick}
                type="button"
                className="btn bg-primary"
              >
                capture
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Face">
          {this.state.screenshot ? (
            <img src={this.state.screenshot} alt="screenshot" />
          ) : null}
          {this.state.data.map((users) => (
            <h1 key={users.id}>{users.name}</h1>
          ))}
        </div>
      );
    }
  }
}

export default Facedetec;
// function mapStateToPrps(state) {
//   const { facedetection } = state.facereducers;
//   return { facedetection };
// }
// const actionCreator = {
//   facedetection: faceActions.facedetection,
// };
// export default connect(mapStateToPrps, { actionCreator })(Facedetec);
