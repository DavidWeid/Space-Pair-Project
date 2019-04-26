const router = require("express").Router();
const User = require("../../models/User");

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

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username})
    .then(user => {
      user.comparePassword(req.body.password, function(err, resp) {
        if (err) res.json(err);
        console.log(resp)
        res.json(resp);
      })
    })
    .catch(err => {
      res.status(404).json({error:"There is no user by that username"})
    })
})

router.delete("/:id", (req,res) => {
  User.findByIdAndDelete(req.params.id)
    .then(deleted => res.json({deleted: deleted}))
    .catch(err => res.status(404).json({err: err}))
})

router.put("/:id", (req,res) => {
  if (req.body.postIDs) {
    console.log("they made it");
    User.update({username: req.params.id})
  }
  User.findByIdAndUpdate(req.params.id, req.body.update)
    .then(result =>  res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;