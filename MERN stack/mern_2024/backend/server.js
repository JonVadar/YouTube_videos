import express from "express";
import mongoose from "mongoose";
import { postsRoutes } from "./routes/postsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";

// Initializing Express app
const app = express();

// Middleware to receive JSON
app.use(express.json());

// Adding the API end-points and the route handlers
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

// Connecting to MongoDB using Mongoose
mongoose
  .connect("mongodb://localhost:27017", { dbName: "demo_db" })
  .then(() => {
    console.log("connected to DB successfully");
    
    // Listening to requests if DB connection is successful
    app.listen(4000, "localhost", () => console.log("Listening to port 4000"));
  })
  .catch((err) => console.log(err));
