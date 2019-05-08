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
  console.log(posts);

  // listPosts will be the new array to be display, an array of PostCards [<Card/>, <Card/>, <Card/>]
  const listPosts = posts.map(post => {
    const postTime = moment(`${post.createdAt}`).format("MMM D, h:mm");
    let numComments = post.commentIDs.length;
    let initialComment;

    if (!post.userComment) {
      initialComment = "";
    } else {
      initialComment = `${post.username}: ${post.userComment}`;
    }

    ///// The following allows the user to like / unlike and save / unsave posts, with visual feedback /////
    // User isn't logged in: userLikedStatus = "notLiked"
    // User isn't logged in: userSavedStatus = "notSaved"
    let userLikedStatus = "notLiked";
    let userSavedStatus = "notSaved";

    console.log("props.userInfo on PostsContainer\n", props.userInfo);
    console.log("post on PostsContainer\n", post);

    if (props.userInfo._id) {
      if (props.userInfo.likes.indexOf(post._id) === -1) {
        console.log("Post NOT liked by User.\nPost ID: ", post._id);
        userLikedStatus = "notLiked";
      } else {
        console.log("Post LIKED by User.\nPost ID: ", post._id);

        userLikedStatus = "liked";
      }

      if (props.userInfo.postIDs.indexOf(post._id) === -1) {
        console.log("Post NOT saved by User.\nPost ID: ", post._id);
        userSavedStatus = "notSaved";
      } else {
        console.log("Post SAVED by User.\nPost ID: ", post._id);
        userSavedStatus = "saved";
      }
    }

    // Switch determines the type of Card component (Picture, Article, Discussion)
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
            initialComment={initialComment}
            handleLikeBtn={props.handleLikeBtn}
            handleUnlikeBtn={props.handleUnlikeBtn}
            handleSaveBtn={props.handleSaveBtn}
            handleUnsaveBtn={props.handleUnsaveBtn}
            time={postTime}
            userInfo={props.userInfo}
            numComments={numComments}
            userLikedStatus={userLikedStatus}
            userSavedStatus={userSavedStatus}
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
            handleLikeBtn={props.handleLikeBtn}
            handleUnlikeBtn={props.handleUnlikeBtn}
            handleSaveBtn={props.handleSaveBtn}
            handleUnsaveBtn={props.handleUnsaveBtn}
            time={postTime}
            articleTitle={post.articleTitle}
            articleURL={post.articleURL}
            articleDescription={post.articleDescription}
            userInfo={props.userInfo}
            numComments={numComments}
            userLikedStatus={userLikedStatus}
            userSavedStatus={userSavedStatus}
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
            handleLikeBtn={props.handleLikeBtn}
            handleUnlikeBtn={props.handleUnlikeBtn}
            handleSaveBtn={props.handleSaveBtn}
            handleUnsaveBtn={props.handleUnsaveBtn}
            time={postTime}
            discussionTitle={post.discussionTitle}
            userInfo={props.userInfo}
            numComments={numComments}
            userLikedStatus={userLikedStatus}
            userSavedStatus={userSavedStatus}
          />
        );
      default:
        return <div className="no-post">No Posts</div>;
    }
  });

  return <div className="posts-container d-flex flex-column">{listPosts}</div>;
};

export default PostsContainer;
