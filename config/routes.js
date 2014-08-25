var fs = require('fs');
var path = require('path');

/*
 * Meh, just load controllers and pass along the router for now...
 */
module.exports = function (router) { 
  
  var controllersPath = path.join(__dirname, '../app/controllers');
  fs.readdirSync(controllersPath).forEach(function (file) {
    if (/\.js$/.test(file)) {
      var controller = controllersPath + '/' + file;
      require(controller)(router);
    }
  });
};
