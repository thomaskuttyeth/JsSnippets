'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//function
const findAmplitude = function (temperatures) {
  let minTemp = temperatures[0];
  let maxTemp = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    // avoiding the string type values in the temperatures array ;
    if (typeof temperatures[i] !== 'number') continue;

    // for finding the minimum
    if (minTemp > temperatures[i]) {
      minTemp = temperatures[i];
    }
    // for finding the maximum
    if (maxTemp < temperatures[i]) {
      maxTemp = temperatures[i];
    }
  }
  // finding the difference between max and min = amplitude
  const amplitude = maxTemp - minTemp;
  console.log(amplitude);
  return amplitude;
};

const printForecast = function (maxTemps) {
  let strOutput = '';

  for (let indx = 0; indx < maxTemps.length; indx++) {
    strOutput += maxTemps[indx] + ' celcius in ' + indx + 1 + ' days ... \n';
  }
  return strOutput;
};
console.log(printForecast(temperatures));
