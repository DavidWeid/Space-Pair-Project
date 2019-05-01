const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
const passport = require("./config/passport");
const models = require("./models");

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport and sessions
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

/// ROUTES ///
app.use(routes);

// Connect to MongoDB
const eraseDatabaseOnSync = true;
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/science-forum-db", {
    useNewUrlParser: true
  })
  .then(async () => {
    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.User.deleteMany({}),
        models.Comment.deleteMany({}),
        models.Model.deleteMany({})
      ]);

      createUser();
    }
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const createUser = async () => {
  const user1 = new models.User({
    username: "Majin Buu",
    password: "bubblegum",
    email: "buu@you.com",
    userImage: "https://cdn.dribbble.com/users/779803/screenshots/2297550/majin-boo-2.jpg"
  });
  const comment1 = new models.Comment({
    message: "I love rockets!",
    userID: user1._id,
    postID: "post1._id"
  });
  const post1 = new models.Model({
    type: "roverPic",
    userComment: comment1.message,
    userID: user1._id,
    username: user1.username,
    commentIDs: [comment1._id],
    roverName: "Spirit",
    roverImg: "http://mars.nasa.gov/mer/gallery/all/2/f/001/2F126468064EDN0000P1001L0M1-BR.JPG",
    roverCamera: "FHAZ",
    roverSol: "1",
    roverEarthDate: "2004-01-05"
  })

  await user1.save();

  await post1.save();

  await comment1.save();

}