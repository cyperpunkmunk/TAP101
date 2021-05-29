const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  author: { type: String, required: true },
  body: { type: String, required: true }
});

const Reply = mongoose.model("Reply", ReplySchema);

module.exports = Reply;