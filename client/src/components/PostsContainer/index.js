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
              <img
                src={post.roverImg}
                className="card-img-top"
                alt="Rover Image"
              />
              <Container fluid className="card-body">
                <Row>
                    <Col>
                        <p className="card-text">{post.username}: {post.userComment}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="date-stamp">{post.createdAt}</p>
                    </Col>
                    <Col>
                        <button className="post-btn like-btn">Like</button>
                        <button className="post-btn comment-btn">Comment</button>
                        <button className="post-btn save-btn">Save</button>
                    </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
      case "article":
        return (
          <div className="post-block article-post">
            Article: {post.userComment}
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
