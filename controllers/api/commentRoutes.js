const router = require('express').Router();
const Comment = require("../../models/Comment")

router.get("/", async (req, res)=> {

    try {
    
    let comments = await Comment.findAll()
    
    comments.map(comment => comment.get({plain:true}));
    
    res.status(200).json(comments)
    } catch (err) {
        res.status(500).json(err);
      }
})

router.get("/:id", async (req, res)=> {

    try {
    
    let comments = await Comment.findByPK(req.params.id)
    
    res.status(200).json(comments)
    } catch (err) {
        res.status(500).json(err);
      }
})


router.post("/", async (req, res)=> {

    try {
    
    let comments = await Comment.create(req.body)
    console.log(comments)
    res.status(200).json(comments)
    } catch (err) {
        res.status(500).json(err);
      }
})

router.put("/:id", async (req, res)=> {

    try {
    
    let comments = await Comment.update(req.body, {where: {id:req.params.id}})
    
    res.status(200).json(comments)
    } catch (err) {
       res.status(500).json(err);
      }
})

router.delete("/:id", async (req, res)=> {
    
    try {

    let comments = await Comment.destroy({where: {id:req.params.id}})
    
    res.status(200).json(comments)
    } catch (err) {
        res.status(500).json(err);
      }
})


module.exports = router;