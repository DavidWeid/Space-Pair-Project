const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  message: {
    type: String,
    required: true
  },

  postID: {
    type: String,
    required: true
  },

  userID: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date
  }
})

CommentSchema.pre("save", function(next) {
  if (!this.createdAt) {
    this.createdAt = Date.now();
  }

  next();
});

module.exports = Comment = mongoose.model("Comment", CommentSchema)