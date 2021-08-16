const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", (req, res) => {
  console.log("POST IS RUNNING");
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

  module.exports = router