import Axios from "axios";

// Getting the api key from process.env
const key = process.env.REACT_APP_NASA_KEY;

export default {
  // This will just return the pictures from Opportunity from all of it's cameras on sol 45
  /* res.data = a photos array(12)
    res.data.photos[0] = {
      camera: {id, name, rover_id, full_name}, 
      earth_date, 
      id, 
      img_src, 
      rover: {cameras, id, landing_date, launch_date, max_date, max_sol, name, status, total_photos},
      sol
    } 
  */
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

  // order = "asc" or "des"
  // sort = sort-what, or sort-by
  sortPosts(order, sort) {
    return Axios.get(`/api/posts/sort/${order}/${sort}`);
  },

  getPost(id) {
    return Axios.get(`/api/posts/${id}`);
  },

  getComments(id) {
    return Axios.get(`/api/comments/${id}`);
  },

  // To create a new post
  saveComment(commentData) {
    return Axios.post(`/api/comments`);
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
  }
};
