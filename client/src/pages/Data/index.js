import React, { Component } from "react";
import "./data.css";
import API from "../../utils/API";
import FormRover from "../../components/FormRover";
import RoverPic from "../../components/RoverPic";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import RoverPicSelect from "../../components/RoverPicSelect";

const urlPic = "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
class Data extends Component {
  state = {
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
    yOffset: 0,
    more: false,
    modalImg: "",
    modalCamera: ""
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
      return this.setState({
        cameras_manifest: iSaidRightSol.cameras,
        total_day_photos: iSaidRightSol.total_photos,
        earthDay: iSaidRightSol.earth_date
      });
    }
    return this.setState({ cameras_manifest: [], total_day_photos: 0, earthDat: "" });
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

  handleSaveButton = (e) => {
    e.preventDefault();
    const dat = e.target.dataset
    const newSave = {
      type: dat.type,
      roverName: dat.rover_name,
      roverImg: dat.rover_img,
      roverCamera: dat.rover_camera,
      roverSol: dat.rover_sol,
      roverEarthDate: dat.rover_earth_date
    }

    // This sends in the info about the new post in from roverPic
    // then in the response, sends an update to the user for the postID
    API.savePost(newSave)
      .then(result => {
        console.log(result)
        if (result.data.user === false) {
          return console.log("You are not logged in an no post was saved");
        } else if (result.data.sent === true) {
          API.addPostIDtoUser(result.data.result._id)
            .then(resultAgain => console.log(resultAgain))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  }

  showModal = (e) => {
    e.preventDefault();
    this.setState({ more: !this.state.more, modalImg: e.target.dataset.img, modalCamera: e.target.dataset.camera })
  }

  getScrollHeight = (e) => {
    e.preventDefault();
    this.setState({ yOffset: window.pageYOffset })
  }

  render() {

    return <div className="dataPage">
      <BruceBanner backgroundImage={urlPic} />
      <BruceText
        user={this.props.user}
        changeUserState={this.props.changeUserState}
        bannerMessage="Rovers"
        
      />
      <div className="roverPicGrid">
        <div className="spaceTaker"></div>
        <div className="roverPicHolder">
          {this.state.photos.length > 0 ? (
            this.state.photos.map(photo =>
              <RoverPic
                key={photo.id}
                photo={photo}
                handleSaveButton={this.handleSaveButton}
                showModal={this.showModal}
              />
            )
          ) : (
              <div></div>
            )}
        </div>
      </div>
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
      {this.state.more ? (
        <div>
          <div className="backdrop"></div>
          <div className="picModal">
            <RoverPicSelect
              rover={this.state.rover}
              sol={this.state.sol}
              earth_date={this.state.earthDay}
              img={this.state.modalImg}
              camera={this.state.modalCamera}
              handleSaveButton={this.handleSaveButton}
              showModal={this.showModal}
            />
          </div>
        </div>
      ) : (
          <div></div>
        )}

    </div>
  }
}

export default Data;
