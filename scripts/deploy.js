// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();

  await buyMeACoffee.deployed();

  console.log("BuyMeACoffee deployed to:", buyMeACoffee.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// so I have no idea what happens, lets google it...  If it is necessary to terminate the Node.js process due to an error condition, throwing an uncaught error and allowing the process to terminate accordingly is safer than calling process.exit(). 

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });