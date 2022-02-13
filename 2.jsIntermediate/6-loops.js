/*
// for loop 
for(let rep = 1; rep<=10; rep+=2){
    console.log(`hello ${rep}`)
}
*/
const jonas = ["Jonas", "Schmedtmann", 
    1996,'data scientist',['Michael','Peter','Steven'], true]; 

const types = []; 

for (let i = 0; i<jonas.length; i++){
    console.log(jonas[i]);
    // filling array 
   // types[i] = typeof jonas[i] ; 

   // using push method 
   types.push(typeof jonas[i]) ; 
}

console.log(types); 
const years = [1992,2001,2021,2022,1998]; 

const calcAge = function(birthYear){
    return 2022-birthYear; 
}

const ages =[]; 
for (let i = 0; i<years.length; i++){
    ages.push(calcAge(years[i]))
}
console.log(ages); 

// prining only string
for (let i = 0; i<jonas.length; i++){
    if (typeof jonas[i] === 'string'){
        console.log(jonas[i]);
    }
}; 

// printing all the strings 
// continue means the current iteration of loop is existed and the next one start immediately; 
for (let i = 0; i<jonas.length; i++){
    if (typeof jonas[i] !== 'string') continue; 
    console.log(jonas[i]);
}; 
console.log('breaking with  number');
console.log('') 
// as soon as a number is found we need to break the loop ; 
for (let i = 0; i<jonas.length; i++){
    if (typeof jonas[i] === 'number') break; 
    console.log(jonas[i]);
}; 
