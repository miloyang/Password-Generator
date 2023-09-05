// Assignment code here

var passwordCharacters = {
  "lowercaseCharacters": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "uppercaseCharacters": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  "numericCharacters": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  "specialCharacters": ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
};

function generatePassword() {
  var characterLength = window.prompt("Enter the number of character required. (Min - 8, Max - 128)");
  //Once user has entered a number between 8-128, continue 
  //If user has entered a number less than 8, or more than 128, show alert ("Invalid number, please enter a number between 8 - 128 only.")

  if (characterLength < 8 || characterLength > 128) {
    return alert("Invalid number. Please enter a number between 8 - 128 only.")
  }

  var confirmLowercase = window.confirm("Do you require lowercase characters?");
  var confirmUppercase = window.confirm("Do you require uppercase characters?");
  var confirmNumeric = window.confirm("Do you require numeric characters?");
  var confirmSpecial = window.confirm("Do you require special characters?");

  if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
    return alert("Invalid input. Please select at least one type of character.")
  }

  var pass = [];

  if (confirmLowercase === true) {
    pass = pass.concat(passwordCharacters.lowercaseCharacters);
  }

  if (confirmUppercase === true) {
    pass = pass.concat(passwordCharacters.uppercaseCharacters);
  }

  if (confirmNumeric === true) {
    pass = pass.concat(passwordCharacters.numericCharacters);
  }

  if (confirmSpecial === true) {
    pass = pass.concat(passwordCharacters.specialCharacters);
  }
//console.log(pass);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
