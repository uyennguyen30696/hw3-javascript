//  GIVEN I need a new, secure password
//     WHEN I click the button to generate a password
//     THEN I am presented with a series of prompts for password criteria
//     WHEN prompted for password criteria
//     THEN I select which criteria to include in the password
//     WHEN prompted for the length of the password
//     THEN I choose a length of at least 8 characters and no more than 128 characters
//     WHEN prompted for character types to include in the password
//     THEN I choose lowercase, uppercase, numeric, and/or special characters
//     WHEN I answer each prompt
//     THEN my input should be validated and at least one character type should be selected
//     WHEN all prompts are answered
//     THEN a password is generated that matches the selected criteria
//     WHEN the password is generated
//     THEN the password is either displayed in an alert or written to the page 

// Password length is between 8 and 128 characters.
// At least one character type should be selected (lowercase, uppercase, numeric, and/or special characters).

// Array of characters
// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var specialChar = ["~", "!", "@", "#", "$", "%", "&", "*", ".", "/", ":", ";", "<", "=", ">", "?", "_", "{", "[", "}", "]", "|"];
// var length = [0,1,2,3,4,5,6,7,8,9];

// var criteria = [lowerCase, upperCase, specialChar, number];

// use the ASCII Character Codes Table & Cheat Sheet instead

// Event listener to take value for the function
// document.addEventListener("input", generatePassword);
// document.addEventListener("click"), generatePassword;

// // Function that generates random password
// function generatePassword() {

//     // Input password length value
//     const length = document.getElementById("length").value;
//     // Checked criteria boxes
//     const lowerCase = document.getElementById("lowerCase").checked;
//     const upperCase = document.getElementById("upperCase").checked;
//     const number = document.getElementById("number").checked;
//     const specialCharacter = document.getElementById("specialCharacter").checked;

//     const password = generatePassword(length, lowerCase, upperCase, number, specialCharacter);

//     // Add generated password to display box
//     document.getElementById("display".value = password);

// }

// Array of characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["~", "!", "@", "#", "$", "%", "&", "*", ".", "/", ":", ";", "<", "=", ">", "?", "_", "{", "[", "}", "]", "|"];

var criteria = [lowerCase, upperCase, number, specialCharacter];

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

var specialCharacter = confirm("Include special characters?");
console.log(specialCharacter);

genPass(passLength, lowerCase, upperCase, number, specialCharacter);

// Create function to generate password
function genPass(passLength, lowerCase, upperCase, number, specialCharacter) {
    const password = " ";
    if (lowerCase === true) {
        genPass.push(lowerCase);
        console.log(lowerCase);
    }

    if (upperCase === true) {
        genPass.push(upperCase);
    }

    if (number === true) {
        genPass.push(number);
    }

    if (specialCharacter === true) {
        genPass.push(specialCharacter);
    }

    for (var i = 0; i < passLength; i++) {
        password = password + criteria.charAt(Math.floor(Math.random() * Math.floor(criteria.length)));
    }
}