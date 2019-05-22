import React, { Component } from "react";
import Highlighter from "./Hightlighter";

class OpportunityHighlights extends Component {
  state = {
    highlightArr: [
      {
        sol: "1",
        description: "Hole in One, Bedrock",
        camera: "NAVCAM",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/n/001/1N128285132EDN0000P1500R0M1-BR.JPG"
      },

      {
        sol: "14",
        description: "Hematite 'Blueberries'",
        camera: "MINI-TES",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/m/014/1M129430201EFF0300P2932M1M1-BR.JPG"
      },

      {
        sol: "48",
        description: "Travel distance to find evidence of water",
        camera: "RHAZ",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/r/048/1R132452977EFF0600P1312L0M1-BR.JPG"
      },

      {
        sol: "133",
        description: "Endurance Crater",
        camera: "NAVCAM",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/n/133/1N139999062EFF3140P1998L0M1-BR.JPG"
      },

      {
        sol: "180",
        description: "Self Portrait",
        camera: "FHAZ",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/f/180/1F144177858EFF3352P1214R0M1-BR.JPG"
      },

      {
        sol: "479",
        description: "Getting Un-Stuck",
        camera: "RHAZ",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/r/479/1R170716732EFF55PSP1314R0M1-BR.JPG"
      },

      {
        sol: "709",
        description: "Phobos Solar Eclipse",
        camera: "PANCAM",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/p/709/1P191143171ESF64KSP2669R8M1-BR.JPG"
      },

      {
        sol: "952",
        description: "Victoria Crater",
        camera: "NAVCAM",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/n/952/1N212701129EFF76EVP0657R0M1-BR.JPG"
      },

      {
        sol: "5111",
        description: "It's dark outside and my batteries are low",
        camera: "PANCAM",
        url:
          "https://mars.nasa.gov/mer/gallery/all/1/p/5111/1P581919922EFFD2FCP2682L8M1-BR.JPG"
      }
    ]
  };
  render() {
    return <Highlighter highlightArr={this.state.highlightArr} />;
  }
}

export default OpportunityHighlights;
