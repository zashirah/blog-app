const Users = require("../models/users");
const Posts = require("../models/posts");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ message: "User not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.json(user.posts);
    }
    res.status(404).json({ message: "User not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserPost = async (req, res) => {
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
}

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, req.body, { new: true }, (error, user) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json(user);
  });
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  getUserPosts,
  getUserPost,
  updateUser,
  deleteUser,
};