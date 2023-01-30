const express = require('express');
const router = express.Router();
const PostSchema = require('../models/post');

//find route
router.get('/', async (req, resp) => {
    const postFind = await PostSchema.find();
    try {
        resp.send(postFind);
    } catch {
        (err) => {
            resp.json({ message: err })
        }
    }
});

//post route
router.post('/', async (req, resp) => {
    const post = new PostSchema({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savePost = await post.save();
        resp.json(savePost);
    } catch {
        (err) => {
            resp.json({ message: err });
        }
    };
});

// patch route 
router.patch('/:post_id', async (req, resp) => {
    try {
        const updatePost = await PostSchema.updateOne(
            { _id: req.params.post_id },
            { $set: req.body }
        );
        resp.send(updatePost);
    } catch {
        (err) => {
            resp.json({ message: err });
        }
    }
});

// delete router
router.delete('/:delele_id', async (req, resp) => {
    const Post = PostSchema.deleteOne({ _id: req.params.post_id });
    try {
        const deletePost = await Post.remove();
        resp.send(deletePost);
    } catch {
        (err) => {
            resp.json({ message: err });
        }
    }
});

module.exports = router;
