const User = require("../database/models/User");

module.exports = (req, res, next) => {
  // fetch user from database
  User.findById(req.session.userId)
    .then((user) => {
      if (!user) {
        res.redirect("/");
      } else {
        next();
      }
    })
    .catch((error) => {
      res.redirect("/");
    });
  // verify user
  // if user is valid, permit request.
  // else redirect.
};
