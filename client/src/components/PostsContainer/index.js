import React from "react";
import "./postsContainer.css";
import {
  PicPostCard,
  ArtPostCard,
  DisPostCard
} from "../../components/PostCard";
const moment = require("moment");
moment().format();

const PostsContainer = props => {
  // posts is an array of post objects [{}, {}, {}]
  const posts = props.posts;
  // console.log(posts);

  // listPosts will be the new array to be display, an array of PostCards [<Card/>, <Card/>, <Card/>]
  const listPosts = posts.map(post => {
    const postTime = moment(`${post.createdAt}`).format("MMM D, h:mm");
    let numComments = post.commentIDs.length;
    // console.log(numComments);

    // switch determines the type of Card component (Picture, Article, Discussion)
    // Note: we're passing the CURRENT User to the PostCard
    switch (post.type) {
      case "roverPic":
        return (
          <PicPostCard
            key={post._id}
            type={post.type}
            id={post._id}
            img={post.roverImg}
            username={post.username}
            userComment={post.userComment}
            handlePostBtns={props.handlePostBtns}
            time={postTime}
            userInfo={props.userInfo}
            numComments={numComments}
          />
        );
      case "article":
        return (
          <ArtPostCard
            key={post._id}
            type={post.type}
            id={post._id}
            img={post.articleImg}
            username={post.username}
            userComment={post.userComment}
            handlePostBtns={props.handlePostBtns}
            time={postTime}
            articleTitle={post.articleTitle}
            articleURL={post.articleURL}
            articleDescription={post.articleDescription}
            userInfo={props.userInfo}
          />
        );
      case "discussion":
        return (
          <DisPostCard
            key={post._id}
            type={post.type}
            id={post._id}
            img={post.discussionImg}
            username={post.username}
            userComment={post.userComment}
            handlePostBtns={props.handlePostBtns}
            time={postTime}
            discussionTitle={post.discussionTitle}
            userInfo={props.userInfo}
          />
        );
      default:
        return <div className="no-post">No Posts</div>;
    }
  });

  return <div className="posts-container d-flex flex-column">{listPosts}</div>;
};

export default PostsContainer;
