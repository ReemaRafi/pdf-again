//////////////// Chapter 14 to 16//////////

// Q = 1
// var emptyArray = [];
// Q # 2
// emptyArray[0] = "yes it's right";
// Q = 3
// var subject =["Maths","Urdu","English","Islamiat","Science"];
// Q = 4
// var score = [100,50,30,20];
// Q = 5
// var boolean = [true,false,true,true];
//Q = 6
// var mixed = ["Reema",30,"khi",true];
// Q =7   not don
var qualification = ["SSC","HSC","FSC","B.COM","M.COM","BSCS","PHD","M PHIL"];
// var i = 0;
// if(var i = 0; i < qualification.length; i++ ) {
//     document.write(qualification[i] + "<br");

// }
 // Q = 8
//  document.write("<br>");
//  var names = ["Sara","Reema","Hira","Ruja"];
//  var obtained = [350,398,470];
//  var total = 500;
//  document.write("score of " + " " + names[0] + " " + obtained[0] + ", " +"percentage is;" + (obtained[0] / total)*100 + "%" );
//  document.write("<br>");
//  document.write("score of " + " " + names[1] + " " + obtained[1] + ", " +"percentage is;" + (obtained[1] / total)*100 + "%" );
//  document.write("<br>");
//  document.write("score of " + " " + names[2] + " " + obtained[2] + ", " +"percentage is;" + (obtained[2] / total)*100 + "%" );
//  document.write("<br>");

 // Q = 9
//  var colors = ["blue","black","white"];
//  document.write("Current colors; " + colors + "<br>");

// var data = prompt("what color do you want to ADD at the beginning");

// colors.unshift(data);// they add the new color at the start....
// document.write("After adding a color(start); " + colors + "<br>");

// //color to add at the end
// var data1 = prompt("what color do you want to ADD at the end");

// colors.push(data1);// they add the new color at the end....
// document.write("After adding a color(end); " + colors);

// // REmove a color at the begining...
// document.write("<br>");
// var data2 = prompt("after that you want to Remove at the beginning");

// colors.shift();// they add a new color at the end
// document.write("After Remove a color(start); " + colors);

// // remove the color at the  end
// document.write("<br>");
// var data3 =  prompt("after remove the color from end");
// colors.pop(); // add a new  color at the end
// document.write("After  adding a color(end); " + colors);

// document.write('<br>');


// document.write("<br>");

// // convert the index to a number
// index = prompt("In which index number you want to add a color");
// data3 = prompt("what a color?");

// //Add the color at the specified index..
// if(index >= 0 && index <= colors.length){
//     colors.splice(index ,0, data3); // add a color in specified index
//     document.write("After adding the color at index " + index + "; " + colors);

// }
// else{
//     document.write("Invalid index enter the nmber b/w 0 and " + colors.length);
// }


// document.write("<br>");
// // prompt for an index to remove
// var indextoRemove = prompt("Which index color want to remove ???");
//  // Remove the color from specific index
//  if(indextoRemove >= 0 && indextoRemove < colors.length){
//     colors.splice(indextoRemove,1) // remove the color specific index
//     document.write("After removing the color at index " + indextoRemove + "; " + colors); 
//     } else {
//         document.write("Invalid index for removing please enter number b/w 0 and " + (colors.length - 1) + ".");

//  }


 // Q = 10
 document.write("<br>");
 var score = [345,876,456,900,124,23];
 document.write("Score");
 document.write("<br>");
 score.sort();
 document.write("After sorting ;" + score);

 // Q = 12
 var cities =["khi", "isl", "lhr", "peshawar", "Quetta"];
 document.write("cities");
 document.write("<br>");
 selectedCities = "";
 selectedCities = cities.slice(1 , 3);
 document.write(selectedCities);


 document.write("<br>");
 var arr = ["This", "is", "my", "cat"];
 document.write(arr.join());

 document.write("<br>");
 document.write("<br>");


 // Q = 13
 var devices1 = ["Keyvboard", "Mouse","Pc","monitor","Hard disk"];
 for(var i = 0; i < devices1.length; i++){
    document.write(devices1[i] + "<br>");
 }

 //  Q = 14


 document.write("<br>");
 document.write("<br>");


 var devices1 = ["Keyvboard", "Mouse","Pc","monitor","Hard disk"];
 for(var i = devices1.length - 1; i >= 0; i--){
    document.write(devices1[i] + "<br>");
 }

 // Q = 15

 document.write("<br>");
 document.write("<br>");
 // Array to store phon compinies
 var phoneCompany = ["Apple","Samsung","Tecno","Nokia"];


 // create a select element
 document.write("<Select>");


 for(var i = 0; i < phoneCompany.length; i++){
    document.write("<option>" + phoneCompany[i] + "</option>");

 }
 // close a  select element'
 document.write("</select>");


 ///////////////////complete////////////////
