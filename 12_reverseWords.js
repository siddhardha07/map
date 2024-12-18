const isEven = function (number) {
  return (number & 1) === 0;
}

const isEvenOrOdd = function (number) {
  return isEven(number) ? "even" : "odd"
}

const mapOddOrEven = function (listOfNumbers) {
  return listOfNumbers.map(isEvenOrOdd);
}

const isDivisibleBy3 = function (number) {
  return number % 3 === 0;
}

const numbersDivisibleBy3 = function (listOfNumbers) {
  return listOfNumbers.filter(isDivisibleBy3);
}