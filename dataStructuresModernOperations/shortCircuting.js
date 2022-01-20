'use strict'; 
console.log(''|| 'thomas');
console.log(true||0); 
console.log(undefined||null); 
console.log(undefined||0||'' || 'hello'||23||null); 

const restaurant ={
    name: 'stThoams',
}
restaurant.rooms = 124; 

const rooms = restaurant.rooms ? restaurant.rooms : 100; 

console.log(0 && 'jonas'); // 0 is falsy this will return falsy 
console.log(7 && 'jonas');  // operation continues till the end : return jonas 
console.log('hello' && 23 && null && 'jonas'); // operation stops at null (falsy) position and will return null 

// practical example 
if (restaurant.name){
    restaurant.poolsNumber = 23; 
}
// using && 
restaurant.name && console.log(restaurant.rooms);
// NOTE
/* || operator will return first truthy value of all operants or simply the last value 
if all of them are falsy . 
&& operator will return the first falsy value or the last value if all of them are truthy. 
*/ 

// nullish coalsce ??  ( nullish values include [null , undefined] not 0 or ''); 
restaurant.countryName = 'India'; 
const countryName = restaurant.countryName ?? 'US'; 

//================================================
// logical assignment operators

const rest1 = {
    name: 'Capri', 
    numGuests : 0,
}; 
const rest2 = {
    name: 'La Piazza', 
    owner : 'Giovanni Rossi'
}; 


rest1.numberGuests = rest1.numGuests || 10 ; 
rest2.numberGuests = rest2.numGuests || 10 ; 
// the same using 
rest1.numGuests ||= 10 ; 
rest2.numGuests ||= 10; 

// nullish  assignment operator  (null or undefined)
rest1.numGuests ??= 10 ; 
rest2.numGuests ??= 10; 

// replacing owner using && 
rest1.owner = rest1.owner && 'anonymous'; 
rest2.owner = rest2.owner && 'anonymous';

rest1.owner && 'anonymous'; 
rest2.owner && 'anonymous'; 




