import React, { Component } from "react";
import "./style.css";

import { Link } from "react-router-dom";
import Login from "../Login";

class BruceText extends Component {
  state = {
    yScroll: 0,
    switchClass: false,
    user: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleLogin = user => {
    if (user === true) {
      this.setState({ user: true });
    } else {
      this.setState({ user: false });
    }
  };

  handleScroll = () => {
    if (window.pageYOffset >= 75 && this.state.switchClass === false) {
      this.setState({ switchClass: true });
    } else if (window.pageYOffset < 75 && this.state.switchClass === true) {
      this.setState({ switchClass: false });
    }
  };

  render() {
    let sortBtn;

    if (this.props.sortOne) {
      sortBtn = (
        <button
          className="sort-btn btn dropdown-toggle"
          type="button"
          id="drop-sort"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort
        </button>
      );
    } else if (!this.props.sortOne) {
      sortBtn = <div />;
    }

    return (
      <div className={this.state.switchClass ? "bruceText-fixed" : "bruceText"}>
        <div className="navbar navbar-expand-lg bannerBar">
          <span className="banLink">{this.props.bannerMessage}</span>

          {sortBtn}

          <div className="sort-menu dropdown-menu" aria-labelledby="drop-sort">
            <button
              className="dropdown-item drop-item"
              type="button"
              value={this.props.sortOne}
              onClick={this.props.handleSortBtn}
            >
              {this.props.sortOne}
            </button>
            <button
              className="dropdown-item drop-item"
              type="button"
              value={this.props.sortTwo}
              onClick={this.props.handleSortBtn}
            >
              {this.props.sortTwo}
            </button>
          </div>

          <button
            className="navbar-toggler map-btn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span style={{ color: "White" }}>
              <i className="fas fa-map" />
            </span>
          </button>

          <div
            className="navcontainer collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className={
                  window.location.pathname === "/roverinfo"
                    ? "banLink activeBanLink"
                    : "banLink"
                }
                to="/roverinfo"
              >
                Home
              </Link>
              <Link
                className={
                  window.location.pathname === "/Forum"
                    ? "banLink activeBanLink"
                    : "banLink"
                }
                to="/Forum"
              >
                Forum
              </Link>
              <Link
                className={
                  window.location.pathname === "/Data"
                    ? "banLink activeBanLink"
                    : "banLink"
                }
                to="/Data"
              >
                Data
              </Link>
              <Link
                className={
                  window.location.pathname === "/Profile"
                    ? "banLink activeBanLink"
                    : "banLink"
                }
                to="/Profile"
              >
                Profile
              </Link>
            </div>
          </div>

          <Login
            user={this.props.user}
            changeUserState={this.props.changeUserState}
          />
        </div>
      </div>
    );
  }
}

export default BruceText;
