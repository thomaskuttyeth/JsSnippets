const myage = 25; 
const drink = myage>=18? 'wine' : 'water'; 
// console.log(drink) 
const billValue = 430; 
const tip = (billValue>=50 && billValue <=300)? billValue*(15/100):billValue*(20/100) ; 
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`)
