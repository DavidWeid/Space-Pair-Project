import React from "react";
import "./postsContainer.css";
import { Container, Row, Col } from "reactstrap";

const PostsContainer = props => {
  const posts = props.posts;
  console.log(posts);

  const listPosts = posts.map(post => {
    switch (post.type) {
      case "roverPic":
        return (
          <div className="post-block pic-post">
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
                <Row>
                  <Col xs="12" sm="3">
                    <p className="date-stamp">{post.createdAt}</p>
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
          <div className="post-block article-post">
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
                <Row>
                  <Col xs="12" sm="3">
                    <p className="date-stamp">{post.createdAt}</p>
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
          <div className="post-block discussion-post">
            Discussion: {post.userComment}
          </div>
        );
      default:
        return <div className="no-post">No Posts</div>;
    }
  });

  return <div className="posts-container d-flex flex-column">{listPosts}</div>;
};

export default PostsContainer;
