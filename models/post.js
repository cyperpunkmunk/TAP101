const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  topic: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reply: [{ type: Schema.Types.ObjectId, ref: "Reply" }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;