'use strict';
/*
const x = 23;
if (x === 23) console.log(23);

const calAge = birthYear => 2022 - birthYear;
*/
// instlling prettier
// configuring the prettier
// user snippets
// use strict
// format on save option
//NOTE
//storing the tempertures
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
//findAmplitude(temperatures);
// console.table(expression); 

// codingChallenge; 
// input : a n dimensional array with temperatures 
// need to log each element one by one in to the console 


const printForecast = function(maxTemps){
    let strOutput =''; 
    // using for loop: printing each temp one by one with the index number; 
    for (let indx =0; indx<maxTemps.length ; indx++){
        strOutput+= maxTemps[indx] +' celcius in ' +indx+1 + ' days ... ';
    }
    return strOutput 
}

console.log(printForecast([17,21,23]));



