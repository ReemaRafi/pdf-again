/////////////////////Chapter # 21 to 25/////////////////
/// Q = 1
var firstName = prompt("Please enter your first Name");
var lastName = prompt("Please enter your last Name");
var fullName = firstName + lastName;

console.log(fullName);
alert("Hi!\nWelcome to my page\n" + " " + fullName);

// Q = 2
var favMobile = prompt("Enter the name of your Favourite Mobile phone Model???");
document.write("My favourite phone is ; " + " " + favMobile + " " + " Length of string ;" + " " +  favMobile.length);

// Q = 3 

 var str = "Pakistani";
 console.log(str.indexOf("n"));
 document.write("String ; Pakistani<br>" + " " +  "Index of 'n'; " +  str.indexOf("n"));

 // Q = 4 

 var hello = "Hello World";
 alert(hello);
 alert("The last index of 'l' is: " + " " + hello.lastIndexOf("l"));

// Q  = 5

 var str = "Pakistani";
 document.write("String :" + " " + str + "<br>");
 str = str.charAt(3);
 document.write("characterAt index '3': " + str + "<br>");

//  Q = 6

var askGreet = prompt("What is your full name??");
var greet = "Welcome to my assigment page ";
alert(greet.concat(askGreet));

// Q = 7
var city = "Hyderabad";
alert(city);
alert("After replacing Hyder by islam:" + " " + city.replace("Hyder", "Islam"));

// Q = 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
alert(message);
alert("After replacing 'and' by '&':" + " " + message.replace(/and/g , "&"));

// Q = 9
var str = "472";
alert("The data type of " +" " +  str + " is: " + typeof str);
var change = parseInt(str);
alert("Now data type of " +" " +  str + " is: " + typeof change);

// Q = 10
var askAny = prompt("Enter any word you want to in lower case");
alert("After changing it in to upper case is: " + askAny.toUpperCase());

// Q = 11
var askAnyWord = prompt("Enter any word.");
alert("After changing: " + askAnyWord[0].toUpperCase() + askAnyWord.slice(1));

// Q = 12
var num = 36.56;
alert("Number (36.56) to string " + num*100);

// Q = 13
var username = "";
var specialSymbols = ['@', '.', '!'];
var isValid = false;

username = prompt("Enter your username:");

        for (var i = 0; i < specialSymbols.length; i++) {
            for (var j = 0; j < username.length; j++) {
                if (username[j] === specialSymbols[i]) {
                    isValid = false; 
                    alert("Invalid username! Please enter a username without special characters [@, ., !].");
                    username = prompt("Enter your username:"); // Ask again
                    j = username.length; // Exit inner loop after re-prompt
                    i = -1; // Reset outer loop to check new username
                } else {
                    isValid = true; 
                   
                    
                    
                }
            }
        }

        document.write("Username '" + username + "' is valid.");


        //Q =  14
        var bakeryItems = ["bread", "cake", "cookies", "pastry", "donut", "brownie"];

        var userInput = prompt("Enter a bakery item you want:").toLowerCase();
        var itemFound = false;

        if (userInput === "bread") {
            itemFound = true;
            alert("Yes its available on index" + bakeryItems.indexOf(userInput));
        } else if (userInput === "cake") {
            itemFound = true;
            alert("Yes its available on index" + bakeryItems.indexOf(userInput));
        } else if (userInput === "cookies") {
            itemFound = true;
            alert("Yes its available on index" + bakeryItems.indexOf(userInput));
        } else if (userInput === "pastry") {
            itemFound = true;
            alert("Yes its available on index" + bakeryItems.indexOf(userInput));
        } else if (userInput === "donut") {
            itemFound = true;
            alert("Yes its available on index" + bakeryItems.indexOf(userInput));
        } else if (userInput === "brownie") {
            itemFound = true;
            alert("Yes its available on index" + bakeryItems.indexOf(userInput));4
            
        }
        else{
            alert("Sorry its not available");
        }


// Q = 11

function validatePassword() {
    var password = prompt("Please enter your password:");

    // Initialize valid flag
    var isValid = true;
    var errorMessage = "";

    // Check if the password starts with a letter
    var firstChar = password.charAt(0);
    if (firstChar < 'A' || (firstChar > 'Z' && firstChar < 'a') || firstChar > 'z') {
        isValid = false;
        errorMessage += "Invalid password!\n1. Must start with a letter.\n";
    } 

    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        isValid = false;
        errorMessage += "Invalid password!\n2. Must be at least 6 characters long.\n";
    } 

    // Check if the password contains only letters and numbers
    for (var i = 0; i < password.length; i++) {
        const char = password.charAt(i);
        if (!(char >= '0' && char <= '9' || (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
            isValid = false;
            errorMessage += "Invalid password!\n3. Only letters and numbers allowed.\n";
            break;
        }
    }

    // Display result
    if (!isValid) {
        alert(errorMessage);
    } else {
        alert("Password is valid!");
    }
}

validatePassword();

// Q 12

var string = "University of Karachi";
var array = string.split(" "); 


for (var i = 0; i < array.length; i++) {
    var word = array[i];
    
    for (var j = 0; j < word.length; j++) {
        console.log(word[j]);
    }
    
}

// Q 13

var country = prompt("In which country do you live??");
var last = country.charAt(country.length-1);
alert("The last character of your country is " + last);


// Q 14

var paragraph = "The quick brown for jumps over the lazy dog";
var lowerParagraph = paragraph.toLowerCase();
var wordToFind = "the";
var count = 0;
// var wordLength = wordToFind.length;

for (var i = 0; i < lowerParagraph.length; i++) {
    if (lowerParagraph[i] === 't' && lowerParagraph[i + 1] === 'h' && lowerParagraph[i + 2] === 'e') {
        count++;
        i += 2;
    }
}

console.log("The word '" + wordToFind + "' appears " + count + " times in the paragraph.");

 ////////////////////////////// complete//////////////////