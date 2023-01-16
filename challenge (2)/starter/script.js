// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


// Function to generate password with user input
function generatePassword() {
  var password = "";
  var possibleCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  var length = Math.floor(Math.random() * (64 - 10 + 1) + 10);

  for (var i = 0; i < length; i++) {
    var randomCharacter = getRandom(possibleCharacters);
    password += randomCharacter;
  }

  var atLeastOneSpecialChar = false;
  var atLeastOneNumericChar = false;
  var atLeastOneLowerCaseChar = false;
  var atLeastOneUpperCaseChar = false;

  for (var i = 0; i < password.length; i++) {
    if (!atLeastOneSpecialChar && specialCharacters.includes(password[i])) {
      atLeastOneSpecialChar = true;
    } else if (!atLeastOneNumericChar && numericCharacters.includes(password[i])) {
      atLeastOneNumericChar = true;
    } else if (!atLeastOneLowerCaseChar && lowerCasedCharacters.includes(password[i])) {
      atLeastOneLowerCaseChar = true;
    } else if (!atLeastOneUpperCaseChar && upperCasedCharacters.includes(password[i])) {
      atLeastOneUpperCaseChar = true;
    }
  }

  if (!atLeastOneSpecialChar) {
    password = getRandom(specialCharacters) + password.slice(1);
  }
  if (!atLeastOneNumericChar) {
    password = getRandom(numericCharacters) + password.slice(1);
  }
  if (!atLeastOneLowerCaseChar) {
    password = getRandom(lowerCasedCharacters) + password.slice(1);
  }
  if (!atLeastOneUpperCaseChar) {
    password = getRandom(upperCasedCharacters) + password.slice(1);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);