const Box = artifacts.require('Box')
const BoxV2 = artifacts.require('BoxV2')

const {prepareUpgrade} = require('@openzeppelin/truffle-upgrades')

module.exports = async function (deployer) {
    const box = await Box.deployed()
    console.log('original address: ' + box.address)
    await prepareUpgrade(box.address, BoxV2, {deployer})
    // then upgrade the impl on https://gnosis-safe.io/app/rin:0xaDDE3eFb10dC32e638F70669e8370E10BB96617f/apps?appUrl=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmQovvfYYMUXjZfNbysQDUEXR8nr55iJRwcYgJQGJR7KEA
}