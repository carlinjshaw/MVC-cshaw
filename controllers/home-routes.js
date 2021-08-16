const router = require('express').Router();
const { resolveSoa } = require('dns');
const sequelize = require('../config/connection');
const { Post } = require('../models')

// router.get('/homepage', (req, res) => {
//   res.render('homepage');
// });

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

// router.get('/dashboard', (req, res) => {
//   res.render('dashboard')
// })

//homepage route that should send all post data, indiscriminant of user
router.get("/homepage", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "content", "user_id"],
  })
    .then((dbPosts) => {

      const postData = dbPosts.map((posts) => posts.get({ plain: true }));
      console.log(postData); 
      res.render("homepage", { postData, test: "hello" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//dashboard route renders user-specific posts
router.get("/dashboard", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'content',
      'user_id'
    ]
  })
  .then((dbPosts) => {
      // console.log(dbPosts)
        
const postData = dbPosts.map(posts => posts.get({ plain: true }));
// const postsData = JSON.stringify(postData)
   console.log(postData)
      // res.json(dbPosts)
      res.render('dashboard', {postData})
  }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

