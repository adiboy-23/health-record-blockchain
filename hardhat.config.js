require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [`0x${'0c6013584212308e4389700d00521b8803d191112cf219205d63a327e007b36e'}`], // Replace with your MetaMask private key
    },
  },
};
