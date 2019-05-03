import React from "react";
import "./singlePostContainer.css";
import {
  PicCommentCard,
  ArtCommentCard,
  DisCommentCard
} from "../../components/CommentCard";
const moment = require("moment");
moment().format();

const SinglePostContainer = props => {
  const post = props.post;
  const comments = props.comments;
  console.log(post);

  const displayPost = post.map(post => {
    const postTime = moment(`${post.createdAt}`).format("MMM D, h:mm");

    switch (post.type) {
      case "roverPic":
        return (
          <PicCommentCard
            key={post._id}
            type={post.type}
            id={post._id}
            img={post.roverImg}
            username={post.username}
            userComment={post.userComment}
            time={postTime}
            handleInputChange={props.handleInputChange}
            handleFormSubmit={props.handleFormSubmit}
            value={props.value}
            comments={comments}
          />
        );
      case "article":
        return (
          <ArtCommentCard
            key={post._id}
            type={post.type}
            id={post._id}
            img={post.articleImg}
            username={post.username}
            userComment={post.userComment}
            time={postTime}
            articleTitle={post.articleTitle}
            articleURL={post.articleURL}
            articleDescription={post.articleDescription}
            handleInputChange={props.handleInputChange}
            handleFormSubmit={props.handleFormSubmit}
            value={props.value}
          />
        );
      case "discussion":
        return (
          <DisCommentCard
            key={post._id}
            type={post.type}
            id={post._id}
            img={post.discussionImg}
            username={post.username}
            userComment={post.userComment}
            time={postTime}
            discussionTitle={post.discussionTitle}
            handleInputChange={props.handleInputChange}
            handleFormSubmit={props.handleFormSubmit}
            value={props.value}
          />
        );
      default:
        return <div className="no-post">Post Not Found</div>;
    }
  });

  return (
    <div className="d-flex flex-column comment-post-container">
      {displayPost}
    </div>
  );
};

export default SinglePostContainer;
