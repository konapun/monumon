var mongoose = require('mongoose');
//  Product = mongoose.model('Product');

module.exports = function(router) {
  router.get('/services', function (req, res, next) {
    res.render('index');

    /*
    Article.find(function (err, articles) {
      if (err) return next(err);
      res.render('index', {
        title: 'Generator-Express MVC',
        articles: articles
      });
    });
    */
  });
};
