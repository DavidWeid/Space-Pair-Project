import React, { Component } from "react";
import API from "../../utils/API";

class Data extends Component {
  state = {
    key: "value"
  };

  componentDidMount() {
    this.hitExampleAPI();
    this.hitRoverSolPictures("Curiosity", 45);
    this.hitRoverSolCameraPictures();
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

  render() {
    return <div>Data Page</div>;
  }
}

export default Data;
