const Block = require("./models/Block");
const db = require("./db")
const TARGET_DIFFICULTY = BigInt("0X00" + "F".repeat());

let mining = false;

function startMining(){
    mining = true;
    mine();
}

function stopMining(){
    mining = false;
    
}
function mine(){
    if(!mining) return;

    const block = new Block()
    while(BigInt("0x" + block.hash())  >= TARGET_DIFFICULTY){
        console.log(block.hash());
        block.nonce ++;
    }

    

    db.blockchain.addBlock(block);
    
    console.log(`Mined block ${db.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);
    
    setTimeout(mine, 5000);
    
    }
    
module.exports = {
    startMining,
    stopMining,
}