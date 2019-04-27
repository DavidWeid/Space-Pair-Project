import React, { Component } from "react";
import "./forum.css";
import API from "../../utils/API";
import { Container, Row, Col } from "reactstrap";
import Banner from "../../components/Banner";
import SortBar from "../../components/SortBar";
import PostsContainer from "../../components/PostsContainer";

class Forum extends Component {
  state = {
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
    this.hitExampleAPI();
  }

  hitExampleAPI() {
    API.exampleAPI()
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  loadAllPosts = () => {
    API.getAllPosts()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleSortBtn = e => {
    const sortby = e.target.value;
    console.log("Sort Clicked\n", sortby);
    let order = "asc";
    API.sortPosts(order, sortby)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handlePostBtns = e => {
    const userAction = e.target.getAttribute("value");
    console.log(userAction);
    const postId = e.target.id;
    console.log(postId);
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Banner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          Welcome to the Space Forum
        </Banner>
        <SortBar
          sortOne="top"
          sortTwo="popular"
          pageOne="Data"
          pageTwo="Forum"
          pageThree="Profile"
          handleSortBtn={this.handleSortBtn}
        />
        <Container fluid className="forum-container">
          <Row className="forum-row">
            <Col md="3" xs="12" className="info-column">
              <Row className="justify-content-center">Info (About)</Row>
              <Row>Users: 0</Row>
              <Row>Posts: 0</Row>
              <Row>Comments: 0</Row>
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
