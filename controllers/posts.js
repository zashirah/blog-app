const Post = require("../models/posts");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (post) {
      return res.json(post);
    }
    res.status(404).json({ message: "Post not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  await Post.findByIdAndUpdate(
    postId,
    req.body,
    { new: true },
    (error, post) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!post) {
        return res.status(404).json({ message: "Post not found!" });
      }
      res.status(200).json(post);
    }
  );
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deleted = await Post.findByIdAndDelete(postId);
    if (deleted) {
      return res.status(200).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
