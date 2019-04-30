import React, { Component } from "react";
import "./style.css";

import { Link } from "react-router-dom";

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
      <div className={this.state.switchClass ? "bruceText-fixed" : "bruceText"}>
        <div className="bannerBar">
          <span className="banLink">{this.props.bannerMessage}</span>
          <div>
            <Link className={window.location.pathname === "/" ? "banLink activeBanLink" : "banLink"} to="/">Home</Link>
            <Link className={window.location.pathname === "/Forum" ? "banLink activeBanLink" : "banLink"} to="/Forum">Forum</Link>
            <Link className={window.location.pathname === "/Data" ? "banLink activeBanLink" : "banLink"} to="/Data">Data</Link>
            <Link className={window.location.pathname === "/Profile" ? "banLink activeBanLink" : "banLink"} to="/Profile">Profile</Link>
          </div>

        </div>
      </div>
    )
  }
}

export default BruceText;