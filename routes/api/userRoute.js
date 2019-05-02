const router = require("express").Router();
const User = require("../../models/User");
const passport = require("../../config/passport");

router.get("/", (req, res) => {
  User.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.post("/signup", (req, res) => {
  const newUser = new User(req.body);

  newUser.save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ user: true })
})

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(deleted => res.json({ deleted: deleted }))
    .catch(err => res.status(404).json({ err: err }))
})

router.put("/update/info/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ error: err }))
})

router.put("/update/posts/:id", (req, res) => {
  console.log(req.user._id + " here I am")
  User.findByIdAndUpdate(req.user._id, { $push: { postIDs: req.params.id } })
    .then(result => res.json({ result, updated: true }))
    .catch(err => res.status(404).json({ error: err }))
})

router.put("/update/comments/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $push: { commentIDs: req.body.commentIDs } })
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ error: err }))
})

router.get("/test", (req, res) => {
  if (req.user) {
    return res.json({user:true})
  }
  return res.json({ user: false })
})

module.exports = router;