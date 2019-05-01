const router = require("express").Router();
const Comment = require("../../models/Comment")

router.get("/", (req, res) => {
  Comment.find()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.post("/", (req,res) => {
  const newComment = new Comment(req.body);
  newComment.save()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err))
})

router.get("/:postId", (req,res) => {
  Comment.find({postID:req.params.postId})
    .sort({createdAt:1})
    .then(result => res.json(result))
    .catch(err => res.status(404).json(err))
})

module.exports = router;