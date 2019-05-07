const router = require("express").Router();
const User = require("../../models/User");
const passport = require("../../config/passport");

router.get("/", (req, res) => {
  User.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.post("/signup", (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ user: true });
});

router.delete("/delete/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(deleted => res.json({ deleted: deleted }))
    .catch(err => res.status(404).json({ err: err }));
});

router.put("/update/info/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ error: err }));
});

router.put("/update/posts", (req, res) => {
  console.log("User that's updating " + req.user._id);
  User.findByIdAndUpdate(req.user._id, { $push: { postIDs: req.body.postID, roverImgArray: req.body.roverImgSrc } })
    .then(result => res.json({ result, updated: true }))
    .catch(err => res.status(404).json({ error: err }));
});

router.put("/update/postID", (req, res) => {
  console.log("User that's updating " + req.user._id);
  User.findByIdAndUpdate(req.user._id, { $push: { postIDs: req.body.postID } })
    .then(result => res.json({ result, updated: true }))
    .catch(err => res.status(404).json({ error: err }));
});

router.put("/update/comments/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $push: { commentIDs: req.body.commentIDs }
  })
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ error: err }));
});

router.put("/liked/:postID", (req, res) => {
  console.log(req.user._id);
  User.findByIdAndUpdate(req.user._id, { $push: { likes: req.params.postID } })
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ error: err }));
});

router.put("/unliked/:postID", (req, res) => {
  console.log("User wants to unlike");
  User.findByIdAndUpdate(req.user._id, { $pull: { likes: req.params.postID } })
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ error: err }));
});

router.put("/unsaved/:postID", (req, res) => {
  console.log("User wants to unsave");
  User.findByIdAndUpdate(req.user._id, {
    $pull: { postIDs: req.params.postID }
  })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.get("/test", (req, res) => {
  if (req.user) {
    return res.json({ user: req.user });
  }
  return res.json({ user: false });
});

router.get("/forum/info", (req, res) => {
  if (req.user) {
    User.findById(req.user._id, { email: 0, password: 0 })
      .then(result => res.json(result))
      .catch(err => res.status(404).json({ error: err }));
  }
});

router.get("/count", (req, res) => {
  User.countDocuments({})
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ err: err }));
});

router.get("/imgArray", (req, res) => {
  if (req.user) {
    User.findById(req.user._id)
      .then(result => res.json({ user: true, roverImgArray: result.roverImgArray }))
      .catch(err => res.json(err));
  } else {
    res.json({ user: false })
  }

})

module.exports = router;
