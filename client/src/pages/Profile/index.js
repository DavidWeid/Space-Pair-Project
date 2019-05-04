import React, { Component } from "react";
import "./profile.css"

import BruceBanner from "../../components/BruceBanner"
import BruceText from "../../components/BruceText"

import API from "../../utils/API";

const urlPic = "https://images.pexels.com/photos/87080/space-shuttle-start-discovery-spaceport-87080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

class Profile extends Component {

  componentWillMount() {
    if (this.props.user) {
      API.getAllPostsFromUser()
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

  }

  render() {
    return (
      <div className="padd">
        <BruceBanner backgroundImage={urlPic} />
        <BruceText user={this.props.user} changeUserState={this.props.changeUserState} bannerMessage="Profile" />
      </div>
    );
  }
}

export default Profile;
