import React, { Component } from "react";
import "./landing.css";

class Main extends Component {
  state = {
    key: "value"
  };

  componentDidMount() {}

  render() {
    return (
      <div className="bg">
        <div className="bg-left">
          <div className="action-div">
            <item className="action-item">
              <i className="fas fa-rocket fa-sm landing-icon" />
              {" "}
              <span className="action-wrd">Discover</span> Mars
            </item>
            <item className="action-item">
              <i className="fab fa-leanpub fa-sm landing-icon" />
              {" "}
              <span className="action-wrd">Learn</span> the Rovers
            </item>
            <item className="action-item">
              <i className="fab fa-rocketchat fa-sm landing-icon"></i>
              {" "}
              <span className="action-wrd">Join</span> a Community
            </item>
          </div>
        </div>
        <div className="bg-right">
          <div className="enter-div">
            <button className="btn btn-secondary btn-start">
              <i className="fas fa-door-closed fa-4x"></i>
              <i className="fas fa-door-open fa-4x"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;