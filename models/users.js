const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
