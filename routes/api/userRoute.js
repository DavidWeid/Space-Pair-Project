const router = require("express").Router();
const User = require("../../models/User");

router.get("/", (req, res) => {
  User.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.post("/", (req, res) => {
  const newUser = new User(req.body);

  newUser.save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) throw err;
    
    user.comparePassword(req.body.password, function(err, resp){
      if (err) res.json(err);
      console.log(resp)
      res.json(resp);
    })

  })
})

module.exports = router;