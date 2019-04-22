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
    API.roverSolPictures(rover, sol)
      .then(res => {
        console.log(res.data.photos);
      })
      .catch(err => console.log(err));
  }

  hitRoverSolCameraPictures(rover, sol, camera) {
    API.roverSolCameraPictures(rover, sol, camera).then(res => console.log(res.data)).catch(err => console.log(err));
  }

  selectRover = (e) => {
    e.preventDefault();
    const newRover = e.target.dataset.rover;
    this.setState({ rover: newRover, camera: "", sol: "" })
  }

  selectCamera = (e) => {
    e.preventDefault();
    const newCamera = e.target.dataset.camera;
    console.log(newCamera)
    this.setState({ camera: newCamera })
  }

  selectSolDay = (e) => {
    e.preventDefault();
    const newInput = e.target.value;
    console.log(newInput)
    this.setState({ sol: newInput })
  }

  getPhotos = (e) => {
    e.preventDefault();
    const rover = this.state.rover;
    const sol = this.state.sol;
    const camera = this.state.camera;
    if (camera === "all") {
      return this.hitRoverSolPictures(rover, sol);
    }
    return this.hitRoverSolCameraPictures(rover, sol, camera);
  }

  render() {
    return <div>
      <FormRover
        rover={this.state.rover}
        sol={this.state.sol}
        earthDay={this.state.earthDay}
        camera={this.state.camera}
        selectRover={this.selectRover}
        selectCamera={this.selectCamera}
        selectSolDay={this.selectSolDay}
        getPhotos={this.getPhotos}
      />
    </div>;
  }
}

export default Data;
