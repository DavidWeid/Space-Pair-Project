import Axios from "axios";

export default {
  // Get all posts (ordered by a "sort" field)
  // order = "asc" or "des"
  // sort = "createdAt" or "likesLength"
  sortPosts(order, sort) {
    return Axios.get(`/api/posts/sort/${order}/${sort}`);
  },

  // Verify User (true or false is returned)
  userCheck() {
    return Axios.get("/api/users/test");
  },

  // Get User info (commentIDs / likes / postIDs arrays, username / _id strings)
  grabUserInfo() {
    return Axios.get("/api/users/forum/info");
  },

  // Get total number of Users
  grabTotalUsers() {
    return Axios.get("/api/users/count");
  },

  // Get total number of Comments
  grabTotalComments() {
    return Axios.get("/api/comments/count");
  },

  // When a User "likes" a Post
  // Update Post's "likes" array with User's "_id"
  updatePostLikesWithUserID(postID) {
    return Axios.put(`/api/posts/liked/${postID}`);
  },

  // When a User "likes" a Post
  // Update User's "likes" array with Post's "_id"
  updateUserLikesWithPostID(postID) {
    return Axios.put(`/api/users/liked/${postID}`);
  },

  // When a User "saves" a Post
  // Update User's "postIDs" array array with Post's "_id"
  addPostIDtoUser(postID) {
    return Axios.put(`/api/users/update/postID/${postID}`);
  },

  // When a User "unlikes" a Post
  // Remove Post's "_id" from User's "likes" array
  removePostFromUserLikes(postId) {
    return Axios.put(`/api/users/unliked/${postId}`);
  },

  // When a User "unlikes" a Post
  // Remove User's "_id" from Post's "likes" array
  removeUserFromPostLikes(postId) {
    return Axios.put(`/api/posts/unliked/${postId}`);
  },

  // When a User "unsaves" a Post
  // Remove Post's "_id" from User's "postIDs" array
  removePostFromUser(postId) {
    return Axios.put(`/api/users/unsaved/${postId}`);
  }
};
