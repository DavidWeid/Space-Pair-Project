import React, { Component } from "react";
import { Form } from "reactstrap";
import "./style.css";
import Camera from "../Camera";
import { Link } from "react-router-dom";

class FormRover extends Component {
  state = {
    yScroll: 0,
    switchClass: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (
      window.pageYOffset >= 130 &&
      this.state.switchClass === false &&
      window.innerWidth < 1000
    ) {
      this.setState({ switchClass: true });
    } else if (window.pageYOffset < 130) {
      this.setState({ switchClass: false });
    }
  };

  render() {
    return (
      <div className={this.state.switchClass ? "formRoverScroll" : "formRover"}>
        <Form>
          <div className="roverSelectButtons">
            <button
              onClick={e => {
                this.props.selectRover(e);
              }}
              data-rover="spirit"
              className={
                this.props.rover === "spirit"
                  ? "activeRover roverBtn"
                  : "roverBtn"
              }
            >
              Spirit
            </button>
            <button
              onClick={e => {
                this.props.selectRover(e);
              }}
              data-rover="opportunity"
              className={
                this.props.rover === "opportunity"
                  ? "activeRover roverBtn"
                  : "roverBtn"
              }
            >
              Opportunity
            </button>
            <button
              onClick={e => {
                this.props.selectRover(e);
              }}
              data-rover="curiosity"
              className={
                this.props.rover === "curiosity"
                  ? "activeRover roverBtn"
                  : "roverBtn"
              }
            >
              Curiosity
            </button>
          </div>

          {this.props.show_sol ? (
            <div className="solGroup">
              <label className="maxSol">Max-Sol: {this.props.max_sol}</label>
              <label>Sol</label>
              <input
                type="number"
                className="solInput"
                onChange={e => this.props.selectSolDay(e)}
                value={this.props.sol}
              />
            </div>
          ) : (
            <div />
          )}

          <Camera
            camera={this.props.camera}
            rover={this.props.rover}
            sol={this.props.sol}
            cameras_manifest={this.props.cameras_manifest}
            selectCamera={this.props.selectCamera}
            total_day_photos={this.props.total_day_photos}
            show_sol={this.props.show_sol}
          />

          <div className="bottomButtons">
            <button
              className="bottomBtn"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <Link className="" to="/articles">
                Articles<span className="hideMobile"> Page</span>
              </Link>
            </button>

            <button
              className={this.props.flip ? "bottomBtn flipped " : "bottomBtn"}
              onClick={e => this.props.handleFlipChange(e)}
            >
              Flip Book
            </button>

            <button
              className={
                this.props.camera ? "bottomBtn ready" : "bottomBtn inactive"
              }
              onClick={e => this.props.getPhotos(e)}
              data-rover={this.props.rover}
              data-sol={this.props.sol}
              data-camera={this.props.camera}
            >
              Search
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

export default FormRover;
