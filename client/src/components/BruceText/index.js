import React, { Component } from "react";
import "./style.css";

class BruceText extends Component {

  state = {
    yScroll: 0,
    switchClass: false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset >= 75 && this.state.switchClass === false) {
      this.setState({ switchClass: true })
    } else if (window.pageYOffset < 75 && this.state.switchClass === true) {
      this.setState({ switchClass: false })
    }
  }

  render() {
    return (
      <div className={this.state.switchClass ? "bruceText-fixed" : "bruceText"}>Welcome to the Rover Page</div>
    )
  }
}

export default BruceText;