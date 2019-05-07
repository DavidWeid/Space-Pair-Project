import Axios from "axios";

// Getting the api key from process.env
const key = process.env.REACT_APP_NASA_KEY;

export default {
  exampleAPI() {
    return Axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=45&camera=FHAZ&api_key=${key}`
    );
  },

  // This will get sent which rover and sol to search for and return all of the pictures from all cameras
  roverSolPictures(rover, sol) {
    return Axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${key}`
    );
  },

  // This will get sent above plus which camera and only return the pictures from that camera
  roverSolCameraPictures(rover, sol, camera) {
    return Axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${key}`
    );
  },

  getAllPosts() {
    return Axios.get("/api/posts/");
  },

  getAllPostsFromUser() {
    return Axios.get("/api/posts/user");
  },

  // order = "asc" or "des"
  // sort = sort-what, or sort-by
  sortPosts(order, sort) {
    return Axios.get(`/api/posts/sort/${order}/${sort}`);
  },

  getPost(id) {
    return Axios.get(`/api/posts/postID/${id}`);
  },

  getComments(id) {
    return Axios.get(`/api/comments/postcomments/${id}`);
  },

  // To create a new comment
  saveComment(postID, comment) {
    return Axios.post(`/api/comments/new/${postID}`, comment);
  },

  savePost(postData) {
    return Axios.post("/api/posts", postData);
  },

  //This sends the postID not the userID, userID is carried in req.user when logged in
  addPostIDAndImgtoUser(postID, roverImgSrc) {
    const updateObj = {
      postID: postID,
      roverImgSrc: roverImgSrc
    }
    return Axios.put(`/api/users/update/posts`, updateObj);
  },

  addPostIDtoUser(postID) {
    return Axios.put(`/api/users/update/postID`, postID)
  },

  addUserIDtoPost(postID) {
    return Axios.put(`/api/posts/saved/${postID}`);
  },

  updatePostLikesWithUserID(postID) {
    return Axios.put(`/api/posts/liked/${postID}`);
  },

  updateUserLikesWithPostID(postID) {
    return Axios.put(`/api/users/liked/${postID}`);
  },

  removePostFromUserLikes(postId) {
    return Axios.put(`/api/users/unliked/${postId}`);
  },

  removeUserFromPostLikes(postId) {
    return Axios.put(`/api/posts/unliked/${postId}`);
  },

  removePostFromUser(postId) {
    return Axios.put(`/api/users/unsaved/${postId}`);
  },

  getRoverManifest(rover) {
    return Axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${key}`
    );
  },

  // USER LOGIN/SIGNUP

  userLogin(email, password) {
    let user = {
      email,
      password
    };

    return Axios.post("/api/users/login", user);
  },

  userSignup(username, password, email) {
    let user = {
      username,
      password,
      email
    };
    return Axios.post("/api/users/signup", user);
  },

  userCheck() {
    return Axios.get("/api/users/test");
  },

  grabUserInfo() {
    return Axios.get("/api/users/forum/info");
  },

  grabTotalUsers() {
    return Axios.get("/api/users/count");
  },

  grabTotalComments() {
    return Axios.get("/api/comments/count");
  },

  grabRoverImgArray() {
    return Axios.get("/api/users/imgArray")
  }
};
