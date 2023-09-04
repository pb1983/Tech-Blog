const router = require('express').Router();
const Post = require('../models/Post')
const User = require('../models/User') 
 const Comment = require('../models/Comment')



router.get("/", async (req, res) => {

    try {

    let posts = await Post.findAll()
   
    posts = posts.map(post => post.get({plain:true}));
    console.log(posts)
    res.render("homepage", {posts})

    } catch (err) {
        res.status(500).json(err);
      }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});


module.exports = router;
