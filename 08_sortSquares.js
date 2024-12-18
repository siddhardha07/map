const ascendingOrder = function (listOfNumbers) {
  return listOfNumbers.slice().sort(function (element1, element2) {
    return element1 - element2;
  });
}

const squares = function (number) {
  return number * number;
}

const sortAndSquare = function (listOfNumbers) {
  return ascendingOrder(listOfNumbers).map(squares);
}