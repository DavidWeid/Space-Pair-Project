import React, { Component } from "react";
import "./profile.css"

import BruceBanner from "../../components/BruceBanner"
import BruceText from "../../components/BruceText"

import API from "../../utils/API";

const urlPic = "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

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
        <BruceText user={this.props.user} changeUserState={this.props.changeUserState} bannerMessage="Welcome to your Profile Page" />
      </div>
    );
  }
}

export default Profile;
