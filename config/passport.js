var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // console.log(email, password)
    db.User.findOne({ email })
      .then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        dbUser.comparePassword(password, function(what, isMatch) {
          console.log(what, isMatch);
          if (isMatch) {
            return done(null, dbUser)
          }
          return done(null, false, {
            message: "Invalid password"
          })
        });
        
      })
      .catch(err => err)

  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
