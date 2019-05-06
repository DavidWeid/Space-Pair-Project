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
              <span className="action-wrd">Discover</span> Mars
            </item>
            <item className="action-item">
              <span className="action-wrd">Learn</span> the Rovers
            </item>
            <item className="action-item">
              <span className="action-wrd">Join</span> a Community
            </item>
          </div>
        </div>
        <div className="bg-right">Space</div>
      </div>
    );
  }
}

export default Main;
