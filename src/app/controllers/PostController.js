const Post = require("../models/Post");

class PostController {
  index = (req, res) => {
    Post.find({}, (err, posts) => {
      if (!err) {
        console.log("model thành công");
        res.json(posts);
      } else {
        res.err.json("lỗi");
      }
    });
  };
}

module.exports = new PostController();
