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
  console.log(post);

  const displayPost = post.map(post => {
    const postTime = moment.unix(`${post.createdAt}`).format("MMM D, h:mm");

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
          />
        );
      default:
        return <div className="no-post">Post Not Found</div>;
    }
  });

  return <div className="posts-container d-flex flex-column comment-post-container">{displayPost}</div>;
};

export default SinglePostContainer;
