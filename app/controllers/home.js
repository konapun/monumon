var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');
//  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index');
  
  console.log("Rendered index");
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
