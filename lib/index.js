(function() {

var https = require('https');
var qs    = require('querystring');
var _     = require('underscore');

module.exports = function(options) {

  var defaults = {
    hostname: 'gateway.smstrade.de',
    port: 443,
    method: 'GET',
    debug: 0
  };
  options = _.extend(defaults, options);
  var api = {};

  api.printOptions = function(callback) {
    console.log(options);
  };

  api.sendTextMessage = function(message, callback) {
    message = _.extend(options, message);
console.log(message);

    var query = qs.stringify({
      key: message.api_key,
      to: message.to,
      message: message.message,
      route: message.route,
      debug: message.debug
    });

    var request_options = {
      hostname: message.hostname,
      port: message.port,
      path: '/?' + query,
      method: message.method
    };

    var req = https.request(request_options, function(res) {
      console.log("statusCode: ", res.statusCode);
      console.log("headers: ", res.headers);

      res.on('data', function(d) {
        //process.stdout.write(d);
        callback(d);
      });
    });
    req.end();

    req.on('error', function(e) {
      console.error(e);
    });

  };

  return api;

};

}).call(this);
