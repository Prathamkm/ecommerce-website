const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmRkMWIyMGQ5NTU4NDhmNjc3N2NlZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkwMTYxNTg2fQ.7BIV7rvdiB3QT5jrVWUuuQ8hvMEOMtKf27-u7I5xf0I";
  return token;
};
