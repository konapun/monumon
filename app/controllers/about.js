module.exports = function(router) {
  router.get('/about', function (req, res, next) {
    res.render('index');
  });
};
