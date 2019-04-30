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
    photos: [],
    user: false
  };

  componentWillMount() {
    API.userCheck()
      .then(result => console.log(result.data))
      .catch(err => console.log(err))
  }

  shouldComponentUpdate() {
    // this.sendToPage()
    return true
  }

  changeUserState = (user) => {
    if (user) {
      return this.setState({ user: true })
    }
    return this.setState({ user: false })
  }

  sendToPage() {
    console.log("updated");
    window.location.pathname = "/"
  }

  // getExamplePhotos() {
  //   API.exampleAPI()
  //     .then(res => this.setState({ photos: res.data.photos }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
            <Route exact path="/" render={(props) =>
              <Main {...props} user={this.state.user} changeUserState={this.changeUserState} />}
            />
            <Route exact path="/Forum" render={(props) =>
              <Forum {...props} user={this.state.user} changeUserState={this.changeUserState} />}
            />
            <Route exact path="/Data" render={(props) =>
              <Data {...props} user={this.state.user} changeUserState={this.changeUserState} />}
            />
            <Route exact path="/Profile" render={(props) =>
              <Profile {...props} user={this.state.user} changeUserState={this.changeUserState} />}
            />
            <Route exact path="/Posts/:id" render={(props) =>
              <Post {...props} user={this.state.user} changeUserState={this.changeUserState} />}
            />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
