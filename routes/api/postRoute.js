const router = require("express").Router();
const Post = require("../../models/Post");
const User = require("../../models/User");

// Basic Get Route without sort
// "/api/posts/"
router.get("/", (req, res) => {
  Post.find()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

// For Sorting, I think we could keep state in react that sees what we last sorted
// If sorted again, we could flip flop between ascending or descending

// Sort Get Route Ascending
router.get("/sort/asc/:sort", (req, res) => {
  Post.find()
    .sort({ [req.params.sort]: 1 })
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

// Sort Get Route Descending
router.get("/sort/des/:sort", (req, res) => {
  Post.find()
    .sort({ [req.params.sort]: -1 })
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

// Get Route (one post by id)

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

// Get all posts by one user

router.get("/user/:id", (req, res) => {
  Post.find({ userID: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

// Post Route

// This is not gated at the backend because it can handle all post types.
// We need to make sure to gate this in the front end!
router.post("/", (req, res) => {
  if (req.user) {
    const newPost = new Post(req.body);
    newPost.userID = req.user._id;
    newPost
      .save()
      .then(result => {
        res.json({ sent: true, result: result });
      })
      .catch(err => res.status(500).json({ eror: "err" }));
  } else {
    res.json({ user: false })
  }

});

// Delete Route

// Will have to use Passport to prevent people from deleting anyone's post
// Since we are using the ID to delete, should not be too big of a problem if we don't gate it
router.delete("/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).json({ deleted: true }))
    .catch(err => res.status(404).json({ error: err }));
});

// Update Route

// Not sure where we would use this, but we have it
router.put("/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

module.exports = router;
