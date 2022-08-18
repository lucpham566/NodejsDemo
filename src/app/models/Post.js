const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema({
  name: String, // String is shorthand for {type: String}
});

module.exports = mongoose.model("Post", PostSchema);
