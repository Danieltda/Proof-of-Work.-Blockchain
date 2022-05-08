const client = require ("./client.js")

// invoke "add"
client.request('startMining', [], function(err, response) {
  if(err) throw err;
  console.log(response.result); // 2
});