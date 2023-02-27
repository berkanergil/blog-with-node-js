const express = require("express");
const path = require("path");
const { config, engine } = require("express-edge");

const app = express();

// Configure Edge if need to
config({ cache: process.env.NODE_ENV === "production" });

app.use(express.static("public"));
app.use(engine);

app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render('index');
});

app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/contact", (req, res) => {
  res.render('contact');
});

app.get("/post", (req, res) => {
  res.render('post');
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
