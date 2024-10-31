/////// Chapter # 9-11
// Q # 1
// var city = prompt("In which city you live?\nHint karachi");
// if(city === "Karachi"){
//     alert("Welcome to the city of lights");
// }
// else {
//     alert("Sorry Invalid city");
// }


//Q # 2

// var gender = prompt("What is your gender?\nHint: Male or Female");
// var gender =("Male");
// var gender =("Female");

// if(gender==="Male"){
//     alert("Good Morning Sir");
// }
// else if(gender==="Female"){
//     alert("Good Morning Maam");
// }
// else {
//     alert("Invalid");
// };
//Q # 3

// var color = prompt("Insert any color of traffic signal\n Hint : Red or Yellow or Green");
// var color =("Red");
// var color=("Yellow");
// var color=("Green");

// if(color === "Red"){
//     document.write("Must stop");

// }
// else if(color === "Yellow"){
//     document.write("Ready to move");
// }
// else if(color === "Green"){
//     document.write("Move Now");
// }
// else{
//     alert("Invalid");
// };


//Q = 4

// var fuel = prompt("Remaining fuel in your Car\n Hint:Answer in Liters");
// if(fuel >= 0.5 || "0.5 Liters"){
//     alert("Please refill the fuel inyour car");
// }
// else{
//     alert("Good you are good to go");

// }
// Q

// var a = 4;
// if(++a === 5){
//     alert('Given condition for variable a is true'); true

// }


// var b = 82;
// if(b++ === 83){
//     alert("Given condition for variable b is true");  // false

// }


// var c = 12;
// if(c++ === 13){
//     alert("Condition 1 is true"); // false

// }

// if(c === 13){
//     alert("condition 2 is true"); // true

// }

// if(++c < 14){
//     alert("Condition 3 is true"); // false

// }

// if( c === 14){
//     alert("Condtion 4 is true"); // false

// }


// var materialCost = 20000;
// var laborCost = 2000;
// var total = materialCost + laborCost;
// console.log(total);

// if(total = materialCost+laborCost){
//     alert("The cost is equal");

// }

// if(true){
//     alert("True");

// }

// if(false){
//     alert("False");
// }


// if("car" < "cat"){
//     alert("car is smaller than cat");

// }


// var sub1 = parseInt(prompt("Enter your obtained marks in maths"));
// var sub2 = parseInt(prompt("Enter your obtained marks in english"));
// var sub3 = parseInt(prompt("Enter your obtained marks in urdu"));
// var totalMarks = 300;
// obtainedmarks = sub1 + sub2 + sub3;
// var parcentage = (obtainedmarks/totalMarks)*100;

// document.write("<h2>COMMENTS BY SUBJECT</h2>");

// if( sub1 >= 80){
//     alert("Grade = A One in maths");
//     document.write("Maths = Excellent in maths");
// }

// if( sub1 >= 70){
//     alert("Grade = A in maths");
//     document.write("Maths = GOOD in maths");
// }

// if( sub1 >= 60){
//     alert("Grade = B in maths");
//     document.write("Maths = Need to improve in maths");
// }

// else if( sub1 <= 60){
//     alert("Grade = Fail in maths");
//     document.write("Maths = SORRY you are fail in maths");
// }

// new
// document.write("<br>");

// if(sub2 >=80){
//     alert("Grade A-ONE Excellent in English");
//     document.write("English = Excellent in English");
// }
// if( sub2 >= 70){
//     alert("Grade = A One in English");
//     document.write("English = GOOD in English");
// }
// if(sub2 >= 60){
//     alert("Grade = B in English");
//     document.write("English = Need to improve in English");

// }
// else if( sub1 <= 60){
//     alert("Grade = Fail in English");
//     document.write("English = SORRY you are fail in English");
// }
// new 
// document.write("<br>");

// if(sub3 >=80){
//     alert("Grade A-ONE in urdu");
//     document.write("Urdu = Excellent in urdu");

// }
// if( sub2 >= 70){
//     alert("Grade = A One Urdu");
//     document.write("English = GOOD in Urdu");
// }
// if(sub2 >= 60){
//     alert("Grade = B in urdu");
//     document.write("English = Need to improve in urdu");

// }
// else if( sub1 <= 60){
//     alert("Grade = Fail in urdu");
//     document.write("English = SORRY you are fail in urdu");
// }



// document.write("<br>");
// document.write("<h2>Mark Sheet</h2>");
// document.write("<h4>Total Marks;${total Marks}</h4>");
// document.write('<h4 style="display:inline-block">Marks Obtained: ${obtainedMarks}</h4>');
// document.write("<br>");
// document.write('<h4 style="display:inline-block">Percentage: ${percentage}%</h4>');


// document.write("<br>");

// if(parcentage>=80){
// document.write("Grade = A-one");
// document.write("<br>");
// document.write("comment =Excellent");
// }

// else if(parcentage>=70){
//     document.write("Grade = A");
//     document.write("<br>");
//     document.write("comment = Good");
//     }

// else if(parcentage>=60){
//         document.write("Grade = B");
//         document.write("<br>");
//         document.write("comment = Need to improve");
//     }
// else if(parcentage<=60){
//     document.write("Grade = Fail") 
//     document.write("<br>");
//     document.write("comment =Sorry you are fail");
// }

 // Q =
 // var secNum = 7;

// prompt the userto guess the number

// var userGuess = parseInt(prompt("Guess the seceret number between 1 to 10:"));
// if(userGuess === secNum){
//     alert("Excellent ! You are right good luck");
// }
// else if (userGuess === secNum + 1 || userGuess === secNum - 1){
//     alert("You are too close!");
// }
// else {
//     alert("Try again");
// }

// Q =
// var check3 = prompt("Select any number");
// if(check3 % 3 === 0 ){
//     alert("It is divisible by 3");

// }
// else {
//     alert("It is not divisible by 3")
// }

  //Q =
//   var check2 = prompt("Enter a number");
//   if(check2 % 2 === 0){
//     alert("The number is Even");

//   }
//   else{
//     alert("The number is Odd");
//   }

//Q =

// var temp =prompt("Enter Temperature please");
// if(temp >= 40){
//     alert("It is too Hot");

// }
// else if(temp >= 30){
//     alert("Normal weather Today");

// }
// else if(temp >= 20){
//     alert("Today is Cool");

// }
// else if(temp>=10){
//     alert("Oh Its tooo Cool");

// }
// else{
//     alert("Invalid Data");
// }

//Q =

// var askNum = prompt("Engter your First number");
// var askNum1 = prompt("Enter your sign\n Hint; + , - , %, *, /, ");
// var askNum2 = prompt("Enter your second number");
// var result = ""

// if(askNum1 === "+"){
//     result =askNum1 + askNum2
// }
// else if(askNum1 === "-"){
//     result =askNum1 - askNum2
// }
// else if(askNum1 === "%"){
//     result =askNum1 % askNum2
// }
// else if(askNum1 === "*"){
//     result =askNum1 * askNum2
// }

// else if(askNum1 === "/"){
//     result =askNum1 / askNum2
// }
// else{
//     alert("Invalid action.pleas enter +,-,*,%,/");
// }

// alert(result);
// document.write("result")
