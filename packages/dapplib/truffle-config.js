require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind arrow imitate problem suspect section'; 
let testAccounts = [
"0xc8763e60fedde308cd6383ebc90b39f6989470b7c208fa2bd0e273e484cabb28",
"0x71e497388dbf631e43c909edddd2509fc24dec5fc2617e3d583fa85cd3c2a313",
"0x7aa6b6def239a0bde502ae9d73ba12d32506ba24f551ac796428bede281d8a03",
"0x3570a2eb20ef324cab4fcedd59f78e5305b6fe935589a1020354a0c37540a8f1",
"0x901b9a1e3270ae2cfbe586ca33b0f62d40925668cc44f7a9e82fb0ae4981429f",
"0x9469bf4837380d16b46f4d6748c26a9efe41b9a1a9c39a80ca24d7053a170a57",
"0x7d993bde38fe1ecd80843b445baa9201d0854851fc732b309d2043a4e9b5a759",
"0xa02bbf2aa1785108c56af1cf5c004340d6c9ae033fc6acf31e77e0599c0e3a17",
"0x05c7e22e80343bc9c3a6d35b0474b75c1e835143a1fa23d51b139acc154548bc",
"0x48fa267fb9319617291c74d3980d061de60134c60e9408bb0867748ee70cc190"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
