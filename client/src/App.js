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
import RoverInfo from "./pages/RoverInfo";
import RoverFlipBook from "./pages/RoverFlipBook";
import Articles from "./pages/Articles";

// Components
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    user: false
  };

  componentWillMount() {
    API.userCheck()
      .then(result => console.log(result.data))
      .catch(err => console.log(err));
  }

  shouldComponentUpdate() {
    // this.sendToPage()
    return true;
  }

  changeUserState = user => {
    if (user) {
      console.log(user);
      return this.setState({ user: true });
    }
  };

  sendToPage() {
    console.log("updated");
    window.location.pathname = "/";
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Main
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
            <Route
              exact
              path="/RoverInfo"
              render={props => (
                <RoverInfo
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
            <Route
              exact
              path="/Forum"
              render={props => (
                <Forum
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
            <Route
              exact
              path="/Posts/:id"
              render={props => (
                <Post
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
            <Route
              exact
              path="/Data"
              render={props => (
                <Data
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
            <Route
              exact
              path="/RoverFlipBook"
              render={props => (
                <RoverFlipBook
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
            <Route
              exact
              path="/Articles"
              render={props => (
                <Articles
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
            <Route
              exact
              path="/Profile"
              render={props => (
                <Profile
                  {...props}
                  user={this.state.user}
                  changeUserState={this.changeUserState}
                />
              )}
            />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
