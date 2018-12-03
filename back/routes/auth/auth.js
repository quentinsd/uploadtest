const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");
router.post("/signup", function(req, res, next) {
  const formData = req.body;
  connection.query("INSERT INTO users SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
