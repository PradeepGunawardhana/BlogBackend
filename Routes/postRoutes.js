const router = require('express').Router();
const authmiddleware = require('../Middleware/auth')

const postController = require('../Controllers/postController');

//create posts
router.route("/posts").post( authmiddleware, async (req,res) => {
    await postController.createPosts(req,res);
})

//  Get all blog posts
router.route("/posts").get( authmiddleware, async (req,res) => {
    await postController.getPosts(req,res);
})

// Get a single blog post by ID
router.route("/posts/:id").get( authmiddleware, async (req,res) => {
    await postController.getPosts(req,res);
})


// Update blog post by ID
router.route("/posts/:id").put( authmiddleware, async (req,res) => {
    await postController.updatePosts(req,res);
})

// Delete blog post by ID
router.route("/posts/:id").delete( authmiddleware, async (req,res) => {
    await postController.deletePosts(req,res);
})







module.exports = router;
