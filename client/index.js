const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const verifyProof = require('../utils/verifyProof');
const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const merkleTree = new MerkleTree(niceList)
  const name = 'Dr. Jerome Bayer'

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name,
    index: niceList.findIndex(n => n === name),
    proof: merkleTree.getProof(niceList.findIndex(n => n === name)),
    
  });

  console.log({ gift });
}

main();