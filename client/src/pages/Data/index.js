import React, { Component } from "react";
import API from "../../utils/API";
import FormRover from "../../components/FormRover"

class Data extends Component {
  state = {
    key: "value",
    rover: "",
    sol: "",
    earthDay: "",
    camera: "",
    photos: []
  };

  componentDidMount() {
    // this.hitExampleAPI();
    // this.hitRoverSolPictures("Curiosity", 45);
    // this.hitRoverSolCameraPictures();
  }

  hitExampleAPI() {
    API.exampleAPI().then(res => console.log(res.data)).catch(err => console.log(err));
  }

  hitRoverSolPictures(rover, sol) {
    API.roverSolPictures(rover, sol).then(res => console.log(res.data)).catch(err => console.log(err));
  }

  hitRoverSolCameraPictures(rover, sol, camera) {
    API.roverSolCameraPictures().then(res => console.log(res.data)).catch(err => console.log(err));
  }

  selectRover = (e) => {
    e.preventDefault();
    const newRover = e.target.dataset.rover;
    this.setState({ rover: newRover })
  }

  render() {
    return <div>
      <FormRover
        rover={this.state.rover}
        sol={this.state.sol}
        earthDay={this.state.earthDay}
        camera={this.state.camera}
        selectRover={this.selectRover}
      />
    </div>;
  }
}

export default Data;