
const friends = ['Michael','Steven','Peter'];
console.log(friends); 

//push method : adding elements at the end 
const newLength = friends.push('martin'); 
console.log(friends); 
console.log(newLength); 

// unshift : adding elements at the beginning 
friends.unshift('Maria'); 
console.log(friends); // returns the length of the modified array 

// pop : remove elements from array : opposite of push 
friends.pop(); // removing the last element 
// pop returns the removed element 
const popped = friends.pop()
console.log('popped =',popped)
console.log(friends); 

// shift: removing elements from the beginning 
friends.shift(); 
console.log(friends); 

// adding elements at particular position 
console.log(friends.indexOf('Steven')); 

// non present element 
console.log(friends.indexOf('thomas')); 

// if an element is in the array or not : this following the strict equality :
// i.e does not perform the type coersion 
console.log(friends.includes('thomas')); 
console.log(friends.includes('Steven')); 


const calcTip = bill=>{
    if (bill>=50 && bill<=300){
        return bill*(15/100)
    }else{
        return bill*(20/100)
    }
}
console.log(calcTip(44)); 

const bills = new Array(125,555,44); 
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; 
const totals = [
    calcTip(bills[0]) + bills[0],
    calcTip(bills[1]) + bills[1],
    calcTip(bills[2]) + bills[2]
]

console.log(bills);
console.log(tips);
console.log(totals); 

// another way of defining the calctip function 
const calcTip1 = function(bill){
    return bill >=50 && bill<=300 ? bill*0.15:
    bill*.20; 
}

