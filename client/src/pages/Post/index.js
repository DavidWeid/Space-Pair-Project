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
    user: this.props.user,
    post: [],
    comment: "",
    comments: []
  };

  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: [res.data] }))
      .catch(err => console.log(err));
    API.getComments(this.props.match.params.id)
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.comment);
    if (this.state.comment) {
      API.saveComment({
        message: this.state.comment,
        userID: this.state.user._id,
        postID: this.state.post._id
      });
    }
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <BruceBanner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          {" "}
        </BruceBanner>
        <BruceText bannerMessage="Add Your thoughts to the Space Forum" />

        <Container fluid className="comment-container">
          <Row className="post-row">
            <Col xs="12" className="d-flex justify-content-center">
              <SinglePostContainer
                value={this.state.comment}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                post={this.state.post}
                comments={this.state.comments}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Post;
