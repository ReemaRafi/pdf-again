///////////////Chapter # 17  to  20///////////
// Q # 1

var empty = [];
var arr = [0, 1 , 2 , 3];
document.write(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
document.write('<br>');
document.write(arr[1] + " " + arr[0] + " " + arr[1] + ' ' + arr[2]);
document.write("<br>");
document.write(arr[2] + " " + arr[0] + " " + arr[2] + " " + arr[1]);
document.write('<br>');
for (var i = 0; i <= 10; i++){
    document.write(i + "<br>");

}

// Q = 2

var table = prompt("Enter the number for the multiplication table");
var length = prompt("Enter the length of the multiplication table");
document.write("Multiplication table of " + table + ":<br><br>");
for (var i = 1; i <= length; i++){
    document.write(table + " X " + i + " = " + (table * i) + "<br>");
}

// Q = 3

document.write("<br>");

var fruite = ["Apple", "Banana", "Orange", "Mango"];

for(var i = 0; i < fruite.length; i++){
    console.log(fruite[i]);

}
document.write("<br>");
document.write("Element at index 0 is " + " " + fruite[0]);
document.write("<br>");
document.write("Element at index 1 is " + " " + fruite[1]);
document.write("<br>");
document.write("Element at index 2 is " + " " + fruite[2]);
document.write("<br>");
document.write("Element at index 3 is " + " " + fruite[3]);

// Q = 4

document.write('<br>');
document.write('<br>');
document.write("<h1>Forwad counting</h1>");
for(var i = 1; i <= 15; i++){
    document.write(i + "<br>");

}

document.write("<br>");
document.write("<br>");
document.write("<h1>Backward counting</h1>");
for(var i = 10; i >= 1; i--){
    document.write(i + "<br>");

}

document.write("<br>");
document.write("<br>");
document.write("<h1>Odd number</h1>");
for(var i = 1; i < 20; i += 2){
    document.write(i + "<br>");

}


document.write("<br>");
document.write("<br>");
document.write("<h1>Even number</h1>");
for(var i = 0; i <= 20; i += 2){
    document.write(i + "<br>");

}

document.write("<br>");
document.write("<br>");
document.write("<h1>Series</h1>");
for(var i = 1; i <= 20; i += 2){
    document.write(i + "k" + "<br>");

}


// Q = 

var bakery =["Cake","Apple pie","Cookie","Chips","Patties"];
var askBakery = prompt("Enter a bakery items");

var found = false;

for(var i=0; i < bakery.length; i++){
    if(bakery[i].toLowerCase() === askBakery.toLowerCase()){
        found = true;
        break;

    }

}

if (found) {
    alert("Yes ," + askBakery + " is available");
} else {
    alert("Sorry , " + askBakery + " is not available");

}

//Q = 

var numBers = [34, 89, 100, 45, 78, 443];
document.write("Numbers");

var largest = numBers[0];

for( var i = 1; i < numBers.length; i++){
    if(numBers[i] > largest);{
        largest = numBers[i];
    }

}
document.write("The largest number is; " + largest);
document.write("<br>");

// Q = 

var numBers = [34, 89, 100, 45, 78, 443];
document.write("Numbers");
var largest = numBers[0];

for(var i = 1; i < numBers.length; i++){
    if(numBers[i] < largest){
        largest = numBers[i];
    }

}

document.write("The smallest number is; " + largest);

// Q =

document.write("<br>");
for(var i = 0; i <= 100; i ++){
    if(i % 5 == 0){
        document.write(i + " ");
    }

}
////////////////COMPLETE/////////////////............