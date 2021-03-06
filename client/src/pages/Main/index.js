import React, { Component } from "react";
import "./landing2.css";
import { Link } from "react-router-dom";

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
            <div className="action-item">
              <i className="fas fa-rocket fa-sm landing-icon" />{" "}
              <span className="action-wrd">Discover</span> Mars
            </div>
            <div className="action-item">
              <i className="fab fa-leanpub fa-sm landing-icon" />{" "}
              <span className="action-wrd">Learn</span> the Rovers
            </div>
            <div className="action-item">
              <i className="fab fa-rocketchat fa-sm landing-icon" />{" "}
              <span className="action-wrd">Join</span> a Community
            </div>
          </div>
        </div>
        <div className="bg-right">
          <div className="enter-div">
            <Link to={`/roverinfo`} className="btn-secondary btn-start">
              <i className="fas fa-door-closed fa-4x" />
              <i className="fas fa-door-open fa-4x" />
            </Link>
            {/* <div className="enter-text">Let's Go</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
