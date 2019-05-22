import React, { Component } from "react";
import "./style.css";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import RoverHistory from "../../components/RoverHistory";
import RoverJourney from "../../components/RoverJourney";

class RoverInfo extends Component {
  state = {
    history: true
  };

  changeDisplay = e => {
    e.preventDefault();
    this.setState({ history: !this.state.history });
  };

  render() {
    const url =
      "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    return (
      <div style={{ height: "100%" }}>
        <BruceBanner backgroundImage={url} />
        <BruceText
          bannerMessage="Home"
          changeUserState={this.props.changeUserState}
        />
        <div className="backWhite">
          <div className="toggleBar">
            <div
              className={this.state.history ? "toggle toggleActive" : "toggle"}
              onClick={!this.state.history ? this.changeDisplay : null}
            >
              Missions
            </div>
            <div
              className={!this.state.history ? "toggle toggleActive" : "toggle"}
              onClick={this.state.history ? this.changeDisplay : null}
            >
              Machines
            </div>
          </div>
        </div>
        {this.state.history ? <RoverHistory /> : <RoverJourney />}
      </div>
    );
  }
}

export default RoverInfo;
