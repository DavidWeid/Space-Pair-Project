import React, { Component } from "react";
import Navbar from "../../components/Navbar";

class Main extends Component {
  state = {
    key: "value"
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar brand="Welcome" home="/" pageOne="Data" pageTwo="Forum" pageThree="Profile" />
      </div>
    );
  }
}

export default Main;
