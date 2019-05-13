import React, { Component } from "react";
import "./post.css";
import { Container, Row, Col } from "reactstrap";
import API from "../../utils/API";
import BruceBanner from "../../components/BruceBanner";
import BruceText from "../../components/BruceText";
import SinglePostContainer from "../../components/SinglePostContainer";

class Post extends Component {
  state = {
    user: this.props.user,
    userInfo: "",
    post: [],
    comment: "",
    comments: []
  };

  componentDidMount() {
    this.getPost();
    this.getComments();
    this.getUserInfo();
  }

  getPost = () => {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: [res.data] }))
      .catch(err => console.log(err));
  };

  getComments = () => {
    API.getComments(this.props.match.params.id)
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };

  getUserInfo = () => {
    API.grabUserInfo()
      .then(res => this.setState({ userInfo: res.data._id }))
      .catch(err => console.log(err));
  };

  saveComment = (postID, comment) => {
    API.saveComment(postID, comment)
      .then(res => {
        this.updatePostCommentIDsArray(res.data._id).then(res =>
          console.log("addCommentIDtoPost res: ", res)
        );
      })
      .catch(err => console.log(err));
  };

  updatePostCommentIDsArray = commentID => {
    API.addCommentIDtoPost(this.props.match.params.id, commentID)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let comment = { message: this.state.comment };
    console.log("Comment", comment);
    let postID = this.state.post[0]._id;
    if (this.state.comment) {
      this.saveComment(postID, comment);
      this.setState({ comment: "" });
      this.getComments();
    }
  };

  handleCommentBtns = e => {
    const action = e.target.value;
    const commentID = e.target.id;
    if (this.state.user) {
      if (action === "edit") {
        console.log("User Wants to Edit a Comment. Good Luck!");
      } else if (action === "delete") {
        console.log("User wants to delete a comment");
        // this.deleteComment(commentID, this.state.userInfo);
        // this.getComments();
      }
    }
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <BruceBanner backgroundImage="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
          {" "}
        </BruceBanner>
        <BruceText bannerMessage="Thoughts" />

        <Container fluid className="comment-container">
          <Row className="post-row">
            <Col xs="12" className="d-flex justify-content-center">
              <SinglePostContainer
                value={this.state.comment}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                post={this.state.post}
                comments={this.state.comments}
                userID={this.state.userInfo}
                handleCommentBtns={this.handleCommentBtns}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Post;
