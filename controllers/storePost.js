const path = require("path");
const cloudinary = require("cloudinary");
const Post = require("../database/models/Post");

module.exports = (req, res) => {
  const { image } = req.files;

  const uploadPath = path.resolve(__dirname, "..", "public/posts", image.name);

  image.mv(uploadPath, (error) => {
    cloudinary.v2.uploader.upload(uploadPath, (error, result) => {
      if (error) {
        console.log()
        res.redirect("/");
      } else {
        Post.create({
          ...req.body,
          image: result.secure_url,
          author: req.session.userId,
        })
          .then((post) => {
            res.redirect("/");
          })
          .catch((error) => {

            res.redirect("/");
          });
      }
    });
  });
};
