import React, { Component } from "react";
import API from "../../utils/API";
import Banner from "../../components/Banner";
import SortBar from "../../components/SortBar";

class Forum extends Component {
  state = {
    key: "value"
  };

  componentDidMount() {}

  handleSortBtn = e => {
    const sortby = e.target.value;
    console.log("Sort Clicked\n", sortby);
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Banner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          Welcome to the Space Forum
        </Banner>
        <SortBar sortOne="top" sortTwo="popular" handleSortBtn={this.handleSortBtn} />
      </div>
    );
  }
}

export default Forum;
