// type conversions

const inputYear = '1996'; 
// original value is not converted 
console.log(Number(inputYear), inputYear) ; 
console.log(Number(inputYear)+18); 

console.log(Number('thomaskutty')) ;// return  NaN 
console.log(typeof NaN) ; 

// converting number to string 
console.log(String(234),234); 


// type coersions 

console.log('Iam ' + 23 + ' years old'); 
console.log("23" + "10" - 3) ; 
console.log('23' - '10' -3); 
console.log('23'*3); 
console.log('23'*"3"); 

console.log('23'/3); 
console.log('23'/"3"); 

let n  = '1'+1; 
n = n-1 ; 
console.log(n) ; 
