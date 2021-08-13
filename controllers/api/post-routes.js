const router = require("express").Router();
const { Post } = require("../../models");


router.get("/", (req, res) => {
    Post.findAll()
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router