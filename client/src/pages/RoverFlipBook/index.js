import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class RoverFlipBook extends Component {
  state = {
    working: true,
    photos: []
  }

  componentWillMount() {
    this.testPictures();
  }

  testPictures = () => {
    API.roverSolCameraPictures("opportunity", "133", "FHAZ")
      .then(result => {
        console.log(result.data.photos);
        const setter = result.data.photos;
        this.setState({ photos: setter })
      })
      .catch(err => console.log(err));
  }

  testing = (e) => {
    console.log(this.state.photos)
  }

  loadImages = () => {
    
  }

  render() {


    return (
      <div>
        <button onClick={this.loadImages}>Load</button>
        {this.state.photos.length > 0 ? <div>
          <canvas id="canvas" />
        </div> : <h2>Not here</h2>}
      </div>
    )
  }
}

export default RoverFlipBook;



