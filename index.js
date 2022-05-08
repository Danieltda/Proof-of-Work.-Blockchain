
const jayson = require('jayson');
const {startMining, stopMining}  = require("./mine")
const {PORT} = require("./config")

// create a server
const server = new jayson.Server({
    startMining: function(_, callback) {
      startMining()
      callback(null, "succeeeded")
    },
    stopMining: function(_, callback) {
      stopMining()
      callback(null, "succeeeded")
    }
});

server.http().listen(`${PORT}`);
