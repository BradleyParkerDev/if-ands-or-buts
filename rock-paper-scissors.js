const prompt = require("prompt-sync") ({sigint: true});
let r = "rock" ;
let p = "paper";
let s = "scissors";
console.log("We are playing a game of rock-paper-scissors.\n");
let playerOneInput = prompt("Player one, please choose your hand: ")
playerOneInput = playerOneInput.toLowerCase();

let playerTwoInput = prompt("Player two, please choose your hand: ")
playerTwoInput = playerTwoInput.toLowerCase();

if(playerOneInput === playerTwoInput){
    console.log("You both had the same hand, you tied!");
}
else if(playerOneInput === r && playerTwoInput === s){
    console.log("Rock beats scissors, player one wins!");

}
else if(playerOneInput === p && playerTwoInput === r){
    console.log("Paper beats rock, player one wins!");

}
else if(playerOneInput === s && playerTwoInput === p){
    console.log("Scissors beats paper, player one wins!");

}
else if(playerTwoInput === r && playerOneInput === s){
    console.log("Rock beats scissors, player two wins!");

}
else if(playerTwoInput === p && playerOneInput === r){
    console.log("Paper beats rock, player two wins!");

}
else if(playerTwoInput === s && playerOneInput === p){
    console.log("Scissors beats paper, player two wins!");

}
