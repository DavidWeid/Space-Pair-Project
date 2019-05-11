import React, { Component } from "react";
import "./forum.css";
import API from "../../utils/forumAPI.js";
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

  // Grab all posts that have been shared (shared: true), display newest first
  loadAllPosts = () => {
    API.sortPosts("des", "createdAt")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

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

  // Sort posts by order (asc / des) and sortby (likes / recent)
  sortPosts = (order, sortby) => {
    API.sortPosts(order, sortby)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  // When a User "likes" a Post, update Post's "likes" array with the User's "_id"
  updatePostLikesWithUserID = postId => {
    API.updatePostLikesWithUserID(postId)
      .then(res =>
        console.log("Post's 'likes' updated with User's '_id': ", res)
      )
      .catch(err => console.log(err));
  };

  // When a User "likes" a Post, update User's "likes" array with Post's "_id"
  updateUserLikesWithPostID = postId => {
    API.updateUserLikesWithPostID(postId)
      .then(res =>
        console.log("User's 'likes' updated with Post's '_id': ", res)
      )
      .catch(err => console.log(err));
  };

  // When a User "saves" a Post, update User's "postIDs" array with Post's "_id"
  addPostIDtoUser = postId => {
    API.addPostIDtoUser(postId)
      .then(res =>
        console.log("User's 'postIDs' updated with Post's '_id': ", res)
      )
      .catch(err => console.log(err));
  };

  // When a User "saves" a Post, update Post's "savedUsers" array with User's "_id"
  addUserIDtoPost = postId => {
    API.addUserIDtoPost(postId)
      .then(res =>
        console.log("Post's 'savedUsers' updated with User's '_id': ", res)
      )
      .catch(err => console.log(err));
  };

  // When a User "unlikes" a Post, remove Post's "_id" from User's "likes" array
  removePostIDfromUserLikes = postId => {
    API.removePostFromUserLikes(postId)
      .then(res =>
        console.log("Remove Post's '_id' from User's 'likes': ", res)
      )
      .catch(err => console.log(err));
  };

  // When a User "unlikes" a Post, remove User's "_id" from Post's "likes" array
  removeUserIDfromPostLikes = postId => {
    API.removeUserFromPostLikes(postId)
      .then(res =>
        console.log("Remove User's '_id' from Post's 'likes': ", res)
      )
      .catch(err => console.log(err));
  };

  // When a User "unsaves" a Post, remove Post's "_id" from User's "postIDs" array
  removePostIDfromUser = postId => {
    API.removePostFromUser(postId)
      .then(res =>
        console.log("Remove Post's '_id' from User's' 'postIDs': ", res)
      )
      .catch(err => console.log(err));
  };

  // When a User "unsaves" a Post, remove User's "_id" from Post's "savedUsers" array
  removeUserIDfromPost = postId => {
    API.removeUserFromPost(postId)
      .then(res =>
        console.log("Remove User's '_id' from Post's 'savedUsers': ", res)
      )
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

    // Sets state (state.posts)
    this.sortPosts(order, sortby);
  };

  handleLikeBtn = async e => {
    console.log("like btn clicked");
    if (this.state.user) {
      const postId = e.target.id;
      this.updatePostLikesWithUserID(postId);
      this.updateUserLikesWithPostID(postId);
      await this.grabUserInfo();
    } else {
      console.log("please log in");
    }
  };

  handleUnlikeBtn = async e => {
    console.log("unlike btn clicked");
    if (this.state.user) {
      const postId = e.target.id;
      this.removePostIDfromUserLikes(postId);
      this.removeUserIDfromPostLikes(postId);
      await this.grabUserInfo();
    } else {
      console.log("please log in");
    }
  };

  handleSaveBtn = async e => {
    console.log("save btn clicked");
    if (this.state.user) {
      const postId = e.target.id;
      this.addPostIDtoUser(postId);
      this.addUserIDtoPost(postId);
      await this.grabUserInfo();
    } else {
      console.log("please log in");
    }
  };

  handleUnsaveBtn = async e => {
    console.log("unsave btn clicked");
    if (this.state.user) {
      const postId = e.target.id;
      this.removePostIDfromUser(postId);
      this.removeUserIDfromPost(postId);
      await this.grabUserInfo();
    } else {
      console.log("please log in");
    }
  };

  render() {
    const bgImg =
      "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

    let personalWelcome;

    if (!this.state.user) {
      personalWelcome = <span />;
    } else {
      personalWelcome = (
        <span className="info-box-item">
          Hey {this.state.userInfo.username}, Welcome to the{" "}
        </span>
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
                  <p className="info-box-item info-box-header">
                    {" "}
                    {personalWelcome}Community
                  </p>
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
                handleLikeBtn={this.handleLikeBtn}
                handleUnlikeBtn={this.handleUnlikeBtn}
                handleSaveBtn={this.handleSaveBtn}
                handleUnsaveBtn={this.handleUnsaveBtn}
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
