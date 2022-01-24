const {admin} = require('@openzeppelin/truffle-upgrades')

module.exports = async function (deployer, network) {
    // https://gnosis-safe.io/app/rin:0xaDDE3eFb10dC32e638F70669e8370E10BB96617f/balances
    const gnosisSafe = '0xaDDE3eFb10dC32e638F70669e8370E10BB96617f'
    if (network !== 'test') {
        await admin.transferProxyAdminOwnership(gnosisSafe);
    }
}