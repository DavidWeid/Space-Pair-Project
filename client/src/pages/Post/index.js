import React, { Component } from "react";
import "./post.css";
import { Container, Row, Col } from "reactstrap";
import API from "../../utils/API";
// import Banner from "../../components/Banner";
// import SortBar from "../../components/SortBar";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import SinglePostContainer from "../../components/SinglePostContainer";

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
      <div style={{ height: "100%" }}>
        <BruceBanner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          {" "}
        </BruceBanner>
        <BruceText bannerMessage="Add Your thoughts to the Space Forum" />

        <Container fluid className="forum-container comment-container">
          <Row className="post-row">
            <Col xs="12" className="post-column d-flex justify-content-center">
              <SinglePostContainer post={this.state.post} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Post;
