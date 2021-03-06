import React, { Component } from "react";
import "./data.css";
import API from "../../utils/API";
import FormRover from "../../components/FormRover";
import RoverPic from "../../components/RoverPic";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import RoverPicSelect from "../../components/RoverPicSelect";

const urlPic =
  "https://fsmedia.imgix.net/b0/51/61/91/ac74/4bcc/82c6/7753a571b8fc/a-simple-model-of-mars-using-mental-ray-shaders-and-slight-displacement-view-is-looking-towards-the.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=900&w=1200";

class Data extends Component {
  state = {
    loggedUser: false,
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
    modalCamera: "",
    share: false,
    userSavedArray: [],
    userSharedArray: [],
    flip: false,
    loaded: false
  };

  componentDidMount() {
    this.getUserPhotoArray();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Get pictures from all cameras given rover and sol
  hitRoverSolPictures = (rover, sol) => {
    API.roverSolPictures(rover, sol)
      .then(res => {
        console.log(res.data.photos);
        this.setState({ photos: res.data.photos });
      })
      .catch(err => console.log(err));
  };

  // Get pictures from a specfic camera for a rover and sol
  hitRoverSolCameraPictures = (rover, sol, camera) => {
    API.roverSolCameraPictures(rover, sol, camera)
      .then(res => {
        console.log(res.data.photos);
        this.setState({ photos: res.data.photos });
      })
      .catch(err => console.log(err));
  };

  // Get rover manifest from API when user selects a rover
  // Used to help display what cameras are available to get photos from
  hitRoverManifest = rover => {
    this.getUserPhotoArray();
    API.getRoverManifest(rover)
      .then(result => {
        console.log(result.data.photo_manifest);
        const roverData = result.data.photo_manifest;
        this.setState({
          picture_manifest: roverData.photos,
          max_sol: roverData.max_sol,
          total_pictures: roverData.total_pictures,
          show_sol: true
        });
      })
      .catch(err => console.log(err));
  };

  // Input from buttons in FormRover to select a rover
  selectRover = e => {
    e.preventDefault();
    clearInterval(this.interval);
    const newRover = e.target.dataset.rover;
    this.setState({
      rover: newRover,
      camera: "",
      sol: "",
      cameras_manifest: [],
      total_day_photos: 0,
      show_sol: false,
      photos: [],
      flip: false
    });
    this.hitRoverManifest(newRover);
  };

  // Input from FormRover
  selectSolDay = e => {
    e.preventDefault();
    clearInterval(this.interval);
    const newInput = e.target.value;
    this.setState({ sol: newInput, camera: "", flip: false, photos: [] });
    this.getCameraManifest(newInput);
  };

  // From the photo_manifest, gets a list of cameras that have photos for that sol
  // Sends to Camera Component in FormRover to display buttons
  getCameraManifest = sol => {
    console.log(typeof sol, sol);
    const rightSol = this.state.picture_manifest.filter(
      each => each.sol.toString() === sol
    );
    const iSaidRightSol = rightSol[0];
    if (iSaidRightSol) {
      console.log(iSaidRightSol);
      return this.setState({
        cameras_manifest: iSaidRightSol.cameras,
        total_day_photos: iSaidRightSol.total_photos,
        earthDay: iSaidRightSol.earth_date
      });
    }
    return this.setState({
      cameras_manifest: [],
      total_day_photos: 0,
      earthDat: ""
    });
  };

  // Input form FormRover/Cameras Component
  // Saves camera choice to state
  selectCamera = e => {
    clearInterval(this.interval);
    e.preventDefault();
    const newCamera = e.target.dataset.camera;
    console.log(newCamera);
    this.setState({ camera: newCamera, photos: [], flip: false });
  };

  // Makes the API call to get photos based on rover, sol, and camera selected
  getPhotos = e => {
    e.preventDefault();
    clearInterval(this.interval);
    if (this.state.camera) {
      window.scrollTo(0, 0);
      const rover = this.state.rover;
      const sol = this.state.sol;
      const camera = this.state.camera;
      if (camera === "all") {
        return this.hitRoverSolPictures(rover, sol);
      }
      return this.hitRoverSolCameraPictures(rover, sol, camera);
    }
  };

  getUserPhotoArray = () => {
    console.log("grabbing user photo array after component update");
    API.grabRoverImgArray()
      .then(result => {
        console.log(result);
        if (result.data.user) {
          console.log(result.data.roverImgArraySaved);
          console.log(result.data.roverImgArrayShared);
          this.setState({
            userSavedArray: result.data.roverImgArraySaved,
            userSharedArray: result.data.roverImgArrayShared
          });
        } else {
          console.log("not a user?");
        }
      })
      .catch(err => console.log(err));
  };

  savePostAPI = newSave => {
    API.savePost(newSave)
      .then(result => {
        if (result.data.user === false) {
          return console.log("You are not logged in an no post was saved");
        } else if (result.data.result.shared === false) {
          API.addPostIDAndImgtoUserSaved(
            result.data.result._id,
            result.data.result.roverImg
          )
            .then(resultAgain => {
              console.log(resultAgain);
              this.setState({ shared: false, more: false });
              this.getUserPhotoArray();
            })
            .catch(err => console.log(err));
          console.log(result);
        } else {
          API.addPostIDAndImgtoUserSavedShared(
            result.data.result._id,
            result.data.result.roverImg
          )
            .then(resultAgain => {
              console.log(resultAgain);
              this.setState({ shared: false, more: false });
              this.getUserPhotoArray();
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  handleSaveButton = e => {
    e.preventDefault();
    // Just save it to the DB
    const dat = e.target.dataset;
    const newSave = {
      type: "roverPic",
      shared: false,
      roverName: dat.name,
      roverImg: dat.img,
      roverCamera: dat.camera,
      roverSol: dat.sol,
      roverEarthDate: dat.earth_date
    };
    // This sends in the info about the new post in from roverPic
    // then in the response, sends an update to the user for the postID
    this.savePostAPI(newSave);
  };

  handleShareSave = e => {
    e.preventDefault();
    const dat = e.target.dataset;
    const filteredArray = this.state.userSavedArray.filter(
      each => each === dat.img
    );
    console.log(filteredArray);
    if (filteredArray.length < 1) {
      const newSave = {
        type: "roverPic",
        shared: true,
        userComment: this.state.userComment,
        roverName: dat.name,
        roverImg: dat.img,
        roverCamera: dat.camera,
        roverSol: dat.sol,
        roverEarthDate: dat.earth_date
      };
      this.savePostAPI(newSave);
    } else {
      this.updateShared(dat.img, this.state.userComment, true);
    }
  };

  updateShared(roverImg, userComment, add) {
    // Make API call to find and update post that has user id and roverimg to shared === true
    // Add img to userSharedArray
    console.log("updateShared called");
    API.updatePostShared(roverImg, userComment, add)
      .then(result => {
        console.log(result.data.roverImg + " result.data.roverImg");
        API.addImgtoUserShared(result.data.roverImg)
          .then(result => {
            console.log(result);
            this.getUserPhotoArray();
            this.setState({ shared: false, more: false });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  handleShareButton = e => {
    e.preventDefault();
    console.log("share clicked");
    // Want to open more info modal, then save post w/ comment and share = true
    this.setState({
      share: true,
      more: true,
      modalImg: e.target.dataset.img,
      modalCamera: e.target.dataset.camera
    });
  };

  unshareButton = e => {
    e.preventDefault();
    const roverImg = e.target.dataset.img;
    console.log(roverImg);
    API.updatePostShared(roverImg, "useless string", false)
      .then(result => {
        console.log(result);
        API.removeImgfromUserShared(result.data.roverImg)
          .then(change => {
            console.log(change);
            this.getUserPhotoArray();
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  unsaveButton = e => {
    e.preventDefault();
    const roverImg = e.target.dataset.img;
    console.log(roverImg);
    API.deletePostbyImg(roverImg)
      .then(result => {
        console.log(result);
        const promiseArray = [
          API.removeImgfromUserSaved(result.data.roverImg, result.data._id),
          API.removePostFromUser(result.data._id)
        ];

        Promise.all(promiseArray)
          .then(prores => {
            console.log(prores);
            this.getUserPhotoArray();
          })
          .catch(proerr => console.log(proerr));
      })
      .catch(err => console.log(err));
  };

  handleCommentChange = e => {
    e.preventDefault();
    this.setState({ userComment: e.target.value });
  };

  showModal = e => {
    e.preventDefault();
    this.setState({
      more: !this.state.more,
      modalImg: e.target.dataset.img,
      modalCamera: e.target.dataset.camera,
      share: false
    });
  };

  getScrollHeight = e => {
    e.preventDefault();
    this.setState({ yOffset: window.pageYOffset });
  };

  handleFlipChange = e => {
    e.preventDefault();
    this.setState({ flip: !this.state.flip });
  };

  rollImages = () => {
    clearInterval(this.interval);
    this.interval = 0;
    const pics = [].slice.call(document.querySelectorAll(".newPic"));
    const sortedPics = pics.sort(function(a, b) {
      return a.id - b.id;
    });
    console.log(sortedPics);
    console.log(pics);
    let pos = -1;
    this.interval = setInterval(() => {
      if (pos >= sortedPics.length - 1) {
        console.log("done and cleared interval " + pos);
        clearInterval(this.interval);
        this.stopInterval();
      } else {
        pos++;
        sortedPics.forEach(one => (one.style.zIndex = "1"));
        console.log(sortedPics[pos]);
        sortedPics[pos].style.zIndex = "25";
      }
    }, 175);
  };

  interval = 0;

  stopInterval = e => {
    if (e) {
      e.preventDefault();
    }
    clearInterval(this.interval);
  };

  setLoaded = e => {
    this.setState({ loaded: true });
  };

  render() {
    let loaded = 0;
    let pictures = [];

    return (
      <div className="dataPage">
        <BruceBanner backgroundImage={urlPic} />
        <BruceText
          user={this.props.user}
          changeUserState={this.props.changeUserState}
          bannerMessage="Data"
        />

        <div>
          {this.state.photos.length > 0 ? (
            <div className="roverPicGrid">
              <div className="spaceTaker" />
              {!this.state.flip ? (
                <div className="roverPicHolder">
                  {this.state.photos.map(photo => (
                    <RoverPic
                      key={photo.id}
                      photo={photo}
                      handleShareButton={this.handleShareButton}
                      handleSaveButton={this.handleSaveButton}
                      showModal={this.showModal}
                      userSavedArray={this.state.userSavedArray}
                      userSharedArray={this.state.userSharedArray}
                      unshareButton={this.unshareButton}
                      unsaveButton={this.unsaveButton}
                    />
                  ))}
                </div>
              ) : (
                <div className="flipHolder">
                  <div id="outputArea">
                    <div className="flipPicsPlace">
                      {/* <div class="base"></div> */}
                      <div className="spinner" />
                    </div>

                    {this.state.photos.forEach((photo, i) => {
                      const img = new Image();
                      img.alt = "new picture";
                      img.className = "newPic";
                      img.id = photo.id;
                      img.onload = () => {
                        loaded++;
                        console.log(loaded, img.id);
                        if (loaded >= this.state.photos.length) {
                          pictures.push(img);
                          console.log("all loaded");
                          console.log(pictures);
                          const outputArea = document.getElementById(
                            "outputArea"
                          );
                          console.log(outputArea);
                          outputArea.innerHTML = "";
                          const flipPicsPlace = document.createElement("div");
                          flipPicsPlace.className = "flipPicsPlace";
                          pictures.forEach(one => flipPicsPlace.append(one));
                          const newDiv = document.createElement("div");
                          newDiv.className = "blocker";
                          flipPicsPlace.append(newDiv);
                          outputArea.append(flipPicsPlace);
                          const rollBtn = document.createElement("button");
                          rollBtn.innerHTML = "<i class='fas fa-play'></i>";
                          rollBtn.className = "flipBtn";
                          rollBtn.addEventListener("click", this.rollImages);
                          const stopBtn = document.createElement("button");
                          stopBtn.innerHTML = '<i class="fas fa-stop"></i>';
                          stopBtn.className = "flipBtn";
                          stopBtn.addEventListener("click", this.stopInterval);
                          const buttonDiv = document.createElement("div");
                          buttonDiv.className = "flipButtons";
                          buttonDiv.append(rollBtn, stopBtn);
                          outputArea.append(buttonDiv);
                        } else {
                          console.log("loaded " + i);
                          pictures.push(img);
                        }
                      };
                      img.src = photo.img_src;
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
        <FormRover
          rover={this.state.rover}
          sol={this.state.sol}
          max_sol={this.state.max_sol}
          earthDay={this.state.earthDay}
          camera={this.state.camera}
          cameras_manifest={this.state.cameras_manifest}
          selectRover={this.selectRover}
          selectCamera={this.selectCamera}
          selectSolDay={this.selectSolDay}
          getPhotos={this.getPhotos}
          total_day_photos={this.state.total_day_photos}
          show_sol={this.state.show_sol}
          handleFlipChange={this.handleFlipChange}
          flip={this.state.flip}
        />
        {this.state.more ? (
          <div>
            <div className="backdrop" />
            <RoverPicSelect
              share={this.state.share}
              rover={this.state.rover}
              sol={this.state.sol}
              earth_date={this.state.earthDay}
              img={this.state.modalImg}
              camera={this.state.modalCamera}
              handleSaveButton={this.handleSaveButton}
              handleShareButton={this.handleShareButton}
              showModal={this.showModal}
              handleCommentChange={this.handleCommentChange}
              handleShareSave={this.handleShareSave}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Data;
