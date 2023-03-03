const mongoose = require("mongoose");
 
const Post = require("./database/models/Post");

mongoose.connect("mongodb://localhost/test-log-with-node-js");

Post.create({
  title: "title",
  description: "description",
  content: "content",
})
  .then((post) => {
    console.log(post);
  })
  .catch((err) => {
    console.log(err);
  });

Post.find({
  title: "title",
})
  .then((posts) => {
    console.log(posts);
  })
  .catch((err)=>{
    console.log(err)
  });
