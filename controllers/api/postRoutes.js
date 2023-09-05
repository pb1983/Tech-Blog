const router = require('express').Router();
const Post = require("../../models/Post")

router.get("/", async (req, res) => {

    try {

        let posts = await Post.findAll()

        posts.map(post => post.get({ plain: true }));

        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/:id", async (req, res) => {

    try {

        let post = await Post.findByPk(req.params.id)
      
        let postData = post.get({ plain: true });

        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err);
    }

})


router.post("/", async (req, res) => {

    try {

        let posts = await Post.create(req.body)

        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id", async (req, res) => {

    try {

        let posts = await Post.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err);
    }


})

router.delete("/:id", async (req, res) => {

    try {

        let posts = await Post.destroy({ where: { id: req.params.id } })

        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;