(function() {
  var express, path, drone, server, app;

  express = require("express");
  path = require("path");
  app = express();
  app.configure(function() {
  	app.set('port', process.env.PORT || 3001);
  	app.use(app.router);
    app.use(express.static(__dirname + '/public'));
  });

  server = require('http').createServer(app);

  server.listen(app.get('port'), function() {
  	return console.log("Express server listening on port" + app.get("port"));
  })

}).call(this);
