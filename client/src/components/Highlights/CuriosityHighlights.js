import React, { Component } from 'react';
import Highlighter from "./Hightlighter";

class CuriosityHighlights extends Component {
  state = {
    highlightArr: [
      {
        sol: "2",
        description: "Curiosity Landing Site, Gale Crater",
        camera: "NAVCAM",
        url: "https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00002/opgs/edr/ncam/NLA_397681339EDR_F0020000AUT_04096M_.JPG"
      },

      {
        sol: '182',
        description: "Digging Holes",
        camera: "FHAZ",
        url: "https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00182/opgs/edr/fcam/FLA_413639557EDR_F0060000FHAZ00316M_.JPG"
      },

      {
        sol: "389",
        description: "Phobos Solar Eclipse",
        camera: "MAST",
        url: "https://mars.jpl.nasa.gov/msl-raw-images/msss/00369/mcam/0369MR1502000769L1_DXXX.jpg"
      },

      {
        sol: "640",
        description: "Iron Meteorite",
        camera: "MAST",
        url: "https://mars.jpl.nasa.gov/msl-raw-images/msss/00640/mcam/0640MR0027180200401839E02_DXXX.jpg"
      },

      {
        sol: "1099",
        description: "Mount Sharp",
        camera: "MAST",
        url: "https://mars.jpl.nasa.gov/msl-raw-images/msss/01099/mcam/1099MR0048620000600827C00_DXXX.jpg"
      },

      {
        sol: "2125",
        description: "Planet-wide Dust Storm",
        camera: "NAVCAM",
        url: "https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02125/opgs/edr/ncam/NRB_586124435EDR_M0720386NCAM00580M_.JPG"
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

export default CuriosityHighlights;