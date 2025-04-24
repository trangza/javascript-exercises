const removeFromArray = function (targetArray, ...targetArg) {
  const newArray = [];
  targetArray.forEach((item) => {
    if (!targetArg.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
