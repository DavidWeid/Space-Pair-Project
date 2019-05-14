const router = require("express").Router();
const Comment = require("../../models/Comment");

router.get("/", (req, res) => {
  Comment.find()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.post("/new/:postID", (req, res) => {
  console.log(req.body);
  const newComment = new Comment({
    message: req.body.message,
    postID: req.params.postID,
    userID: req.user._id,
    username: req.user.username
  });
  newComment
    .save()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.get("/postcomments/:postId", (req, res) => {
  Comment.find({ postID: req.params.postId })
    .sort({ createdAt: 1 })
    .then(result => res.json(result))
    .catch(err => res.status(404).json(err));
});

router.get("/count", (req, res) => {
  Comment.countDocuments({})
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ err: err }));
});

router.delete("/delete/:commentID", (req, res) => {
  Comment.findByIdAndDelete(req.params.commentID)
    .then(result => res.json(result))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
