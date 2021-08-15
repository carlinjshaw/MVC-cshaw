const router = require("express").Router();
const { Post } = require("../../models");


// router.get("/", (req, res) => {
//     Post.findAll({
//       attributes: [
//         'id',
//         'title',
//         'content',
//         'user_id'
//       ]
//     })
//       .then((dbUsers) => res.json(dbUsers)
//       )
//       console.log(dbUsers)
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

  module.exports = router