import React from "react";
import { Col } from "reactstrap";
import Navigation from "../layout/navigation";

const Main = props => {
  return (
    <>
      <Navigation />
      <Col>{props.children}</Col>
    </>
    // </div>
  );
};
export default Main;
