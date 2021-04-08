const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.json(getUser);
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
