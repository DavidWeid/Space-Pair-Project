import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class RoverFlipBook extends Component {
  state = {
    working: true,
    photos: [

    ],
  }

  componentDidMount() {
    this.testPictures()
  }

  testPictures = () => {
    API.roverSolCameraPictures("curiosity", "504", "navcam")
      .then(result => {
        const term = result.data.photos;
        console.log(term);
        console.log(this);
        term.forEach(one => {
          this.setState(prevState => ({
            photos: [...prevState.photos, one]
          }))
        })

      })
      .catch(err => console.log(err));
  }

  testing = (e) => {
    console.log(this.state.photos)
  }

  rollImages = () => {
    const pics = [].slice.call(document.querySelectorAll(".newPic"));
    const sortedPics = pics.sort(function(a, b) {
      return a.id - b.id;
    })
    console.log(sortedPics);
    console.log(pics);
    let pos = -1;
    const timer = setInterval(function() {
      if (pos >= pics.length - 1) {
        clearInterval(timer);
        console.log("done");
      } else {
        pos++;
        sortedPics.forEach(one => one.style.zIndex = "1");
        console.log(sortedPics[pos]);
        sortedPics[pos].style.zIndex = "25";
      }
    }, 175)
  }

  render() {
    let loaded = 0;
    let pictures = [];

    return (
      <div className="centering">
        
        <button onClick={this.rollImages}>Roll</button>
        {this.state.photos.length > 0 ? <div id="outputArea">

          <h1>Loading</h1>
          {this.state.photos.forEach((photo, i) => {
            const img = new Image();
            img.alt = "new picture"
            img.className = "newPic";
            img.id = photo.id;
            img.onload = () => {
              loaded++;
              if (loaded === this.state.photos.length) {
                console.log("all loaded");
                console.log(pictures);
                // pictures.forEach(one => outputArea.append(one));
                const outputArea = document.getElementById("outputArea");
                console.log(outputArea);
                outputArea.innerHTML = "";
                pictures.forEach(one => outputArea.append(one))
                const newDiv = document.createElement("div");
                newDiv.className = "blocker";
                outputArea.append(newDiv)
              } else {
                console.log("loaded " + i);
                pictures.push(img);

              }
            }
            // img.src = this.state.photos[i];
            img.src = photo.img_src;
            // return img;
          }
          )}
        </div> : <h2>No Pics</h2>}
      </div>
    )
  }
}

export default RoverFlipBook;



