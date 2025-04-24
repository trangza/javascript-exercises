const sumAll = function (firstNumber, finalNumber) {
  if (!Number.isInteger(firstNumber) || !Number.isInteger(finalNumber))
    return "ERROR";
  if (firstNumber < 0 || finalNumber < 0) return "ERROR";
  if (firstNumber > finalNumber) {
    const temp = firstNumber;
    firstNumber = finalNumber;
    finalNumber = temp;
  }

  let sum = 0;
  for (let i = firstNumber; i <= finalNumber; i++) {
    sum += i;
  }
  return sum;
  //   let currentNumber = firstNumber;

  //   let currentSum = 0;

  //   for (i = firstNumber; i <= finalNumber; i++) {
  //     currentSum += i;
  //   }
  //   return currentSum;
};
//   if (
//     firstNumber ||
//     finalNumber < 0 ||
//     typeof firstNumber ||
//     typeof finalNumber != "number"
//   ) {
//     return "ERROR";
//   }
// Do not edit below this line
module.exports = sumAll;
