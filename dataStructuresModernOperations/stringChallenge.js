// write a program that receives a list of variable names written in underscore_case and convert them to camelcase

// the input will come from a textarea inserted into the DOM and conversion will happen when the button is pressed.

/*
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"🟡".repeat(i + 1)}`);
  }
});

const getCode = str => str.slice(0,3).toUpperCase(); 

// final 
const flights = 
'_Delayed_Departure;fao93788109;tx12133847532;11:25+_Arrival;bru2412413;fao12134124;11:45+_Delayed_Arrival;hel123143;fao2524;12:05+_Departure;fao49894523;lis234124;12:30'; 

console.log(flights.split('+'));
for (const flight of flights.split('+')){
  const [type,from,to,time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑': ' '} ${type.replace('_',' ')} ${getCode(from)} ${getCode(to)} ${time.replace(':','h')}`
  console.log(output.padStart(40));
}
