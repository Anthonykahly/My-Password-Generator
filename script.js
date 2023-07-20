// Assignment Code


var generateBtn = document.querySelector("#generate");


// Write password to the #password input


function writePassword() {
  var password = RPG();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}


// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);


// Array of possible lower case characters
var LCCA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Array of possible upper case characters
var UCCA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Array of possible special case characters
var SCA = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Array of possible numeric characters
var NCA = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Returns a random integer
function RandomGenerator(array) {
  var ArrayIndex = Math.floor(Math.random() * array.length);
  var RandomArray = array[ArrayIndex];
  return RandomArray;
}


// Creates the password based on user input


function RPG() {
  // Vars created with placeholders


  var concatArray = [];
  var mixedCharactersArray = [];


  // Variable that will return an integer as long as it is within 8 to 128 characters


  var passwordLength = parseInt
    (prompt("How long does your password need to be? (8-128 characters)")); 
  if (passwordLength < 8) {
    alert("Your password must be 8 characters or longer!")
  }
  if (passwordLength > 128) {
    alert("Your password must be 128 characters or less!")
  }


  // Variable for lower case
  var selectedLower = confirm("Do you need lowercase letters?");


  // Variable for upper case
  var selectedUpper = confirm("Do you need capital letters?");


  // Variable for special characters
  var selectedSpecial = confirm("Do you need special characters?");


  // Variable for numeric characters
  var selectedNumeric = confirm("Do you need numbers?");


  // Function for input validation


  if (!selectedSpecial &&
    !selectedNumeric &&
    !selectedLower &&
    !selectedUpper) {
    alert("You must choose at least one type of character!");
    return;
  }


  // Adds every character types-array depending on what the user selects and pushes the randomly generated response


  if (selectedSpecial) {
    mixedCharactersArray = mixedCharactersArray.concat(SCA);
  }
  if (selectedNumeric) {
    mixedCharactersArray = mixedCharactersArray.concat(NCA);
  }
  if (selectedLower) {
    mixedCharactersArray = mixedCharactersArray.concat(LCCA);
  }
  if (selectedUpper) {
    mixedCharactersArray = mixedCharactersArray.concat(UCCA);
  }


  // Iterating over passwordLength and pushing concatArray character


  for (var i = 0; i < passwordLength; i++) {
    var character = RandomGenerator(mixedCharactersArray);
    concatArray.push(character);
  }


  // returns and joins the concatinated array


  return concatArray.join('');
}
