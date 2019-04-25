import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import API from "./utils/API";

// Pages
import Forum from "./pages/Forum";
import Data from "./pages/Data";
import Profile from "./pages/Profile";

// Components
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
  }

  getExamplePhotos() {
    API.exampleAPI()
      .then(res => this.setState({ photos: res.data.photos }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/Forum" component={Forum} />
          <Route exact path="/Data" component={Data} />
          <Route exact path="/Profile" component={Profile} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
