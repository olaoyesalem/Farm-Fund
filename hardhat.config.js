require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL
const ACCOUNT_2_PRIVATE_KEY = process.env.ACCOUNT_2_PRIVATE_KEY

module.exports = {
  solidity: '0.8.0',
  // networks for deploying the smart contract
  networks: {
    // polygon testnet
    mumbai: {
      url: QUICKNODE_HTTP_URL,
      accounts: [ACCOUNT_2_PRIVATE_KEY],
    },
  },
}
