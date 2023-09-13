const router = require('express').Router();
const { Post, User, Comment } = require('../models/')
const withAuth = require("../utils/auth");




router.get("/", async (req, res) => {

  try {

    let posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ]
    })

    posts = posts.map(post => post.get({ plain: true }));
    console.log(posts)
    res.render("homepage", { posts, logged_in: req.session.logged_in })

  } catch (err) {
    res.status(500).json(err);
  }
});





router.get("/posts/:id", async (req, res) => {
  try {

    let postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
        model: Comment,
      
        include: {
          model: User,
          attributes: ['name']
        }
      },
    ]
  })
// console.log(postData)

    let posts = postData.get({ plain: true });

    // console.log(posts)
    res.render("singlepost", { posts, logged_in: req.session.logged_in })
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get('/dashboard', withAuth, async (req, res) => {

    try {
  
      let postData = await User.findOne({where: {id: req.session.user_id}, 
        attributes: { exclude: ['password'] },
        include: [{ model: Post },
        
        ],
      })
    
      let users = postData.get({ plain: true });
      console.log(users)
      res.render("dashboard", {users, logged_in: true })
  
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

  module.exports = router;

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }

  res.render('login');
});


module.exports = router;
