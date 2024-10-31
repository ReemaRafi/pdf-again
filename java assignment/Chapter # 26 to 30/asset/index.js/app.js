// Q  # 1

// user ka input

var userNum = parseFloat(prompt("Please enter a positive integer in decimal number"));
 alert("Your number is " + userNum);
// Round off

 alert("Round off of your number is " + Math.round(userNum));
// floor

 alert("Floor value of your number is " + Math.floor(userNum));
//  ceil

 alert("Ceil value of your number is " + Math.ceil(userNum));

 // Q #2

// user ka input
var userNum = parseFloat(prompt("Please enter a negative integer in decimal number"));
alert("Your number is " + userNum);
// Round off
alert("Round off of your number is " + Math.round(userNum));
// floor
alert("Floor value of your number is " + Math.floor(userNum));
//  ceil
alert("Ceil value of your number is " + Math.ceil(userNum));



// Q # 3
var userInput = parseFloat(prompt("Please enter any number + or -:"));

// Calculate the absolute value 
var absoluteValue;

if (userInput < 0) {
    absoluteValue = -userInput; 
} else {
    absoluteValue = userInput; 
}

alert("The absolute value of " + userInput + " is " + absoluteValue);

// Q # 4

var dice = Math.floor(Math.random() * 6) + 1;

alert("Random dice value is: " + dice);

// Q # 5

alert("Choose Head or Tail \nBest of luck");
var coinToss = Math.floor(Math.random() * 2) + 1;

var result;
if (coinToss === 1) {
    result = "Tail"; 
} else {
    result = "Head"; 
}
alert("You got: " + result);

// Q = 6
alert("Choose a number between 1 and 100 \nBest of luck");
var random = Math.floor(Math.random() * 100) + 1;
alert("Number you got between 1 and 100: " + random);

// Q = 7

var userInput1 = parseFloat(prompt("Enter your weight in kgs"));
alert("Your weight is: " + userInput1 + "Kilograms");

// Q = 8

var randomNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

if (userGuess === randomNumber) {
    alert("Congrats! You guessed the correct number: " + randomNumber);
} else {
    alert("Try again! The correct number was: " + randomNumber);
}