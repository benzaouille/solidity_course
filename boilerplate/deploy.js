const assert                = require('assert');
const Web3                  = require('web3');
const HDWalletProvider      = require('@truffle/hdwallet-provider');
const {interface, bytecode} = require('./compile')


const provider = new HDWalletProvider(
  'unhappy short dawn hammer fat copper aware wife lunch lawsuit oyster youth',
  'https://rinkeby.infura.io/v3/bc3c1d0ca4b84ac7ba99a6e9004c4f34'
);

const web3 = new Web3(provider);

const deploy = async () =>{
const accounts = await web3.eth.getAccounts();
console.log('Attemptin to deploy contract from : ', accounts[0]);
const result   = await new  web3.eth.Contract(JSON.parse(interface)).
                              deploy({data : bytecode, arguments : ['Hi there']}).
                              send({gas : '1000000', from : accounts[0]});
//console.log('Contract was deploy at ', result.options.adress);
}

deploy();
