const convertToCelsius = function (tempInFahrenheit) {
  const fiveNine = 5 / 9;
  let tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  return Math.round(tempInCelsius * 10) / 10;
};

const convertToFahrenheit = function (tempInCelsius) {
  const fiveNine = 5 / 9;
  let tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
  return Math.round(tempInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
