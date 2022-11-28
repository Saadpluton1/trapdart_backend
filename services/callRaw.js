const {ethers} = require("ethers");
const {trapDart_addr , crowdsale_addr}  = require("../package/addresses")
const TrapDart  = require("../package/TrapDart.json")
const CrowdSale  = require("../package/Crowdsale.json")


//const node = "https://eth-goerli.alchemyapi.io/v2/GKcZh-E7o6PB3gEz0M9fUHPwG4_xHbbj";
    // const privateKey = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
  const node = "http://127.0.0.1:8545/";
// console.log(trapDart_addr,"YY");
// console.log(crowdsale_addr ,"SS");
async function balance(userAddress) {


    let abi = TrapDart;
    userAddress = ethers.utils.getAddress(userAddress)


     const provider =new ethers.providers.WebSocketProvider(node);
    //const provider = new ethers.providers.Web3Provider(node);

    let contractaddress = trapDart_addr;

    console.log("COntractADdres from call row",contractaddress)
    console.log("test",provider)

    // contractaddress = ethers.utils.getAddress(contractaddress);
    // console.log(contractaddress)
try {

    let contract = new ethers.Contract(contractaddress, abi, provider);
    let tx = await contract.balanceOf(userAddress)
    console.log("test",provider)
    console.log("test")
    console.log("Tracsaction to string",tx.toString())
    console.log("test",provider)
    console.log("Balance of user",tx.toString())

    return await tx.toString()
}catch(err) {
    console.log("ERROR Of balance of",err)
}

}

async function payee(userAddress) {

    let abi = CrowdSale;
    userAddress = ethers.utils.getAddress(userAddress)

    // let wallet  = ethers.Wallet(privateKey)
    // const provider =new ethers.providers.JsonRpcSigner(node,wallet);

    // const provider =new ethers.providers.JsonRpcProvider(node);
    const provider =new ethers.providers.WebSocketProvider(node);

    let contractaddress = crowdsale_addr;

    console.log(contractaddress)
    // contractaddress = ethers.utils.getAddress(contractaddress);
    // console.log(contractaddress)

    let contract = new ethers.Contract(contractaddress, abi, provider);
    let tx = await contract._payees(userAddress)
    let result = '0'
    if(tx==true){
        result = '1'
    }
    console.log(tx)
    return await result.toString()
}
// balance("0xbb45AF76f5198db4e38bA3668993c82739343c40")
module.exports={payee , balance}

