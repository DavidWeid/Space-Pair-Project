import React, { Component } from "react";
import "./profile.css";
import API from "../../utils/profileAPI.js";
import { Container, Row, Col } from "reactstrap";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import ProfileContainer from "../../components/ProfileContainer";

const urlPic =
  "https://images.pexels.com/photos/87080/space-shuttle-start-discovery-spaceport-87080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

class Profile extends Component {
  state = {
    hopeful: true,
    userInfo: {},
    postsCreated: [],
    postsSaved: [],
    postsLiked: [],
    postsDisplayed: []
  };

  componentWillMount() {
    if (this.props.user) {
      this.getUserInfo();
      this.getPostsUserCreated();
      this.getPostsUserSaved();
      this.getPostsUserLiked();
    }
  }

  // res.data = {commentIDs: [], likes: [], postIDs: [], roverImgArraySaved: [], roverImgArrayShared: [], sharedIDs: [], userImage: "", username: "", _id: ""}
  getUserInfo = () => {
    API.getUserInfo()
      .then(res => {
        console.log("User Info\n", res.data);
        this.setState({ userInfo: res.data });
      })
      .catch(err => console.log(err));
  };

  // Data that's "saved" OR "shared"
  /*res.data = [
    {commentIDs: [], createdAt: "", likes: [], roverCamera: "", roverEarthDate: "", roverImg: "", roverName: "", roverSol: "", savedUsers: [], shared: boolean, type: "roverPic", userID: "", username: "", _id: ""},
    {}, {}]
  */
  getPostsUserCreated = () => {
    API.getPostsUserCreated()
      .then(res => {
        console.log("Posts Created by User\n", res.data);
        this.setState({ postsCreated: res.data });
      })
      .catch(err => console.log(err));
  };

  // Data doesn't work
  // Post that's saved (from forum)
  getPostsUserSaved = () => {
    API.getPostsUserSaved()
      .then(res => {
        console.log("Posts Saved by User\n", res.data);
        this.setState({ postsSaved: res.data });
      })
      .catch(err => console.log(err));
  };

  // Post that's liked (from forum)
  getPostsUserLiked = () => {
    API.getPostsUserLiked()
      .then(res => {
        console.log("Posts Liked by User\n", res.data);
        this.setState({ postsLiked: res.data });
      })
      .catch(err => console.log(err));
  };

  showCreated = () => {
    this.setState({ postsDisplayed: this.state.postsCreated });
  };

  showSaved = () => {
    this.setState({ postsDisplayed: this.state.postsSaved });
  };

  showLiked = () => {
    this.setState({ postsDisplayed: this.state.postsLiked });
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
        <Container fluid className="profile-container">
          <Row className="profile-row">
            <Col md="3" xs="12" className="nav-column">
              <Row className="nav-box">
                <Col>
                  <p className="nav-box-header nav-box-item">
                    <span className="prof-num">
                      {this.state.userInfo.username}
                    </span>
                    's Profile
                  </p>
                  <p className="nav-box-item">
                    <span className="prof-num">
                      {this.state.postsCreated.length}
                    </span>{" "}
                    Posts Made
                  </p>
                  <p className="nav-box-item">
                    <span className="prof-num">
                      {this.state.postsSaved.length}
                    </span>{" "}
                    Posts Saved
                  </p>
                  <p className="nav-box-item">
                    <span className="prof-num">
                      {this.state.postsLiked.length}
                    </span>{" "}
                    Posts Liked
                  </p>
                  <div className="nav-btn-div">
                    <button className="nav-btn" onClick={this.showCreated}>
                      Yours
                    </button>
                    <button className="nav-btn" onClick={this.showSaved}>
                      Saved
                    </button>
                    <button className="nav-btn" onClick={this.showLiked}>
                      Liked
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="9" xs="12" className="content-column">
              <Row className="content-box">
                <Col>
                  <ProfileContainer
                    posts={this.state.postsDisplayed}
                    userInfo={this.state.userInfo}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
