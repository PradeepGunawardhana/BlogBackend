const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const post = require('../Models/postsModel')


async function createPosts(req, res) {


    try {
        const { title, content, author } = req.body;

        const newpost = new post({ title, content, author: req.user.id })

        await newpost.save();
        res.status(201).json({ message: "Post Created" });


    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }

}



async function getPosts(req, res) {

    try {

        // get posts for requested user id
        const postId = req.params.id;

        if (postId) {
            try {
                const postList = await post.findById(postId).populate('author', 'userName');

                if (!postList) {
                    return res.status(500).json({ message: "Post not found" });
                }

                return res.status(200).json({ postList });

            } catch (error) {
                return res.status(500).json({ message: "Invalid Post id" });
            }

        }


        // get all posts
        const postList = await post.find().populate('author', 'userName');
        res.status(200).json({ postList });

    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }

}


async function updatePosts(req, res) {

    try {

        const { title, content } = req.body;
        const userid = req.params.id;

        const newDetails = await post.findByIdAndUpdate({ _id: userid }, { title, content }, { new: true });

        if (!newDetails) {

            return res.status(404).json("Invalid post id");

        }

        return res.status(200).json({ message: "Post Updated!" });

    } catch (error) {
        return res.status(404).json({ message: "server error", error: error.message });
    }

}
async function deletePosts(req, res) {

    try {

        const userid = req.params.id;

        const isDeleted = await post.findByIdAndDelete({_id:userid});

        if (!isDeleted) {
            return res.status(404).json("Invalid Post id");
        }

        return res.status(200).json({ message: "Post Deleted!" });

    } catch (error) {
        return res.status(404).json({ message: "server error", error: error.message });
    }

}



module.exports = { createPosts, getPosts, updatePosts,deletePosts };
