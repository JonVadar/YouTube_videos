import mongoose from "mongoose";

// Creating post schema using Mongoose Schema class
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, { timestamps: true })


// Creating a model from schema
const Post = mongoose.model("Post", PostSchema)

export default Post