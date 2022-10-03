// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  // confirm("Use lowercase characters?");
  // confirm("Use uppercase characters?");
  // confirm("Use numbers?");
  // confirm("Use special characters?");


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Password length (between 8 and 128 characters)");
  //passwordText.value = '';
  console.log("This is the value I entered. '" + passwordLength + "'");

  if (passwordLength === null) {
   passwordText.value = '';
  } else if (passwordLength === "") {
   console.log("Please enter a value.")
  } else if (isNaN(passwordLength)) {
   console.log("Not a number");
  } else if (passwordLength - Math.floor(passwordLength) !== 0) {
   console.log("This is not a whole number");
  } else if (8 > passwordLength || passwordLength > 128) {
   console.log("Number was not in given range");
  } else {
   console.log("Valid format");
   var passLowercaseTrue = confirm("Use lowercase characters?");
   var passLowercase = 'abcdefghijklmnopqrstuvwxyz';
   var passUppercaseTrue = confirm("Use uppercase characters?");
   var passUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   var passNumbersTrue = confirm("Use numbers?");
   var passNumbers = '0123456789'
   var passSpecCharsTrue = confirm("Use special characters?");
   var passSpecChars = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~' + "'";
   if (passLowercaseTrue == false && passUppercaseTrue == false && passNumbersTrue == false && passSpecCharsTrue == false) {
    console.log("A criteria was not selected")
   } else {
    var passCharacters = '';
    if (passLowercaseTrue) {
      var passCharacters = passCharacters + passLowercase;
      console.log(passCharacters);
    } 
    if (passUppercaseTrue) {
      var passCharacters = passCharacters + passUppercase;
      console.log(passCharacters);
    }
    if (passNumbersTrue) {
      var passCharacters = passCharacters + passNumbers;
      console.log(passCharacters);
    }
    if (passSpecCharsTrue) {
      var passCharacters = passCharacters + passSpecChars;
      console.log(passCharacters);
    }
    console.log("Here's a password");
   }
  }
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
      password += passCharacters.charAt(Math.random() * password.length);
    }
    console.log(password);
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
