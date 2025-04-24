const repeatString = function (word, repeatCount) {
  let repeatedWord = "";
  for (i = 0; i < repeatCount; i++) {
    repeatedWord += word;
  }
  if (repeatCount < 0) {
    repeatedWord = "ERROR";
  }
  return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
