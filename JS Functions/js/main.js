// Functions:

// Declare a function

function welcomeMessage() {
  console.log('Welcome to this JavaScript Tutorial.');
}

// Call the function
welcomeMessage();

// Parameters:

function fullName(firstname, lastname) {
  console.log("My student's name is: " + firstname + ' ' + lastname);
}

// Arguments are the actual values that are passed into the function
fullName("Matthew", "Jamieson");

// Return Statement
function convertInchesToCent(length) {
  return length * 2.54;
}

convertInchesToCent(1);

console.log(convertInchesToCent(6));

let a = convertInchesToCent(10);
console.log(a);

let rulerLength = 'A standard ruler is usually ' + convertInchesToCent(12) + ' centimetres long.';

console.log(rulerLength);