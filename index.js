const Blockchain = require("./models/Blockchain");
const Block = require("./models/Block");
const jayson = require('jayson');
const mine  = require("./mine")

// create a server
const server = new jayson.Server({
  add: function(args, callback) {
    callback(null, args[0] + args[1]);
  }
});

server.http().listen(3000);
