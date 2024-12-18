// Create a map() function that converts an array of strings into their uppercase versions.
const toUpperCaseWord = function (word) {
  return word.toUpperCase();
}

const convertToUpperCase = function (arrayOfWords) {
  return arrayOfWords.map(toUpperCaseWord)
}

console.log(convertToUpperCase(["apple", "mango"])); // expected ==> ["APPLE", "MANGO"]