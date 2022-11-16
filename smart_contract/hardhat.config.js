// // https://eth-ropsten.alchemyapi.io/v2/IN1AayfqTHqsQb9cwrmSA3M98DWtx4Im

// require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: '0.8.0',
//   networks: {
//     ropsten : {
//       url: 'https://eth-ropsten.alchemyapi.io/v2/IN1AayfqTHqsQb9cwrmSA3M98DWtx4Im',
//       accounts: ['1850dafaa078a9a22e65173fb5a7240b2524364d9da8f9679de94b5e5ab50b8d']
//     }
//   }
// }



require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/_I8bV6oCqR51vBGreoXPUi6fYeds7Ecv',
      accounts: ['1850dafaa078a9a22e65173fb5a7240b2524364d9da8f9679de94b5e5ab50b8d'],
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}