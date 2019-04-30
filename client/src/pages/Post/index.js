import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "../../utils/API";
import Banner from "../../components/Banner";
import SortBar from "../../components/SortBar";
import PostsContainer from "../../components/PostsContainer";

class Post extends Component {
  state = {
    post: [
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
      }
    ]
  };

  componentDidMount() {
    // API.getPost(this.props.match.params.id)
    //   .then(res => this.setState({ post: res.data }))
    //   .catch(err => console.log(err));
    API.getPost(this.props.match.params.id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      //   <Container>
      //     <Row>
      //       <Col>
      //         <PostsContainer posts={this.state.post} />
      //       </Col>
      //     </Row>
      //   </Container>
      <div style={{ height: "100%" }}>
        <Banner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          Welcome to the Space Forum
        </Banner>
        <SortBar
          pageOne="Data"
          pageTwo="Forum"
          pageThree="Profile"
          handleSortBtn={this.handleSortBtn}
        />
        <Container fluid className="forum-container">
          <Row className="forum-row">
            <Col xs="12" className="posts-column d-flex justify-content-center">
              <PostsContainer
                handlePostBtns={this.handlePostBtns}
                posts={this.state.post}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Post;
