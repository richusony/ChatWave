const express = require("express");
const router = express.Router();

router.route("/login").get((req, res) => {
  console.log("initial route");
  res.send("hello");
});

module.exports = router;