const userSessionValidationMiddleware = (req, res, next) => {
  if (req.session.currentUser) return next();

  res.redirect("/login");
};

module.exports = userSessionValidationMiddleware;