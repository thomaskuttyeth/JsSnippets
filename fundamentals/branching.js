const age =8; 
const isOldEnough = age>=18; 

if (isOldEnough){
    console.log("sarah can start apply for drivers licence") ; 
}else{
    console.log('cannot apply for license'); 
    const yearsLeft = 18-age; 
    console.log(`years left = ${yearsLeft}`) ; 
}; 

const birthYear = 1996; 
let century; 
if (birthYear <=2000){
    century = 20; 
}else{
    century = 21; 
}
console.log(century + " 😁") 

