//Creating an object to have the 4 different characters togerther
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

  for (var i = 0; i <= characterLength; i++) {
    pass += pass.charAt(Math.floor(Math.random() * passwordCharacters.Length));
  }

  // for (var i = 0; i <= characterLength; i++) {
  //   function passRandom(pass) {
  //     return Math.floor(Math.random() * pass);
  //   }
  // }
  return pass;
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


// Initiate a for loop to iterate through the number of password characters declared in characterLength prompt

  // Inside the for loop consider using Math.random() to randomize an array index
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  // Access the array index using bracket notation Example: lowercaseCharacters[4] 
  // In this example 4 could be replaced by a variable that was randomly generated
  // You could create an empty array and use the push method (An array method) to add each character
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  // Then use another array method (join) to stringify them
  // Try searching join in the mozilla (MDN) documentation
//If you had say newPassword = [] for the array. You could use something like  return newPassword.join()










// for (var i = 0; i <= passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() * chars.length);
//   password += chars.substring(randomNumber, randomNumber +1);
// }