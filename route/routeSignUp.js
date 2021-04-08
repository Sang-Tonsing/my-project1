const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Get bacck all the posts
router.post("/", async (req, res) => {
  //console.log(req.body);
  const postUser = new User({
    email: req.body.email,
    password: req.body.password,
    // lastName: req.body.lastName,
  });
  try {
    const saveUser = await postUser.save();
    res.json(saveUser);
    res.redirect("../app/Home");
  } catch (err) {
    res.send("Cannot post: " + err);
  }
});

module.exports = router;
