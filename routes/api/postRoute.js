const router = require("express").Router();
const Post = require("../../models/Post");

// Basic Get Route without sort
// "/api/posts/"

router.get("/", (req, res) => {
  Post.find()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

// Post Route

// This is not gated at the backend because it can handle all post types.
// We need to make sure to gate this in the front end!
// Create new Post and link it to our User
router.post("/", (req, res) => {
  if (req.user) {
    const newPost = new Post(req.body);
    newPost.userID = req.user._id;
    newPost.username = req.user.username;
    newPost.savedUsers = [req.user._id];
    newPost
      .save()
      .then(result => {
        res.json({ sent: true, result: result });
      })
      .catch(err => res.json({ error: err, why: "i dont know" }));
  } else {
    res.json({ user: false });
  }
});

// Get Route (one post by id)

router.get("/postID/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

// Get route for one post by roverImg

// router.get("/postSavedRoverImg/:roverImg", (req,res) => {
//   if (req.user) {
//     Post.find({roverImg: req.params.roverImg, userID: req.user._id, shared})
//       .then(result => res.json(result))
//       .catch(err => res.json(err));
//   }
// })

// Delete Route

// Will have to use Passport to prevent people from deleting anyone's post
// Since we are using the ID to delete, should not be too big of a problem if we don't gate it
router.delete("/delete/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).json({ deleted: true }))
    .catch(err => res.status(404).json({ error: err }));
});

router.put("/deleteImg/", (req, res) => {
  if (req.user) {
    Post.findOneAndRemove({ roverImg: req.body.roverImg, userID: req.user._id })
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// When User "unsaves" an Article from Articles page
// Delete Post at matching article title AND user ID
router.delete("/deleteSavedArticle/:title", (req, res) => {
  if (req.user) {
    Post.findOneAndDelete({
      userID: req.user._id,
      articleTitle: req.params.title
    })
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// Update Route

// Not sure where we would use this, but we have it
router.put("/put/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// When the User "likes" a post, update Post's "likes" array with the User ID
router.put("/liked/:id", (req, res) => {
  if (req.user) {
    console.log("User that's liking", req.user._id);
    console.log("Post to be liked", req.params.id);
    Post.findByIdAndUpdate(req.params.id, { $push: { likes: req.user._id } })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// When the User "unlikes" a Post, pull the User's ID from Post's "likes" array
router.put("/unliked/:id", (req, res) => {
  if (req.user) {
    console.log("User wants to unlike", req.user._id);
    console.log("Post to unlike", req.params.id);
    Post.findByIdAndUpdate(req.params.id, { $pull: { likes: req.user._id } })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// When the User "saves" a Post, update Post's "savedUsers" array with User ID
router.put("/saved/:id", (req, res) => {
  if (req.user) {
    console.log("User that's saving", req.user._id);
    console.log("Post to be saved", req.params.id);
    Post.findByIdAndUpdate(req.params.id, {
      $push: { savedUsers: req.user._id }
    })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// When the User "unsaves" a Post, pull the User ID from the "savedUsers" array
router.put("/unsaved/:id", (req, res) => {
  if (req.user) {
    console.log("User wants to unsave", req.user._id);
    console.log("Post to unsave", req.params.id);
    Post.findByIdAndUpdate(req.params.id, {
      $pull: { savedUsers: req.user._id }
    })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

router.put("/shared", (req, res) => {
  if (req.user) {
    console.log(req.body.add, req.body.roverImg);
    if (req.body.add) {
      Post.findOneAndUpdate(
        { roverImg: req.body.roverImg, userID: req.user._id },
        { shared: true, userComment: req.body.userComment }
      )
        .then(result => {
          console.log(result);
          res.json(result);
        })
        .catch(err => res.json(err));
    } else if (!req.body.add) {
      Post.findOneAndUpdate(
        { roverImg: req.body.roverImg, userID: req.user._id },
        { shared: false, userComment: "" }
      )
        .then(change => res.json(change))
        .catch(err => res.json(err));
    }
  } else {
    res.json({ user: false });
  }
});

// When User comments on a Post, update Post's "commentIDs" array
router.put("/newcomment/:postID/:commentID", (req, res) => {
  if (req.user) {
    console.log("Adding new comment ID to Post");
    console.log(req.params.postID, req.params.commentID);
    Post.findByIdAndUpdate(req.params.postID, {
      $push: { commentIDs: req.params.commentID }
    })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// If User deletes their comment, remove the comment ID from the Post
router.put("/comments/removeComment/:postID/:commentID", (req, res) => {
  if (req.user) {
    console.log("Remove Comment ID from post");
    console.log("Comment: ", req.params.commentID);
    console.log("Post: ", req.params.postID);
    Post.findByIdAndUpdate(req.params.postID, {
      $pull: { commentIDs: req.params.commentID }
    })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// When User "unshares" an article, find the matching title and User and change to "shared: false"
router.put("/unshareArticle/:title", (req, res) => {
  if (req.user) {
    console.log("Updating post to be unshared.");
    Post.findOneAndUpdate(
      { articleTitle: req.params.title, userID: req.user._id },
      { shared: false }
    )
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

router.get(`/wtf`, (req, res) => {
  // console.log(req.user)
  res.json(true);
});

//Get all posts by one user in app (posts user shared or user saved from data page - NOT FORUM PAGE)
// Basically, all posts CREATED by the user from the data page
router.get("/profile/user", (req, res) => {
  if (req.user) {
    console.log("get all posts created by the user");
    Post.find({ userID: req.user._id })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

router.get("/profile/user-saved", (req, res) => {
  if (req.user) {
    console.log("get all posts saved by the user");
    Post.find({ savedUsers: { $in: [req.user._id] } })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

router.get("/profile/user-liked", (req, res) => {
  if (req.user) {
    console.log("get all posts liked by the user");
    Post.find({ likes: { $in: [req.user._id] } })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false });
  }
});

// Get all posts by one user in postman
router.get("/postman/:id", (req, res) => {
  Post.find({ userID: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// Sort Get Route Ascending
router.get("/sort/asc/:sort", (req, res) => {
  Post.find({ shared: true })
    .sort({ [req.params.sort]: 1 })
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

// Sort Get Route Descending
router.get("/sort/des/:sort", (req, res) => {
  Post.find({ shared: true })
    .sort({ [req.params.sort]: -1 })
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.get("/this/is/just/a/test", (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
