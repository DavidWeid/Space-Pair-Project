import Axios from "axios";

export default {
  // Get User info (commentIDs / likes / postIDs arrays, username / _id strings)
  getUserInfo() {
    return Axios.get("/api/users/forum/info");
  },

  getPostsUserCreated() {
    return Axios.get("/api/posts/profile/user");
  },

  getPostsUserSaved() {
    return Axios.get("/api/posts/profile/user-saved");
  },

  getPostsUserLiked() {
    return Axios.get("/api/posts/profile/user-liked");
  }
};
