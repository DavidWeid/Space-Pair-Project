import React, { Component } from 'react';
import Highlighter from "./Hightlighter";

class CuriosityHighlights extends Component {
  state = {
    highlightArr: [
      
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