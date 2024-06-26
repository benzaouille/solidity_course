pragma solidity ^0.4.17;

contract Lottery{
  address public manager;
  address[] public players;

  function Lottery() public{
    manager = msg.sender;
  }

  function enter() public payable{
    require(msg.value > .01 ether);
    address.push(msg.sender);
  }

  function pickWinner() public restricted {
    //require(msg.sender == manager) // not needed anymore because of the restricted

    const index = random() % players.length;
    players[index].transfer(this.balance);
    players = new address[](0);
  }
  function random() private view return (uint){
    return uint(keccak256(block.difficulty, now, players));
  }

  modifier restricted(){
    require(msg.sender == manager);
    _;
  }

  function getPlayers() view return (address[])
  {
    return players;
  }
}
