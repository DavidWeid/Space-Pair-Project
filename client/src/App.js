import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import API from "./utils/API";

// Pages
import Main from "./pages/Main";
import Forum from "./pages/Forum";
import Data from "./pages/Data";
import Profile from "./pages/Profile";
import Post from "./pages/Post";

// Components
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    photos: []
  };

  componentDidMount() {}

  getExamplePhotos() {
    API.exampleAPI()
      .then(res => this.setState({ photos: res.data.photos }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Forum" component={Forum} />
            <Route exact path="/Data" component={Data} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Posts/:id" component={Post} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
