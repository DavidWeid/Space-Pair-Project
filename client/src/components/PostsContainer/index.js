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
              <div className="card-body">
                <p className="card-text">Rover Pic: {props.userComment}</p>
              </div>
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
