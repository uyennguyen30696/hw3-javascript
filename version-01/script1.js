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
console.log(passLength);

// Confirm the criteria options
var lowerCase = confirm("Include lower case letters?");
console.log(lowerCase);

var upperCase = confirm("Include upper case letters?");
console.log(upperCase);

var number = confirm("Include numbers?");
console.log(number);

var specialChar = confirm("Include special characters?");
console.log(specialChar);

var password = [];

// Create function to generate password by selected criteria
function genPass() {
    
    if (lowerCase === true) {
        // criteria.push(lowerCaseArray);
        for(let j = 0; j< lowerCaseArray.length; j++){
            criteria.push(lowerCaseArray[j])
        }
    }

    if (upperCase === true) {
        // criteria.push(upperCaseArray);
        for(let j = 0; j< upperCaseArray.length; j++){
            criteria.push(upperCaseArray[j])
            }
        }

    if (number === true) {
        // criteria.push(numberArray);
        for(let j = 0; j< numberArray.length; j++){
            criteria.push(numberArray[j])
            }
        }

    if (specialChar === true) {
        // criteria.push(specialCharArray);
        for(let j = 0; j< specialCharArray.length; j++){
            criteria.push(specialCharArray[j])
            }
        }
}
var passwordLength = passLength + 1;

console.log("password",password);

// Call function
genPass();
console.log(criteria);
console.log(passLength);

for (var j = 0; j < passwordLength -1; j++) {
    var random = Math.floor(Math.random() * criteria.length);
    console.log(random);
    password.push(criteria[random]);
}

console.log(password.toString().replace(/,/g, ''));

// Add generated password to display box
// document.getElementById("display".value = password);
// document.addEventListener("click"), generatePassword;