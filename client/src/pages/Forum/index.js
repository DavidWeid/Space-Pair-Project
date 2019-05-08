import React, { Component } from "react";
import "./forum.css";
import API from "../../utils/API";
import { Container, Row, Col } from "reactstrap";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import PostsContainer from "../../components/PostsContainer";

class Forum extends Component {
  state = {
    user: false,
    userInfo: {},
    numUsers: 0,
    numComments: 0,
    postOrderClicked: false,
    posts: []
  };

  componentDidMount() {
    this.loadAllPosts();
    this.verifyUser();
    this.grabUserInfo();
    this.updateNums();
  }

  // Check if User is logged in
  verifyUser = () => {
    API.userCheck()
      .then(res => this.setState({ user: res.data.user }))
      .catch(err => console.log(err));
  };

  // If logged in, grab User info and setState of "userInfo"
  // this.state.userInfo = { commentIDs: [], likes: [], postIDs: [], username: "", _id: "" }
  grabUserInfo = () => {
    API.grabUserInfo()
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));
  };

  // On-page-mount, grab total count of Users and Comments for display
  updateNums = () => {
    API.grabTotalUsers()
      .then(res => this.setState({ numUsers: res.data }))
      .then(
        API.grabTotalComments().then(res =>
          this.setState({ numComments: res.data })
        )
      )
      .catch(err => console.log(err));
  };

  // Grab all posts that have been shared (shared: true), display newest first
  loadAllPosts = () => {
    API.sortPosts("des", "createdAt")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  // Sort posts by order (asc / des) and sortby (likes / recent)
  sortPosts = (order, sortby) => {
    API.sortPosts(order, sortby)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  // When a User likes a post, update the post with the User's ID
  updatePostLikesWithUserID = postId => {
    API.updatePostLikesWithUserID(postId)
      .then(res => console.log("Post updated with User ID: ", res))
      .catch(err => console.log(err));
  };

  // When a User likes a post, update the User with the post's ID
  updateUserLikesWithPostID = postId => {
    API.updateUserLikesWithPostID(postId)
      .then(res => console.log("User 'likes' updated with Post ID: ", res))
      .catch(err => console.log(err));
  };

  // When a User saves a post, update the User with the post's ID
  addPostIDtoUser = postId => {
    API.addPostIDtoUser(postId)
      .then(res => console.log("User 'postIDs' updated with Post ID: ", res))
      .catch(err => console.log(err));
  };

  removePostIDfromUserLikes = postId => {
    API.removePostFromUserLikes(postId)
      .then(res => console.log("Remove PostID from User Likes: ", res))
      .catch(err => console.log(err));
  };

  removeUserIDfromPostLikes = postId => {
    API.removeUserFromPostLikes(postId)
      .then(res => console.log("Remove UserID from Post Likes: ", res))
      .catch(err => console.log(err));
  };

  removePostIDfromUser = postId => {
    API.removePostFromUser(postId)
      .then(res => console.log("Remove PostID from User Posts: ", res))
      .catch(err => console.log(err));
  };

  // User clicks "Sort" btn to either sort by "Recent" or "Popular"
  // Recent = createdAt; Popular = likesLength;
  // User can switch between "asc" and "des" by clicking "Recent" or "Popular" multiple times
  handleSortBtn = e => {
    // userSortby = "recent" or "popular" (use to determine query)
    const userSortby = e.target.value;
    // define variables to pass into the API call
    let sortby;
    let order;

    if (userSortby === "recent") {
      sortby = "createdAt";
    } else if (userSortby === "popular") {
      sortby = "likesLength";
    }

    // Toggle between "asc" and "des" based on history of User's clicks to sort
    if (this.state.postOrderClicked === false) {
      order = "asc";
      this.setState({ postOrderClicked: true });
    } else {
      order = "des";
      this.setState({ postOrderClicked: false });
    }

    this.sortPosts(order, sortby);
  };

  // Post btns are "like", "comment", and "save"
  // User must be logged in to "like" or "save"
  handlePostBtns = async e => {
    this.verifyUser();
    const userAction = e.target.getAttribute("value");
    const userLikedStatus = e.target.getAttribute("user-liked");
    const userSavedStatus = e.target.getAttribute("user-saved");
    const postId = e.target.id;
    console.log("user-liked: ", userLikedStatus);
    console.log("user-saved: ", userSavedStatus);

    if (
      this.state.user &&
      userAction === "like" &&
      userLikedStatus === "notLiked"
    ) {
      console.log("User wants to like: ", postId);
      await this.updatePostLikesWithUserID(postId);
      await this.updateUserLikesWithPostID(postId);

    } else if (
      this.state.user &&
      userAction === "like" &&
      userLikedStatus !== "notLiked"
    ) {
      console.log("User wants to unlike: ", postId);
      await this.removeUserIDfromPostLikes(postId);
      await this.removePostIDfromUserLikes(postId);

    } else if (
      this.state.user &&
      userAction === "save" &&
      userSavedStatus === "notSaved"
    ) {
      console.log("User wants to save: ", postId);
      await this.addPostIDtoUser(postId);

    } else if (
      this.state.user &&
      userAction === "save" &&
      userSavedStatus !== "notSaved"
    ) {
      console.log("user wants to unsave: ", postId);
      await this.removePostIDfromUser(postId);

    } else if (!this.state.user) {
      console.log("Please log in to 'Like', 'Comment', or 'Save'!");
    }

    // Reload our Posts and grab the updated User
    // this.loadAllPosts();
    await this.grabUserInfo();
  };

  render() {
    const bgImg =
      "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

    let personalWelcome;

    if (!this.state.user) {
      personalWelcome = <div />;
    } else {
      personalWelcome = (
        <p className="info-box-item">Hey {this.state.userInfo.username}</p>
      );
    }

    return (
      <div style={{ height: "100%" }}>
        <BruceBanner backgroundImage={bgImg} />
        <BruceText
          bannerMessage="Forum"
          user={this.props.user}
          changeUserState={this.props.changeUserState}
          sortOne="recent"
          sortTwo="popular"
          handleSortBtn={this.handleSortBtn}
        />
        <Container fluid className="forum-container">
          <Row className="forum-row">
            <Col md="3" xs="12" className="info-column">
              <Row className="info-box">
                <Col>
                  <p className="info-box-item info-box-header">Community</p>
                  {personalWelcome}
                  <p className="info-box-item">
                    Posts: {this.state.posts.length}
                  </p>
                  <p className="info-box-item">
                    Members: {this.state.numUsers}
                  </p>
                  <p className="info-box-item">
                    Comments: {this.state.numComments}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              md="9"
              xs="12"
              className="posts-column d-flex justify-content-center"
            >
              {/* Here we pass all shared posts and the CURRENT User to the PostsContainer */}
              <PostsContainer
                handlePostBtns={this.handlePostBtns}
                posts={this.state.posts}
                userInfo={this.state.userInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Forum;
