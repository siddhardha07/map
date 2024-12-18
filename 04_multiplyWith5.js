//  You have an array of numbers. Your task is to use map to multiply each number by 5.
const multiplyWith5 = function (number) {
  return number * 5;
}

const multiplesOf5 = function (listOfNumbers) {
  return listOfNumbers.map(multiplyWith5);
}

