const square = function (number) {
  return number * number;
}

const cube = function (number) {
  return Math.pow(number, 3);
}

const isEven = function (number) {
  return (number & 1) === 0;
}

const addEvenSubOdd = function (result, num) {
  const powered = isEven(num) ? square(num) : cube(num);

  return isEven(powered) ? result + powered : result - powered;
}

const sumOfSquaresAndCubes = function (listOfNumbers) {
  return listOfNumbers.reduce(addEvenSubOdd, 0);
}