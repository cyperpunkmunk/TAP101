const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  email: {
      type: String,
      unique: true
  },
  password: { 
      type: String, 
      required: true}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;