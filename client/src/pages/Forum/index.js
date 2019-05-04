import React, { Component } from "react";
import "./forum.css";
import API from "../../utils/API";
import { Container, Row, Col } from "reactstrap";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import PostsContainer from "../../components/PostsContainer";

class Forum extends Component {
  state = {
    user: this.props.user,
    numUsers: 0,
    numPosts: 0,
    numComments: 0,
    postOrderClicked: false,
    posts: [
      // {
      //   type: "discussion",
      //   _id: 102,
      //   userComment:
      //     "Aliens could be evolved enough to see the realism in videogames, i.e. WE'RE ALL A SIMULATION!",
      //   userID: "9000",
      //   username: "Gohan",
      //   commentIDs: [],
      //   likes: 0,
      //   createdAt: Date.now(),
      //   discussionTitle: "Would Aliens like Videogames",
      //   discussionTheme: "Aliens",
      //   discussionImg: ""
      // }
    ]
  };

  componentDidMount() {
    this.loadAllPosts();
    this.verifyUser();
  }

  verifyUser = () => {
    API.userCheck()
      .then(res => this.setState({ user: res.data.user }))
      .catch(err => console.log(err));
  };

  loadAllPosts = () => {
    API.sortPosts("des", "createdAt")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  updateNums = () => {
    console.log(this.state.posts);
    this.setState({ numPosts: this.state.posts.length });
  };

  sortPosts = (order, sortby) => {
    API.sortPosts(order, sortby)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  updatePostLikesWithUserID = postId => {
    API.updatePostLikesWithUserID(postId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  updateUserLikesWithPostID = postId => {
    API.updateUserLikesWithPostID(postId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  addPostIDtoUser = postId => {
    API.addPostIDtoUser(postId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleSortBtn = e => {
    const userSortby = e.target.value;
    console.log("Sort Clicked\n", userSortby);

    let sortby;
    if (userSortby === "recent") {
      sortby = "createdAt";
    } else if (userSortby === "popular") {
      sortby = "likesLength";
    }

    let order;
    if (this.state.postOrderClicked === false) {
      order = "asc";
      this.setState({ postOrderClicked: true });
    } else {
      order = "des";
      this.setState({ postOrderClicked: false });
    }
    console.log(order);
    this.sortPosts(order, sortby);
  };

  handlePostBtns = e => {
    this.verifyUser();
    console.log(this.state.user);
    const userAction = e.target.getAttribute("value");
    console.log(userAction);
    const postId = e.target.id;
    console.log(postId);

    if (this.state.user && userAction === "like") {
      console.log("User wants to like.");
      this.updatePostLikesWithUserID(postId);
      this.updateUserLikesWithPostID(postId);
    } else if (this.state.user && userAction === "save") {
      console.log("User wants to save.");
      this.addPostIDtoUser(postId);
    } else if (!this.state.user) {
      console.log("Please log in to 'Like', 'Comment', or 'Save'.");
    }

    this.loadAllPosts();
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <BruceBanner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
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
                  <p className="info-box-item info-box-header">About</p>
                  <p className="info-box-item">Users: {this.state.numUsers}</p>
                  <p className="info-box-item">Posts: {this.state.numPosts}</p>
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
              <PostsContainer
                handlePostBtns={this.handlePostBtns}
                posts={this.state.posts}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Forum;
