const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const PostSchema = new Schema({
  // All Posts will share this information in this top section

  type: {
    // This will be either a Rover Pic, an Article Post, or a Discussion Post
    // roverPic, article, discussion
    type: String,
    required: true
  },

  shared: {
    type: Boolean,
    default: false
  },

  userComment: {
    // Intital comment made by the user about why they are saving/sharing post
    type: String
    // required: true
  },

  userID: {
    // _id created by mongoDB that belongs to the user who made it
    type: String,
    required: true
  },

  username: {
    // Optional field, if we want to post Usernames to the forum
    type: String
  },

  commentIDs: {
    // Array of all of the comment _ids associated with this post
    type: Array,
    default: []
  },

  likes: {
    type: Array,
    default: []
  },

  likesLength: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  savedUsers: {
    type: Array,
    default: []
  },

  // End Common information -----------------------------------------------------------------

  // Selective Information, each post will fullfill all of the options in the correct section to save

  //Rover Section ---------------------------------------------------------------------------
  roverName: {
    // Rover Name that took the pic
    type: String,
    default: ""
  },

  roverImg: {
    // Img_src that the API returns
    type: String,
    default: ""
  },

  roverCamera: {
    // Camera that took the roverImg
    type: String,
    default: ""
  },

  roverSol: {
    // Martian Day the photo was taken
    type: String,
    default: ""
  },

  roverEarthDate: {
    // Earth Day the photo was taken
    type: String,
    default: ""
  },

  // Article Section--------------------------------------------------------------------------
  articleTitle: {
    // Title of Article from scrape
    type: String,
    default: ""
  },

  articleImg: {
    // Image from Article scrape
    type: String,
    default: ""
  },

  articleAuthor: {
    // Author of the Article
    type: String,
    default: ""
  },

  articleURL: {
    // Location of the Article
    type: String,
    default: ""
  },

  articleDescription: {
    // Description of the Article from scrape
    type: String,
    default: ""
  },

  articleAltText: {
    type: String,
    default: ""
  },

  // User Post Section---------------------------------------------------------------------------

  discussionTitle: {
    // Title user wants to give the post
    type: String,
    default: ""
  },

  // Post Content will be stored in the userComment item in shared information area

  discussionTheme: {
    // Optional
    // Maybe have a set number of things that can give the post different styles
    // i.e. theme = rocket launch then the color scheme might be different
    type: String,
    default: ""
  },

  discussionImg: {
    type: String,
    default: ""
  }

  // There will probably be more that we will add to this, but this is what I could think of as a start.

  // We could also try a different structure that checks for Boolean values earlier in the insertion,
  // so if we make the type an object with 3 booleans, we could use that to shape the model.
  // This way that we have already is more blunt but should be pretty effective
});

PostSchema.pre("save", function(next) {
  if (!this.createdAt) {
    this.createdAt = Date.now();
  }

  this.likesLength = this.likes.length;

  next();
});

// PostSchema.pre("remove", function(next) {
//   console.log("running check in postSchema pre remove")
//   console.log(this.userID);
//   User.findByIdAndUpdate(this.userID, { $pull: { postIDs: this._id } }, { new: true })
//     .then(result => {
//       console.log(result)
//       next(result)
//     })
//     .catch(next(err));
// })

module.exports = Post = mongoose.model("Post", PostSchema);
