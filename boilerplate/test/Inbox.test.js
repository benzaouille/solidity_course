const assert = require('assert');
const ganache = require('ganache-cli');
const option = {};
const provider = ganache.provider(option);
const Web3 = require('web3');
const web3 = new Web3(provider);






//mocha will deploy a contract --> (a transaction will occur even in the test network)
//so we need a account to do that, that why before each test we will select a account and then run the tests
//iteratively
beforeEach(() => {
  console.log('OK');
  //getAccounts is a async function so we use then to fetch the acount we want
  web3.eth.getAccounts().then(fetchedAccounts => {
      console.log("fetchedAccounts");
      console.log(fetchedAccounts);
    });
});


describe('Inbox Test',() => {
  it('deploy a contract', () =>{});
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
