const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  postIDs: {
    type: Array, 
    default: [],
  },

  commentIDs: {
    type: Array,
    default: []
  },

  userImage: {
    type: String,
    default: "user default pic url goes here if we want to have one"
  }


})

UserSchema.pre("save", function(next) {
  const user = this;

  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    if (err) throw err;
    console.log(hash);
    user.password = hash
    next();
  });
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch)
  })
}

module.exports = User = mongoose.model("User", UserSchema);