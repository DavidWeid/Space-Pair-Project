import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import API from "./utils/API";

// Pages
import Main from "./pages/Main";

// Components
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import ExampleCall from "./components/ExampleCall"

class App extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    // Just for showing some of the photos we expect to get back
    // Will not use for real version
    this.getExamplePhotos()
  }

  getExamplePhotos() {
    API.exampleAPI()
    .then(res => this.setState({photos: res.data.photos}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        {/* <Navbar /> */}
        {/* <Wrapper> */}
          {/* <Route exact path="/" component={Main} /> */}
          <ExampleCall photos={this.state.photos} />
        {/* </Wrapper> */}
      </Router>
    );
  }
}

export default App;
