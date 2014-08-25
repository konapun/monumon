module.exports = function(router) {
  router.get('/contact', function (req, res, next) {
    res.render('index');
  });
};
