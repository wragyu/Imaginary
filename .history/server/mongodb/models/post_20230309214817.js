import mongoose from "mongoose";


const Post = new mongoose.Schema({
  name: { type: String, required: true}
})
