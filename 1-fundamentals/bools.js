console.log(Boolean(0));  // 0 is referred to as false 
console.log(Boolean(undefined));  // undefined is always flase 
console.log(Boolean('Thomas')); // any string that is not an empty string is true 
console.log(Boolean(1));  // 1 is referred to as true
console.log(Boolean(''));   // empty string is always flase 
console.log(Boolean(NaN));  // nan is always false 
console.log(Boolean(null));  // null is always flase 

// there are five flasy values in javascript
// all others are truthy values 

// type coersion 
const money = 0 ; 
// here js trying to coerse any value into boolean 
if (money){ // just like boolen(0) 
    console.log('dont spend it all') ;
}else{
    console.log('you should get a job') 
}

// here money has value 0 but in the logistical context it has got the value of false \

// checking whether a variable is defined or not 
let height; 

// here height is undefined 
if (height){
    console.log('it is defined') 
}else{
    console.log('height is not defined')
}



