// sarah has drivers license 
// sarah has good vision 
// condition1 and condition2 

const hasDriversLicense = true ; 
const hasGoodVision = false ; 

console.log('license = '+ hasDriversLicense+'----vision: '+ hasGoodVision ); 
console.log('and output ', hasDriversLicense && hasGoodVision) ; 
console.log('or output ',hasDriversLicense ||  hasGoodVision) ; 
console.log('not of hasdriverslicense', ! hasDriversLicense ) ; 


const shouldDrive = hasGoodVision && hasDriversLicense ; 

if (shouldDrive){
    console.log('sarah should drive')
}else{
    console.log('someone else should drive')
}

