import mongoose from "mongoose";
import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";

/************************************ Get All Posts ************************************/
const getPosts = async (req, res) => {
  try {
    // Grab all the posts from DB
    const posts = await Post.find().sort({ createdAt: "desc" });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************ Get User's Posts ************************************/
const getUserPosts = async (req, res) => {
  // Grab the authenticated user from request object
  const user = await User.findById(req.user._id);

  try {
    // Grab user's posts from DB
    const userPosts = await Post.find({ user: user._id }).sort({ createdAt: "desc" });
    res.status(200).json({ userPosts, email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************ Create New Post ************************************/
const addPost = async (req, res) => {
  // Grab the data from request body
  const { title, body } = req.body;

  // Check the fields are not empty
  if (!title || !body) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Find the authenticated user using the user id provided by request object
  const user = await User.findById(req.user._id);

  try {
    // Create a new post and save in DB
    const post = await Post.create({ user: user._id, title, body });

    res.status(200).json({ success: "Post created.", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************ Delete Post ************************************/
const deletePost = async (req, res) => {
  // Check the ID is valid type
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Incorrect ID" });
  }

  // Check the post exists
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(400).json({ error: "Post not found" });
  }

  // Check the user owns the post
  const user = await User.findById(req.user._id);
  if (!post.user.equals(user._id)) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    await post.deleteOne();
    res.status(200).json({ success: "Post was deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/************************************ Update Post ************************************/
const updatePost = async (req, res) => {
  // Grab the data from request body
  const { title, body } = req.body;

  // Check the fields are not empty
  if (!title || !body) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check the ID is valid type
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Incorrect ID" });
  }

  // Check the post exists
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(400).json({ error: "Post not found" });
  }

  // Check the user owns the post
  const user = await User.findById(req.user._id);
  if (!post.user.equals(user._id)) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    await post.updateOne({ title, body });
    res.status(200).json({ success: "Post was updated.", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getPosts, getUserPosts, addPost, deletePost, updatePost };
