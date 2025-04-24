const leapYears = function (desiredYear) {
  // if (
  //   (desiredYear % 4 == 0 && desiredYear % 100 != 0) ||
  //   (desiredYear % 4 == 0 && desiredYear % 400 == 0)
  // ) {
  //   return true;
  // } else if (desiredYear % 100 == 0) {
  //   return false;
  // } else {
  //   return false;
  // }

  const isDiversibleByFour = desiredYear % 4 === 0;
  const isDiversibleByHundred = desiredYear % 100 === 0;
  const isDiversibleByFourHundred = desiredYear % 400 === 0;

  if (
    (isDiversibleByFour && !isDiversibleByHundred) ||
    isDiversibleByFourHundred
  ) {
    return true;
  } else {
    return false;
  }

  //   if (desiredYear % 4 == 0) {
  //     if (desiredYear % 100 != 0) {
  //       return true;
  //     } else if (desiredYear % 100 == 0) {
  //       return true;
  //     }
  //   } else if (desiredYear % 100 == 0 || desiredYear % 4 != 0) {
  //     return false;
  //   }
};

// Do not edit below this line
module.exports = leapYears;
