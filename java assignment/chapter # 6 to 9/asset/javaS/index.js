////////// Chapter # 6///////
///Q # 1
// var a = 10;
// document.write("<h1>Reasult</h1><br>The value of a is" + " " + a);

// document.write('<br>');

// var b = ++a;
// document.write("<h1>Reasult</h1><br>The value of ++a is" + " " + b);
// document.write('<br>');
// document.write("Now the value of a is" + " " + b);

// document.write('<br>');

// var c = --a;
// document.write("<h1>Reasult</h1><br>The value of --a is" + " " + c);
// document.write('<br>');
// document.write("Now the value of a is" + " " + c);

// document.write('<br>');
// document.write('<br>');

// var a = 2,  b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result);

// var result = --a - --b + ++b + b--;
// explantion =   1 -   0 +   1 + 1 = 3


// var name = prompt("What is your name?");
// var fatherName = prompt("What is your father name?");
// alert("Hello!" + " " + name + " " + fatherName + " " +"welcome to my page");


// document.write('<br>');
// document.write('<br>');

// var ask = prompt("Table number please");
// var number =ask || 5;
//  if (ask >= 1) {
//     for (let i =1; i <= 10; i++) {
//         table +=number + "x" + i + "=" +(number*i)+"<br>"; 
//     }
//     document.write("<h2>Table of" + number + "<br>" + table + "</h2>");
//  }
//  alert("Enter a valid number");

// document.write('<br>');
// document.write('<br>');


// var sub1 = prompt("Subject 1");
// var obt1 = prompt("obtained marks of" + " " + sub1);
// var sub2 = prompt("Subject 2");
// var obt2 = prompt("obtained marks of" + " " + sub2);
// var sub3 = prompt("Subject 3");
// var obt3 = prompt("obtained marks of" + " " + sub3);


// document.write('<h2> Subject Total Marks Obtained Marks Percentage <?h2>');
// document.write('<br>');
// document.write(sub1 + "100" + " " + obt1 + " " + obt1 + "%");
// document.write('<br>');
// document.write(sub2 + " " + " " + " " + "100" + obt2 + " " + obt2 + "%");
// document.write('<br>');
// document.write(sub1 + " " + " " + " " + "100" + " " + obt3 + " " + obt3 + "%");


// document.write("<br>");
// document.write( + " " + obt1 + obt2 + obt3 + "%");


// Collect subjects and obtained marks
// var sub1 = prompt("subject1");
// var obt1 = Number(prompt("obtained marks of " + sub1));

// var sub2 = prompt("subject2");
// var obt2 = Number(prompt("obtained marks of " + sub2));

// var sub3 = prompt("subject3");
// var obt3 = Number(prompt("obtained marks of " + sub3));

//Total Marks of each Subject
var totalMarks = 100;


//Calculation all
var totalObtained = obt1 + obt2 + obt3;
var overallPercentage = (totalObtained / (total * 3))*100;

// Display  result in Table 

document.write('<table>');
document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></th>');
document.write('<tr><td>' + sub1 + '</td><td>' + totalMarks + '</td><td>' + obt1 + '</td><td>' + ((obt1 / totalMarks)*100).toFixed(2) + '%</td></tr>');









