const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    // author: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", Post);
