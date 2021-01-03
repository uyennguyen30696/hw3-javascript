// Complex version (version 2)

$(document).ready(function () {

    // $(".select2").select2();

    let lowerCase = document.querySelector("#lowerCase");
    let upperCase = document.querySelector("#upperCase");
    let number = document.querySelector("#number");
    let specialChar = document.querySelector("#special-character");

    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharArray = ["~", "!", "@", "#", "$", "%", "&", "*", ".", "/", ":", ";", "<", "=", ">", "?", "_", "{", "[", "}", "]", "|"];

    // Get random characters from the array
    function getRandom(arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        var randomChar = arr[randomIndex];
        return randomChar;
    };

    function genPass() {

        possibleArray = [];
        guaranteedArray = [];
        password = [];

        var passLength = document.querySelector("#length").value;

        var chosenChar = {
            passLength: passLength,
            lowerCase: lowerCase,
            upperCase: upperCase,
            number: number,
            specialChar: specialChar
        };

        if (lowerCase.checked) {
            possibleArray = possibleArray.concat(lowerCaseArray);
            guaranteedArray.push(getRandom(lowerCaseArray));
        };

        if (upperCase.checked) {
            possibleArray = possibleArray.concat(upperCaseArray);
            guaranteedArray.push(getRandom(upperCaseArray));
        };

        if (number.checked) {
            possibleArray = possibleArray.concat(numberArray);
            guaranteedArray.push(getRandom(numberArray));
        };

        if (specialChar.checked) {
            possibleArray = possibleArray.concat(specialCharArray);
            guaranteedArray.push(getRandom(specialCharArray));
        };

        // Iterate over the password length from the chosen characters in the possible array to the resulted password
        for (var i = 0; i < chosenChar.passLength; i++) {
            password.push(getRandom(possibleArray));
        };

        // Mix the guaranteed characters from the guaranteed array to the resulted password
        for (var i = 0; i < guaranteedArray.length; i++) {
            password[i] = guaranteedArray[i];
        };

        // Join the characters from the possible array and the guaranteed array to form the resulted password
        return password.join("");
    };

    function displayPass() {

        let display = genPass();
        let displayBox = document.querySelector("#display");
        let result = displayBox.textContent = display;

        let clipboard = document.querySelector("#clipboard");
        clipboard.addEventListener("click", function () {
            let textarea = document.createElement("textarea");
            textarea.textContent = result;

            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            if (!result) {
                return;
            };
            alert('Password copied to clipboard');
        });

        if (lowerCase.checked === false &&
            upperCase.checked === false &&
            number.checked === false &&
            specialChar.checked === false) {
            $("#alert").text("* Password must contain at least one character type.");
        };
    };

    $("#generate").on("click", function (event) {
        event.preventDefault();
        $("#alert").text("");
        displayPass();
    });
});
