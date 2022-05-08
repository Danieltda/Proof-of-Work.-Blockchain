const db = require("./db")

function mine(){
    db.blockchain.addBlock(new Block());
    
    console.log(`Just mined block ${db.blockchain.blockHeight()}`)
    
    setTimeout(mine, 5000);
    
    }
    
module.exports = mine;      