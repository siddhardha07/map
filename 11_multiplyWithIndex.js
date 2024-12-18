const multiplyWithIndex = function (number, index) {
  return number * index;
}

const multiplyNumWithItsIndices = function (listOfNumbers) {
  return listOfNumbers.map(multiplyWithIndex);
}