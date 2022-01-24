const Box = artifacts.require('Box')
const {deployProxy} = require('@openzeppelin/truffle-upgrades')

module.exports = async function (deployer) {
    await deployProxy(Box, [1024], {deployer, initializer: 'store'})
}