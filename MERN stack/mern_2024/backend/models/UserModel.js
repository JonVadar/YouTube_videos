import mongoose from "mongoose";

// Creating post schema using Mongoose Schema class
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating a model from schema
const User = mongoose.model("User", UserSchema);

export default User;
