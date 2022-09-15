const prompt = require("prompt-sync") ({sigint: true});
let pinCode = 1234;
console.log("The lock-box has a four digit pin code.");
let userInput = Number(prompt("Please enter a pin code: "));

if(userInput === pinCode){
    console.log("Success!")
}
else{
    console.log("Failure!")
}
