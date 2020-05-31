const express = require("express");
const router = express.Router();

router.get("/welcome", function(req, res, next) {
  console.log("sent welcome text!");
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

module.exports = router;
