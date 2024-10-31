/////////Chapter 5/////////////
// Q = 1
var numberOne = 5;
var numberTwo = 3;
var total = numberOne + numberTwo; 
document.write("Sum of " + "  " + numberOne + " + "+ numberTwo + " " + "is" + " " + total);

document.write('<br>');

//Q = 2
var numberOne = 50;
var numberTwo = 30;
var toTal = numberOne - numberTwo ;
document.write("The Subtraction of" + " " + numberOne + "-" + numberTwo + " " + "is"+ " " + toTal);

document.write('<br>')

var numberOne = 60;
var numberTwo = 2;
var total = numberOne * numberTwo ;
document.write("The multiplication of " + " " + numberOne + "*" + numberTwo + " " + "is" + " " + total);

document.write('<br>');

var numberOne = 100; 
var numberTwo = 10;
var total = numberOne / numberTwo;
document.write("The division of " + " " + numberOne + "/" + numberTwo + " " + "is" + " " + total);

document.write("<br>");

var numberOne = 50; 
var numberTwo = 33;
var total = numberOne % numberTwo;
document.write("The division of " + " " + numberOne + "%" + numberTwo + " " + "is" + " " + total);

document.write("<br>");


document.write("<br>");
document.write("<br>");


// Q =3   A
 var number = 5;
 document.write("Initial value is " + number);

 document.write("<br>");

// Q = 3   B 
var incre = ++number;
document.write("<br>");

document.write("<br>");

// Q = 3  C
var add = incre + 5;
document.write("Value after addition is" + add);

document.write("<br>");

// Q =3   D
var decre = --add;
document.write("Decrement value is " + decre);

document.write("<br>");

var mod = decre % 4;
document.write("The reminder is " + mod);

document.write("<br>");
document.write("<br>");


var movieTicket = 600;
var persons = 5;
document.write("Total cost to buy " + persons + " tickets to a movie is" + " " + persons*movieTicket);

document.write("<br>");
document.write("<br>");

// table

var ask = prompt("Table number please");
var number = ask;
var table = "";


for (let i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "<br>";
}
document.write("<h2>Table of " + number + ":<br>" + table + "</h2>");

document.write('<br>');
document.write('<br>');

// temp

var celsiusTemp = prompt("celsiusTemperature please");

var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
console.log(celsiusTemp + "C" + " " + "is" + " " + fahrenheitTemp + "F");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp = prompt("cfahrenheitTemperature please");

// d. Convert it to Celsius & output "NNoF is NNOC".
celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
console.log(fahrenheitTemp + "F" + " " + "is" + " " + celsiusTemp + "C");


///////////////////////////Complete//////////////////////////