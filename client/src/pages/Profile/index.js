import React, { Component } from "react";
import "./profile.css";

import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";

import API from "../../utils/profileAPI.js";

const urlPic =
  "https://images.pexels.com/photos/87080/space-shuttle-start-discovery-spaceport-87080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

class Profile extends Component {

  state = {
    hopeful: true,
    userInfo: {},
    postsCreated: [],
    postsSaved: [],
    postsLiked: []
  }

  componentWillMount() {
    if (this.props.user) {
      this.getUserInfo();
      this.getPostsUserCreated();
      this.getPostsUserSaved();
      this.getPostsUserLiked();
    }
  }

  getUserInfo = () => {
    API.getUserInfo()
      .then(res => console.log("User Info\n", res.data))
      .catch(err => console.log(err));
  };

  getPostsUserCreated = () => {
    API.getPostsUserCreated()
      .then(res => console.log("Posts Created by User\n", res.data))
      .catch(err => console.log(err));
  };

  getPostsUserSaved = () => {
    API.getPostsUserSaved()
      .then(res => console.log("Posts Saved by User\n", res.data))
      .catch(err => console.log(err));
  };

  getPostsUserLiked = () => {
    API.getPostsUserLiked()
      .then(res => console.log("Posts Liked by User\n", res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="profile-page">
        <BruceBanner backgroundImage={urlPic} />
        <BruceText
          user={this.props.user}
          changeUserState={this.props.changeUserState}
          bannerMessage="Profile"
        />
      </div>
    );
  }
}

export default Profile;
