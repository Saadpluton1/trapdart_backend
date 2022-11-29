const {ethers} = require("ethers");
const {trapDart_addr , crowdsale_addr}  = require("../package/addresses")
const TrapDart  = require("../package/TrapDart.json")
const CrowdSale  = require("../package/Crowdsale.json")

const node = "http://127.0.0.1:8545/";



async function balance(userAddress) {


    let abi = TrapDart;
    userAddress = ethers.utils.getAddress(userAddress)


    const provider =new ethers.providers.JsonRpcProvider(node);


    let contractaddress = trapDart_addr;

    console.log(contractaddress)
    // contractaddress = ethers.utils.getAddress(contractaddress);
    // console.log(contractaddress)
try {
    let contract = new ethers.Contract(contractaddress, abi, provider);
    let tx = await contract.balanceOf(userAddress)
    console.log(tx.toString())
    return await tx.toString()
}catch(eer) {
    console.log(err)
}
 
}