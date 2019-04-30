import React, { Component } from "react";
import "./data.css";
import API from "../../utils/API";
import FormRover from "../../components/FormRover";
import RoverPic from "../../components/RoverPic";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";

const urlPic = "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"


class Data extends Component {
  state = {
    key: "value",
    rover: "",
    sol: "",
    earthDay: "",
    camera: "",
    photos: [],
    picture_manifest: [],
    cameras_manifest: [],
    max_sol: "",
    total_pictures: "",
    total_day_photos: 0,
    show_sol: false,
    yOffset: 0
  };


  // Get pictures from all cameras given rover and sol
  hitRoverSolPictures = (rover, sol) => {
    API.roverSolPictures(rover, sol)
      .then(res => {
        console.log(res.data.photos);
        this.setState({ photos: res.data.photos })
      })
      .catch(err => console.log(err));
  }

  // Get pictures from a specfic camera for a rover and sol
  hitRoverSolCameraPictures = (rover, sol, camera) => {
    API.roverSolCameraPictures(rover, sol, camera)
      .then(res => {
        console.log(res.data.photos)
        this.setState({ photos: res.data.photos })
      })
      .catch(err => console.log(err));
  }

  // Get rover manifest from API when user selects a rover
  // Used to help display what cameras are available to get photos from
  hitRoverManifest = rover => {
    API.getRoverManifest(rover)
      .then(result => {
        console.log(result.data.photo_manifest);
        const roverData = result.data.photo_manifest;
        this.setState({
          picture_manifest: roverData.photos,
          max_sol: roverData.max_sol,
          total_pictures: roverData.total_pictures,
          show_sol: true
        })
      })
      .catch(err => console.log(err))
  }

  // Input from buttons in FormRover to select a rover
  selectRover = e => {
    e.preventDefault();
    const newRover = e.target.dataset.rover;
    this.setState({
      rover: newRover,
      camera: "",
      sol: "",
      cameras_manifest: [],
      total_day_photos: 0,
      show_sol: false
    })
    this.hitRoverManifest(newRover);
  }

  // Input from FormRover
  selectSolDay = e => {
    e.preventDefault();
    const newInput = e.target.value;
    this.setState({ sol: newInput, camera: "" })
    this.getCameraManifest(newInput)
  }

  // From the photo_manifest, gets a list of cameras that have photos for that sol
  // Sends to Camera Component in FormRover to display buttons
  getCameraManifest = sol => {
    console.log(typeof sol, sol)
    const rightSol = this.state.picture_manifest.filter(each => each.sol.toString() === sol);
    const iSaidRightSol = rightSol[0];
    if (iSaidRightSol) {
      console.log(iSaidRightSol);
      return this.setState({ cameras_manifest: iSaidRightSol.cameras, total_day_photos: iSaidRightSol.total_photos });
    }
    return this.setState({ cameras_manifest: [], total_day_photos: 0 });
  }

  // Input form FormRover/Cameras Component
  // Saves camera choice to state
  selectCamera = e => {
    e.preventDefault();
    const newCamera = e.target.dataset.camera;
    console.log(newCamera)
    this.setState({ camera: newCamera })
  }

  // Makes the API call to get photos based on rover, sol, and camera selected
  getPhotos = e => {
    e.preventDefault();
    window.scrollTo(0, 0)
    const rover = this.state.rover;
    const sol = this.state.sol;
    const camera = this.state.camera;
    if (camera === "all") {
      return this.hitRoverSolPictures(rover, sol);
    }
    return this.hitRoverSolCameraPictures(rover, sol, camera);
  }

  scrollPos = e => {
    console.log(e)
  }
  render() {
    return <div className="dataPage" onScroll={(e) => this.scrollPos(e)}>
      <BruceBanner backgroundImage={urlPic} />
      <BruceText bannerMessage="Welcome to the Rover Page" />
      <div className="roverPicGrid">
        <div className="spaceTaker"></div>
        <div className="roverPicHolder">
          {this.state.photos.length > 0 ? (
            this.state.photos.map(photo =>
              <RoverPic key={photo.id} photo={photo} />
            )
          ) : (
              <div></div>
            )}
        </div>
      </div> */}
      <FormRover
        rover={this.state.rover}
        sol={this.state.sol}
        earthDay={this.state.earthDay}
        camera={this.state.camera}
        cameras_manifest={this.state.cameras_manifest}
        selectRover={this.selectRover}
        selectCamera={this.selectCamera}
        selectSolDay={this.selectSolDay}
        getPhotos={this.getPhotos}
        total_day_photos={this.state.total_day_photos}
        show_sol={this.state.show_sol}
      />

    </div>
  }
}

export default Data;
