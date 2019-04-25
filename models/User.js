const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },


})

UserSchema.pre("save", function(next) {
  const user = this;

  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    if (err) throw err;
    console.log(hash);
    user.password = hash
    next();
  });
  // console.log(this.password);
  // next()
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch)
  })
  // console.log(candidatePassword);
  // cb(null, "this is from the comparepassword method level")
}

// UserSchema.methods.comparePassword = function() {
//   return "testing 123"
// }

module.exports = User = mongoose.model("User", UserSchema);
