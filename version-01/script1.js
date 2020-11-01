// Simple version (version 1)
// Password is shown in console

// Array of characters
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["~", "!", "@", "#", "$", "%", "&", "*", ".", "/", ":", ";", "<", "=", ">", "?", "_", "{", "[", "}", "]", "|"];

// Function for user input
function userInput() {

    // Choose password length
    var passLength = parseInt(
        prompt("Choose your password length from 8 to 128 characters")
    );
    console.log(passLength);

    // Conditional check if passLength is a number
    if (isNaN(passLength) === true) {
        alert("Password length must be a number.");
        return;
    }

    if (passLength < 8 || passLength > 128) {
        alert("Please enter your password length between 8 to 128 characters!");
        return;
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

    // If none of the criteria is chosen
    if (lowerCase === false &&
        upperCase === false &&
        number === false &&
        specialChar === false) {
            alert("Password must contain at least one character type.");
            return;
        }

    // Create an object to store user input
    var chosenChar = {
        passLength: passLength,
        lowerCase: lowerCase,
        upperCase: upperCase,
        number: number,
        specialChar: specialChar
    };
    return chosenChar;
    
}

// Get random characters from the array
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomChar = arr[randomIndex];
    return randomChar;
}

// Generate password from user input
function genPass() {

    var chosenChar = userInput();

    // Possible array
    possibleArray = [];

    // Guaranteed array
    guaranteedArray = [];

    // Final result password
    password = [];

    // Join the chosen input in the possibleArray
    // Push the random characters from the chosen character type array to the guaranteed array
    if (chosenChar.lowerCase) {
        possibleArray = possibleArray.concat(lowerCaseArray);
        guaranteedArray.push(getRandom(lowerCaseArray));

    }

    if (chosenChar.upperCase) {
        possibleArray = possibleArray.concat(upperCaseArray);
        guaranteedArray.push(getRandom(upperCaseArray));

    }

    if (chosenChar.number) {
        possibleArray = possibleArray.concat(numberArray);
        guaranteedArray.push(getRandom(numberArray));

    }

    if (chosenChar.specialChar) {
        possibleArray = possibleArray.concat(specialCharArray);
        guaranteedArray.push(getRandom(specialCharArray));

    }

    // Iterate over the password length from the chosen characters in the possible array to the resulted password
    for (var i = 0; i < chosenChar.passLength; i++) {
        password.push(getRandom(possibleArray));
    }
    // Mix the guaranteed characters from the guaranteed array to the resulted password
    for (var i = 0; i < guaranteedArray.length; i++) {
        password[i] = guaranteedArray[i];
    }

    // Join the characters from the possible array and the guaranteed array to form the resulted password
    return password.join("");
}

// Display the generated password in the card by clicking button

var generateButton = document.querySelector("#generate");

function displayPass() {
    var password = genPass();
    var passwordDisplay = document.querySelector("#password");
    passwordDisplay.value = password;
}

generateButton.addEventListener("click", displayPass);
