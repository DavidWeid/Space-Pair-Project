import React, { Component } from 'react';
import Highlighter from "./Hightlighter";

class SpiritHighlights extends Component {
  state = {
    highlightArr: [
      {
        sol: "12",
        description: "First Tracks On Mars",
        camera: "RHAZ",
        url: "https://mars.nasa.gov/mer/gallery/all/2/r/012/2R127428271EFF0300P1004R0M1-BR.JPG"
      },

      {
        sol: "45",
        description: "Desolate Landing Spot",
        camera: "NAVCAM",
        url: "https://mars.nasa.gov/mer/gallery/all/2/n/045/2N130366492EFF0900P1835L0M1-BR.JPG"
      },

      {
        sol: "489",
        description: "Martian Sunset",
        camera: "PANCAM",
        url: "https://mars.nasa.gov/mer/gallery/all/2/p/489/2P169794250EFFAAE0P2690L7M1-BR.JPG"
      },

      {
        sol: "582",
        description: "Husband Hill Summit",
        camera: "NAVCAM",
        url: "https://mars.nasa.gov/mer/gallery/all/2/n/582/2N178037159EFFAE00P0695L0M1-BR.JPG"
      },

      {
        sol: "781",
        description: "Broken Wheel",
        camera: "FHAZ",
        url: "https://mars.nasa.gov/mer/gallery/all/2/f/781/2F195698779EFFAQ15P1210R0M1-BR.JPG"
      },

      {
        sol: "1187",
        description: "Finding Silica in Broken Wheel Track",
        camera: "PANCAM",
        url: "https://mars.nasa.gov/mer/gallery/all/2/p/1187/2P231738563EFFATACP2533R1M1-BR.JPG"
      },

      {
        sol: "1892",
        description: "Stuck in the 'Sand Trap'",
        camera: "FHAZ",
        url: "https://mars.nasa.gov/mer/gallery/all/2/f/1893/2F294420550EFFB1CAP1211L0M1-BR.JPG"
      },

      {
        sol: "2176",
        description: "Last Panoramic Picture",
        camera: "PANCAM",
        url: "https://mars.nasa.gov/mer/gallery/all/2/p/2176/2P319629277EFFB27MP2398R2M5-BR.JPG"
      }
    ]

  }
  render() {
    return (
      <Highlighter
        highlightArr={this.state.highlightArr}
      />
    );
  }
}

export default SpiritHighlights;