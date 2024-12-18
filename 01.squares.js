//  write a function that takes a list of numbers and returns squares of all numbers
const squares = function (number) {
  return Math.pow(number, 2);
}

const listOfSquares = function (listOfNumbers) {
  return listOfNumbers.map(squares);
}