import React, { Component } from "react";
import "./forum.css";
import API from "../../utils/API";
import { Container, Row, Col } from "reactstrap";
import Banner from "../../components/Banner";
import SortBar from "../../components/SortBar";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import PostsContainer from "../../components/PostsContainer";

let user;

class Forum extends Component {
  state = {
    user: true,
    numUsers: 0,
    numPosts: 3,
    numComments: 0,
    postOrderClicked: false,
    posts: [
      {
        type: "roverPic",
        _id: 100,
        userComment: "I love rover pics!",
        userID: "9001",
        username: "Vegeta",
        commentIDs: ["1", "2"],
        likes: 1,
        createdAt: Date.now(),
        roverName: "Opportunity",
        roverImg:
          "http://mars.nasa.gov/mer/gallery/all/1/f/045/1F132186339EFF05AIP1201L0M1-BR.JPG",
        roverCamera: "FHAZ",
        roverSol: "45",
        roverEarthDate: "2004-03-11"
      },
      {
        type: "article",
        _id: 101,
        userComment: "I love space articles!",
        userID: "9002",
        username: "Goku",
        commentIDs: ["1"],
        likes: 3,
        createdAt: Date.now(),
        articleTitle: "The Space Age Invades Marvel's Cinematic Universe",
        articleImg:
          "https://cdn.mos.cms.futurecdn.net/23SQ7ZFTRMqMgwPDDWpXdP-970-80.jpg",
        articleAuthor: "Sarah Lewin",
        articleURL:
          "https://www.space.com/space-age-invades-marvel-cinematic-universe.html",
        articleDescription:
          "As the forces of the universe muster against the ultimate villain Thanos for 'Avengers: Endgame' (2019), Space.com took a look back at how the MCU has related to outer space."
      },
      {
        type: "discussion",
        _id: 102,
        userComment:
          "Aliens could be evolved enough to see the realism in videogames, i.e. WE'RE ALL A SIMULATION!",
        userID: "9000",
        username: "Gohan",
        commentIDs: [],
        likes: 0,
        createdAt: Date.now(),
        discussionTitle: "Would Aliens like Videogames",
        discussionTheme: "Aliens",
        discussionImg: ""
      }
    ]
  };

  componentDidMount() {
    this.loadAllPosts();
    this.setState({ user: this.props.user });
  }

  verifyUser = () => {
    console.log(this.state.user);
    API.userCheck()
      .then(res => this.setState({ user: res.data.user }))
      .catch(err => console.log(err));
  };

  loadAllPosts = () => {
    API.getAllPosts()
      .then(res => console.log(res.data))
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
    API.sortPosts(order, sortby)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  handlePostBtns = e => {
    this.verifyUser();
    console.log(this.state.user);
    const userAction = e.target.getAttribute("value");
    console.log(userAction);
    const postId = e.target.id;
    console.log(postId);
    if (user && userAction === "like") {
      console.log("User wants to like.");
      // API call to update the user with new post id (add to likes array)
      // API call to update the post with new user id (add to likes array)
    } else if (user && userAction === "save") {
      console.log("User wants to save.");
      // API call to update user with a saved article id
    } else if (!user) {
      console.log("Please log in to 'Like', 'Comment', or 'Save'.");
    }
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        {/* <Banner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          Welcome to the Space Forum
        </Banner> */}

        {/* <SortBar
          sortOne="recent"
          sortTwo="popular"
          pageOne="Data"
          pageTwo="Forum"
          pageThree="Profile"
          handleSortBtn={this.handleSortBtn}
        /> */}
        <BruceBanner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <BruceText
          bannerMessage="Welcome to the Space Forum"
          user={this.props.user}
          changeUserState={this.props.changeUserState}
        />
        <Container fluid className="forum-container">
          <Row className="forum-row">
            <Col md="3" xs="12" className="info-column">
              <Row className="justify-content-center">Info (About)</Row>
              <Row>Users: {this.state.numUsers}</Row>
              <Row>Posts: {this.state.numPosts}</Row>
              <Row>Comments: {this.state.numComments}</Row>
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
