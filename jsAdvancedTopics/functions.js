
function logger(){
    console.log('My name is Jonas'); 
}

// calling // running// invoking 
function fruitProcessor(apples,oranges){
    console.log(apples,oranges); 
    const juice =  `Juice with ${apples} apples and ${oranges} oranges.`; 
    return juice; 
}

// function declaration 
function calcAge(birthYear){
    const age = 2022-birthYear; 
    return age; 
}

// function expression : anonymous function 
const calcAge2 = function(birthYear){
    return 2022-birthYear; 
}

// function can be stored in a variable 
// arrow function 
const greet = name => `hi ${name}`; 
// console.log(greet('thomas')); 


// more arrow function with explicit return statements 
const yearsUntilRetirement = birthYear => {
    const age = 2022- birthYear; 
    const retirement = 65-age; 
    return retirement; 
}
console.log(yearsUntilRetirement(1996)); 


// more arrow function with explicit return statements 
const yearsUntilRetirementName = (birthYear,firstName)  => {
    const age = 2022- birthYear; 
    const retirement = 65-age; 
    return `years for retirement for ${firstName} is ${retirement}`
}
console.log(yearsUntilRetirementName("1996",'Thomaskutty')); 



// function inside a function 
const cutPieces = fruit => 2*fruit; 
const makeJuice = function(apples,oranges){
    applePieces = cutPieces(apples); 
    oragePieces = cutPieces(oranges); 
    const outputStatement = `Juice with ${applePieces} apple pieces and ${oragePieces} orange pieces is ready !`; 
    return outputStatement; 
}
