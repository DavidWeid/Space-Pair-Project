import React from "react";
import "./postsContainer.css";
import { Container, Row, Col } from "reactstrap";
const moment = require("moment");
moment().format();

const PostsContainer = props => {
  const posts = props.posts;
  console.log(posts);

  const listPosts = posts.map(post => {

    const postTime = moment.unix(`${post.createdAt}`).format("MMM D, h:mm");

    switch (post.type) {
      case "roverPic":
        return (
          <div key={post._id} className="post-block pic-post">
            <div className="card">
              <img src={post.roverImg} className="card-img-top" alt="Rover" />
              <Container fluid className="card-body">
                <Row>
                  <Col>
                    <p className="card-text initial-comment">
                      {post.username}: {post.userComment}
                    </p>
                  </Col>
                </Row>
                <Row className="info-row">
                  <Col xs="12" sm="3">
                    <p className="date-stamp">{postTime}</p>
                  </Col>
                  <Col xs="12" sm="9" className="d-flex justify-content-end">
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn like-btn"
                      id={post._id}
                      value="like"
                    >
                      Like
                    </button>
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn comment-btn"
                      id={post._id}
                      value="comment"
                    >
                      Comment
                    </button>
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn save-btn"
                      id={post._id}
                      value="save"
                    >
                      Save
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
      case "article":
        return (
          <div key={post._id} className="post-block article-post">
            <div className="card">
              {post.articleImg !== "" ? (
                <img
                  src={post.articleImg}
                  className="card-img-top"
                  alt="Article"
                />
              ) : (
                <div />
              )}

              <Container fluid className="card-body">
                <Row>
                  <Col className="article-title">{post.articleTitle}</Col>
                </Row>
                <Row>
                  <Col>
                    <a
                      className="article-description"
                      href={post.articleURL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {post.articleDescription}
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="card-text initial-comment">
                      {post.username}: {post.userComment}
                    </p>
                  </Col>
                </Row>
                <Row className="info-row">
                  <Col xs="12" sm="3">
                    <p className="date-stamp">{postTime}</p>
                  </Col>
                  <Col xs="12" sm="9" className="d-flex justify-content-end">
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn like-btn"
                      id={post._id}
                      value="like"
                    >
                      Like
                    </button>
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn comment-btn"
                      id={post._id}
                      value="comment"
                    >
                      Comment
                    </button>
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn save-btn"
                      id={post._id}
                      value="save"
                    >
                      Save
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
      case "discussion":
        return (
          <div key={post._id} className="post-block discussion-post">
            <div className="card">
              {post.discussionImg !== "" ? (
                <img
                  src={post.discussionImg}
                  className="card-img-top"
                  alt="Discussion"
                />
              ) : (
                <div />
              )}

              <Container fluid className="card-body">
                <Row>
                  <Col className="discussion-title">{post.discussionTitle}</Col>
                </Row>
                <Row>
                  <Col>
                    <p className="card-text initial-comment">
                      {post.username}: {post.userComment}
                    </p>
                  </Col>
                </Row>
                <Row className="info-row">
                  <Col xs="12" sm="3">
                    <p className="date-stamp">{postTime}</p>
                  </Col>
                  <Col xs="12" sm="9" className="d-flex justify-content-end">
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn like-btn"
                      id={post._id}
                      value="like"
                    >
                      Like
                    </button>
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn comment-btn"
                      id={post._id}
                      value="comment"
                    >
                      Comment
                    </button>
                    <button
                      onClick={props.handlePostBtns}
                      className="post-btn save-btn"
                      id={post._id}
                      value="save"
                    >
                      Save
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
      default:
        return <div className="no-post">No Posts</div>;
    }
  });

  return <div className="posts-container d-flex flex-column">{listPosts}</div>;
};

export default PostsContainer;
