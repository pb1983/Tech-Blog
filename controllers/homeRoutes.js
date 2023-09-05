const router = require('express').Router();
const Post = require('../models/Post')
const User = require('../models/User') 
 const Comment = require('../models/Comment')



router.get("/", async (req, res) => {

    try {

    let posts = await Post.findAll({
      // include: [
      //   {model: User,
      //   attributes: ['name']
      //  }],
    })
   
    posts = posts.map(post => post.get({plain:true}));
    console.log(posts)
    res.render("homepage", {posts, logged_in: req.session.logged_in})

    } catch (err) {
        res.status(500).json(err);
      }
});
router.get("/posts/:id", async (req, res) => {
  try {

    let post = await Post.findByPk(req.params.id)

      let postData = post.get({plain: true});

      console.log(postData)
    res.render("singlepost", {postData, logged_in: req.session.logged_in})
} catch (err) {
    res.status(500).json(err);
}
});




router.get('/dashboard', (req, res) => {

  res.render('dashboard', {logged_in: req.session.logged_in});
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }

  res.render('login');
});


module.exports = router;
