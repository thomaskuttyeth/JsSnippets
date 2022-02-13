
const age = 18; 
if (age==18) console.log('you just became an adult'); 

// strict equality 
const value = "23"; 
if (value ===23) console.log('strictly exact match') 

if (value == 23) console.log('weakly match ')

// === does not perform type coersion 
// always use === for equality comparison 

const favorite = prompt('what is your favorite number? ')
console.log(favorite)
console.log(typeof favorite) 
// loose equality : string ;;number 
if (favorite ==13){
    console.log('weak : cool 13 is amazing number ')
}else if (favorite ==15){
    console.log('weak 17 is also cool')
}else{
    alert('why not 13 or 17? ')
}

if (favorite ===13){
    console.log('strict: cool 13 is amazing number ')
}

// !== not equal ( strict version ) 




