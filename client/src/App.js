import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Main} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
