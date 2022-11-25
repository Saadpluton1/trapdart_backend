const {ethers} = require("ethers");
const {trapDart_addr }  = require("../package/addresses")
const TrapDart  = require("../package/TrapDart.json")

const node = "http://127.0.0.1:8545/";
    const privateKey = "c20f8c3933102b9bcc370c6a450b8e0b911fab8f7af0b579d160a0a6144e1a8e"

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
    }catch(err){
        console.log("error")
    }

    }

    balance("0x70997970C51812dc3A010C7d01b50e0d17dc79C8")
    