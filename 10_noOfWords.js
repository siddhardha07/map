const countWords = function (string) {
  return string.split(" ").length;
}

const wordCountInSentences = function (listOfSentences) {
  return listOfSentences.map(countWords);
}