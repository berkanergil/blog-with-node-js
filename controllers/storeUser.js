const User = require("../database/models/User");

module.exports = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.redirect("/");
    })
    .catch((error) => {
      const registrationErrors = Object.keys(error.errors).map(
        (key) => error.errors[key].message
      );

      req.flash("registrationErrors", registrationErrors);
      req.flash("data", req.body);
      res.redirect("/auth/register");
    });
};
