const assert = require('assert');
const ganache = require('ganache-cli');
const option = {};
const provider = ganache.provider(option);
const Web3 = require('web3');
const web3 = new Web3(provider);
const {interface, bytecode} = require('../compile');





//mocha will deploy a contract --> (a transaction will occur even in the test network)
//so we need a account to do that, that why before each test we will select a account and then run the tests
//iteratively
let accounts;
let inbox;

beforeEach(async () => {
  //getAccounts is a async function so we use then to fetch the acount we want
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface))
                    .deploy({data: bytecode, arguments: ['Hi there']})
                    .send({from: accounts[0], gas: '1000000'});
});


describe('Inbox Test',() => {
  it('deploy a contract test', () =>{
    assert.ok(inbox.options.address);
  });

  it('constructor test', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there');
  })

  it('setMessgae function test', async () =>{
    await inbox.methods.setMessage('bye').send({from: accounts[0]});
  })
});



//exemple simple d'utilisation de mocha
/*class Car{

  park(){
    return 'stoped';
  }

  drive(){
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  car = new Car();
});

describe('Car Test', () =>{
  it('can park', () => {
    assert.equal(car.park(), 'stoped');
  });

  it('can drive', () =>{
    assert.equal(car.drive(), 'vroom');
  });
});*/
