import React from "react";
import PicPostCard from "../../components/ProfilePicPostCard";
import ArtPostCard from "../../components/ProfileArtPostCard";
const moment = require("moment");
moment().format();

const ProfileContainer = props => {
  // posts is an array of post objects [{}, {}, {}]
  const posts = props.posts;
  // console.log(posts);

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
            articleTitle={post.articleTitle}
            articleURL={post.articleURL}
            articleDescription={post.articleDescription}
            username={post.username}
            userComment={initialComment}
            time={postTime}
            userInfo={props.userInfo}
            numComments={numComments}
          />
        );
      default:
        return <div className="no-post">No Posts</div>;
    }
  });

  return (
    <div className="posts-container d-flex flex-column profile-postscontainer">
      {listPosts}
    </div>
  );
};

export default ProfileContainer;
