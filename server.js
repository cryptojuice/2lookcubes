var express = require('express');
var app = express();

app.use(express.static('app'));

app.use(function(req, res, next) {
  res.location('/#' + req.path())
  .status(301)
  .send();
});

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Express app listening at http://%s:%s', host, port);
});
