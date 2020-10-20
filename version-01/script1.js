// Simple version (version 1)
// Password is shown in console

// Array of characters
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharArray = ["~", "!", "@", "#", "$", "%", "&", "*", ".", "/", ":", ";", "<", "=", ">", "?", "_", "{", "[", "}", "]", "|"];

var criteria = [ ];

// Choose password length
var passLength = parseInt(prompt("Choose your password length from 8 to 128 characters"));

// Make sure user enter the passLength from 8 to 128 characters
if (passLength < 8 || passLength > 128) {
    alert("Please enter your password length between 8 to 128 characters!");
}
else {
    console.log("Password length = " + passLength);
}

// Confirm the criteria options
var lowerCase = confirm("Include lower case letters?");
console.log("Include lower case: " + lowerCase);

var upperCase = confirm("Include upper case letters?");
console.log("Include upper case: " + upperCase);

var number = confirm("Include numbers?");
console.log("Include number: " + number);

var specialChar = confirm("Include special characters?");
console.log("Include special characters: " + specialChar);

var password = [];

// Create function to generate password by selected criteria
function genPass() {
    // Push each of the criteria in the criteria array
    if (lowerCase === true) {
         criteria.push(lowerCaseArray);
        for(let j = 0; j< lowerCaseArray.length; j++){
            criteria.push(lowerCaseArray[j])
        }
    }

    if (upperCase === true) {
         criteria.push(upperCaseArray);
        for(let j = 0; j< upperCaseArray.length; j++){
            criteria.push(upperCaseArray[j])
            }
        }

    if (number === true) {
         criteria.push(numberArray);
        for(let j = 0; j< numberArray.length; j++){
            criteria.push(numberArray[j])
            }
        }

    if (specialChar === true) {
         criteria.push(specialCharArray);
        for(let j = 0; j< specialCharArray.length; j++){
            criteria.push(specialCharArray[j])
            }
        }
}

genPass();
console.log(criteria);

for (var i = 0; i < passLength; i++) {
    var randomCriteria = Math.floor(Math.random() * criteria.length);
    // Randomly pick from criteria array that already includes all criteria
    password.push(criteria[randomCriteria]);
}

console.log("Password: " + password.toString().replace(/,/g, ''));