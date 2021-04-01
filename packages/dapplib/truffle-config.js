require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict duck ensure shaft find response spice clutch coral light army gather'; 
let testAccounts = [
"0xdca2f5841cb57019a492ab17b8c44c79e39abf209bd16afe7ad6558f09e7211f",
"0xaabb7a074c0b4bccf4a095afd799509bf08cac8770510b0d8c07c75e694ed907",
"0x515ae99bd8fe6b06de71cfd9748232e31be1cea002890c08fe646da8bbccecce",
"0x3af763a79fd63da8971335fa0e402528edcb0c2e5a41a096176ab0ed1c05200a",
"0xe596523488955361d8fc232a6fa73feabd90f60daf9c4d220affea4926117648",
"0x45b84cf7c8614615b705933033f8233c71cc3fab9253367028ed3ef2ced31c99",
"0xbd08724c4b6928ae8ad0d684b745bbfcbd53ab8d14b62d62f74757fa3c4e47b9",
"0x9129c5bc43b106c88906e602579394d040ef14bab69308f3c53c3f86ad3314b8",
"0x48b0f629ab1250afd8bbddee00f436f3c36f570d64d4c40a504d2b578a014c51",
"0x4fc7bd7b19674790135ce90466d470240370ae8de4e1c3e62e5bd1088ee4447d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

