// You have an array of objects representing people, each with name and age. Your task is to:

// ==> Extract the name of each person and return a new array of names in uppercase.
// ==> Make sure to only include people whose age is 18 or older.
//  input = [ { name: "Alice", age: 20 }, { name: "Bob", age: 17 }, { name: "Charlie", age: 25 } ]

const areAdults = function (details) {
  return details.age >= 18;
}

const getNameInUpperCase = function (details) {
  return details.name.toUpperCase();
}

const representAdults = function (listOfPeople) {
  return listOfPeople.filter(areAdults).map(getNameInUpperCase);
}