const { ethers } = require('hardhat')
// this line of code imports the hardhat library, which is an Ethereum development tool
const fs = require('fs')

require('dotenv').config({ path: '.env' })
// this line of code imports the dotenv library, which is a library that helps to define the environment variables

async function main() {
  const FarmFund = await ethers.getContractFactory('FarmFund')

  const farmFund = await FarmFund.deploy({
    value: ethers.utils.parseEther('0.01'),
  })

  await farmFund.deployed()

  console.log('FarmFund Contract Address:', farmFund.address)
  console.log('FarmFund Owner Address:', farmFund.signer.address)
  // this line of code logs the address of the deployed FarmFund contract

  fs.writeFileSync(
    './contractUtils.js',
    `
    export const OWNER_ADDRESS = "${farmFund.signer.address}"
  export const CONTRACT_ADDRESS = "${farmFund.address}"
  `
  )
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
