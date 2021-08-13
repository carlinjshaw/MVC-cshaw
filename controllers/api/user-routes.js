
const router = require("express").Router();
const { User } = require("../../models");



router.get("/", (req, res) => {
    User.findAll()
      .then((dbUsers) => res.json(dbUsers))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post("/", (req, res) => {
    console.log("POST IS RUNNING");
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then((dbUserData) => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
  
          res.json(dbUserData);
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  //route for signing in
  router.post("/login", (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No user with that email address!" });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: "Incorrect password!" });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    });
  });

module.exports = router;