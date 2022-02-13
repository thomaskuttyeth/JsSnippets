
/*
// datatypes 
number : floating point numbers : used for decimals and integers : let age = 23
string : sequence of characters : used for text 
boolean : logical type that can only be true or false 
undefined : value taken by a variable that is not yet defined : let children; 
null: also means 'empty value' 
symbol: value that is unique and cannot be changed 
bigint : larger integers than the number type can hold 

js has dynamic typing: we do not have to manually define the data type of the value stored in a variable. 
instead data types are determined automatically. 

*/

let javascriptIsFun=true; 
console.log(javascriptIsFun); 

console.log(typeof javascriptIsFun); 
// continent is defined in another js file which is also linked to the same html file 
console.log(typeof continent);

// reassigning the javascriptIsFun variable : dynamic typing 
javascriptIsFun = 'YES' ; 
console.log(javascriptIsFun) ; 


// undefined empty variable : we can reassign the value of such variable later 
let year; 
console.log(typeof year) ; 
console.log(year) 

// bug in javascript 
console.log(typeof null) 

// let , const, var 
// var is old style 
let age = 12; 
age = 31; 
console.log(age); 


// value in a cont variable cannot be changed 
const birthYear = 1996; 
var job = 'programmer'; 
job = 'teacher'
console.log(job); 






