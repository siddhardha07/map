//  write a function that takes a list of numbers and returns square root of all numbers
const squareRoot = function (number) {
  return Math.sqrt(number);
}

const listOfSquareRoots = function (listOfNumbers) {
  return listOfNumbers.map(Math.sqrt());
}