const square = function (number) {
  return number * number;
}

const isEven = function (number) {
  return (number & 1) === 0;
}

const addEvenSubOdd = function (result, number) {
  const squared = square(number);

  return isEven(squared) ? result + squared : result - squared;
}

const sumOfSquares = function (listOfNumbers) {
  return listOfNumbers.reduce(addEvenSubOdd, 0);
}