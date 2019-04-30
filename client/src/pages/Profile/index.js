import React, { Component } from "react";
// import API from "../../utils/API";
import "./profile.css"

import Login from "../../components/Login";
import BruceBanner from "../../components/BruceBanner"
import BruceText from "../../components/BruceText"

import API from "../../utils/API";

const urlPic = "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

class Profile extends Component {
  
  componentWillMount() {
    API.userCheck()
      .then(result => console.log(result.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="padd">
        <BruceBanner backgroundImage={urlPic} />
        <BruceText bannerMessage="Welcome to your Profile Page" />
        <Login user={this.props.user} changeUserState={this.props.changeUserState} />
      </div>
    );
  }
}

export default Profile;
