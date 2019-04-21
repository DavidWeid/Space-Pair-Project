const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({

  // All Posts will share this information in this top section

  type: {
    // This will be either a Rover Pic, an Article Post, or a Discussion Post
    // roverPic, article, discussion
    type: String,
    requried: true
  },

  userComment: {
    // Intital comment made by the user about why they are saving/sharing post
    type: String,
    required: true
  },

  userID: {
    // _id created by mongoDB that belongs to the user who made it
    type: String,
    required: true
  },

  username: {
    // Optional field, if we want to post Usernames to the forum
    type: String,
    required: true
  },

  commentIDs: {
    // Array of all of the comment _ids associated with this post
    type: Array,
    default: [],
  },

  likes: {
    type: Number,
    default: 0
  },

  // End Common information -----------------------------------------------------------------

  // Selective Information, each post will fullfill all of the options in the correct section to save

  //Rover Section ---------------------------------------------------------------------------
  roverName: {
    // Rover Name that took the pic
    type: String,
    default: ''
  },

  roverImg: {
    // Img_src that the API returns
    type: String,
    default: ''
  },

  roverCamera: {
    // Camera that took the roverImg
    type: String,
    default: ''
  },

  roverSol: {
    // Martian Day the photo was taken
    type: String,
    default: ''
  },

  roverEarthDate: {
    // Earth Day the photo was taken
    type: String,
    default: ''
  },

  // Article Section--------------------------------------------------------------------------
  articleTitle: {
    // Title of Article from scrape
    type: String,
    default: ''
  },

  articleImg: {
    // Image from Article scrape
    type: String,
    default: ''
  },

  articleAuthor: {
    // Author of the Article
    type: String,
    default: ''
  },

  articleURL: {
    // Location of the Article
    type: String,
    default: ''
  },

  articleDescription: {
    // Description of the Article from scrape
    type: String,
    default: ''
  },

  // User Post Section---------------------------------------------------------------------------

  postTitle: {
    // Title user wants to give the post
    type: String,
    default: ''
  },

  // Post Content will be stored in the userComment item in shared information area

  postTheme: {
    // Optional
    // Maybe have a set number of things that can give the post different styles
    // i.e. theme = rocket launch then the color scheme might be different
    type: String,
    default: ''
  }


  // There will probably be more that we will add to this, but this is what I could think of as a start.

  // We could also try a different structure that checks for Boolean values earlier in the insertion,
  // so if we make the type an object with 3 booleans, we could use that to shape the model.
  // This way that we have already is more blunt but should be pretty effective


});

module.exports = Post = mongoose.model("Post", PostSchema);