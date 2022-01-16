
let rep = 1
while (rep <=10){
    console.log(`hello ${rep}`)
    rep ++; 
}

// rolling dies till get a 6; 
let dice = Math.trunc(Math.random()*6)+1; 
console.log(dice); 

// while loop does not necessarily need a counter ; 
while (dice !== 6){
    console.log(`You rolled a ${dice}`); 
    dice = Math.trunc(Math.random()*6)+1; 
    if (dice ===6) console.log('loop is about to end ...');
}; 
