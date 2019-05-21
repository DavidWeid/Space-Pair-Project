import React, { Component } from 'react';
import Highlighter from "./Hightlighter";

class OpportunityHighlights extends Component {
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

export default OpportunityHighlights;