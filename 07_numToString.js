const convertToString = function (number) {
  return number + "";
}

const convertNumsToStrings = function (listOfNumbers) {
  return listOfNumbers.map(convertToString);
}